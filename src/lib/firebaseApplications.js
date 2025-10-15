import { getFirebaseApp, getDb } from './firebaseClient';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

function safeFileName(name) {
  try {
    return String(name || 'resume')
      .replace(/[^A-Za-z0-9._-]+/g, '_')
      .slice(0, 120);
  } catch {
    return 'resume';
  }
}

export async function submitJobApplication(app, resumeFile) {
  const appInstance = getFirebaseApp();
  const db = getDb();
  const storage = getStorage(appInstance);

  let resumeURL = null;
  let resumePath = null;

  if (resumeFile) {
    const now = new Date();
    const yyyy = now.getFullYear();
    const mm = String(now.getMonth() + 1).padStart(2, '0');
    const base = `${Date.now()}_${safeFileName(resumeFile.name)}`;
    resumePath = `applications/resumes/${yyyy}/${mm}/${base}`;
    const storageRef = ref(storage, resumePath);
    const task = uploadBytesResumable(storageRef, resumeFile, { contentType: resumeFile.type || 'application/octet-stream' });
    await new Promise((resolve, reject) => {
      const t = setTimeout(() => reject(new Error('Upload timed out')), 120000);
      task.on('state_changed',
        () => {},
        (err) => { clearTimeout(t); reject(err); },
        () => { clearTimeout(t); resolve(); }
      );
    });
    resumeURL = await getDownloadURL(task.snapshot.ref);
  }

  const docRef = await addDoc(collection(db, 'applications'), {
    name: app.name || '',
    email: app.email || '',
    phone: app.phone || '',
    position: app.position || '',
    message: app.message || '',
    resumeURL,
    resumePath,
    createdAt: serverTimestamp(),
    status: 'new',
  });

  return { id: docRef.id, resumeURL };
}

// Upload only: store resume in Firebase Storage and return its URL and path.
export async function uploadResumeToStorage(resumeFile, onProgress) {
  if (!resumeFile) throw new Error('No file provided');
  const appInstance = getFirebaseApp();
  const storage = getStorage(appInstance);
  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const base = `${Date.now()}_${safeFileName(resumeFile.name)}`;
  const resumePath = `applications/resumes/${yyyy}/${mm}/${base}`;
  const storageRef = ref(storage, resumePath);
  const task = uploadBytesResumable(storageRef, resumeFile, { contentType: resumeFile.type || 'application/octet-stream' });
  await new Promise((resolve, reject) => {
    const t = setTimeout(() => reject(new Error('Upload timed out')), 120000); // 2 min timeout
    task.on('state_changed',
      (snapshot) => {
        if (typeof onProgress === 'function' && snapshot.totalBytes > 0) {
          const pct = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          onProgress(pct);
        }
      },
      (err) => { clearTimeout(t); reject(err); },
      () => { clearTimeout(t); resolve(); }
    );
  });
  const resumeURL = await getDownloadURL(task.snapshot.ref);
  return { resumeURL, resumePath };
}
