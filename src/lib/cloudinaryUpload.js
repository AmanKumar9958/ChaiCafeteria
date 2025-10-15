// Unsigned upload to Cloudinary with progress
// Requires VITE_CLOUDINARY_CLOUD_NAME and VITE_CLOUDINARY_UPLOAD_PRESET
// For PDFs/DOCs use resource_type=raw, set folder for organization.

export function uploadResumeToCloudinary(file, { onProgress } = {}) {
  return new Promise((resolve, reject) => {
    const cloudName = "dn8heymhj"; // or use import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
    const uploadPreset = "resume_uploads"; // or use import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
    if (!cloudName || !uploadPreset) {
      reject(new Error('Missing Cloudinary config. Set VITE_CLOUDINARY_CLOUD_NAME and VITE_CLOUDINARY_UPLOAD_PRESET.'));
      return;
    }

    const now = new Date();
    const yyyy = now.getFullYear();
    const mm = String(now.getMonth() + 1).padStart(2, '0');
    const folder = `applications/resumes/${yyyy}/${mm}`;

    // Choose endpoint based on file type: images -> image/upload, others (PDF/DOC/etc) -> raw/upload
    const isImage = typeof file?.type === 'string' && file.type.startsWith('image/');
    const resourceType = isImage ? 'image' : 'raw';
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`;

    const form = new FormData();
    form.append('upload_preset', uploadPreset);
    form.append('folder', folder);
    form.append('file', file);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.upload.onprogress = (evt) => {
      if (evt.lengthComputable && typeof onProgress === 'function') {
        const pct = Math.round((evt.loaded / evt.total) * 100);
        onProgress(pct);
      }
    };
    xhr.onerror = () => reject(new Error('Network error during Cloudinary upload'));
    xhr.timeout = 120000; // 2 minutes
    xhr.ontimeout = () => reject(new Error('Cloudinary upload timed out'));
    xhr.onload = async () => {
      try {
        const res = JSON.parse(xhr.responseText);
        if (xhr.status >= 200 && xhr.status < 300 && res.secure_url) {
          resolve({ url: res.secure_url, public_id: res.public_id, folder });
        } else {
          const errMsg = res?.error?.message || `Cloudinary upload failed (status ${xhr.status})`;
          console.warn('Cloudinary upload error:', { status: xhr.status, response: res });
          reject(new Error(errMsg));
        }
      } catch (e) {
        console.warn('Cloudinary response parse error', e);
        reject(new Error('Invalid response from Cloudinary'));
      }
    };
    xhr.send(form);
  });
}
