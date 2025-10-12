import { doc, getDoc, runTransaction, serverTimestamp } from 'firebase/firestore';
import { getDb } from './firebaseClient.js';

// Increments and returns the visitor counter stored in Firestore
// Collection: metrics, Document ID: <key>
export async function incrementVisitorCounterFirebase(key = 'global') {
    const db = getDb();
    const ref = doc(db, 'metrics', key);
    const newTotal = await runTransaction(db, async (trx) => {
        const snap = await trx.get(ref);
        const current = snap.exists() ? (snap.get('total') || 0) : 0;
        const next = current + 1;
        trx.set(ref, { total: next, updatedAt: serverTimestamp(), createdAt: snap.exists() ? snap.get('createdAt') || serverTimestamp() : serverTimestamp() }, { merge: true });
        return next;
    });
    return newTotal;
}

// Reads the current visitor counter without mutating it
export async function getVisitorCounterFirebase(key = 'global') {
    const db = getDb();
    const ref = doc(db, 'metrics', key);
    const snap = await getDoc(ref);
    if (!snap.exists()) return 0;
    const total = snap.get('total');
    return typeof total === 'number' ? total : 0;
}
