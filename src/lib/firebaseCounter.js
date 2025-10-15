import { doc, getDoc, runTransaction, serverTimestamp } from 'firebase/firestore';
import { getDb } from './firebaseClient.js';

// Increments and returns the visitor counter stored in Firestore
// Primary Collection: counter, Document ID: <key>
// Backward-compat: if legacy 'metrics' doc exists, we read its value once and seed 'counter'
export async function incrementVisitorCounterFirebase(key = 'global') {
    const db = getDb();
    const counterRef = doc(db, 'counter', key);
    const legacyRef = doc(db, 'metrics', key);
    const newTotal = await runTransaction(db, async (trx) => {
        // Read both refs in the transaction (required before any write)
        const counterSnap = await trx.get(counterRef);
        const legacySnap = await trx.get(legacyRef);
        const current = counterSnap.exists()
            ? (counterSnap.get('total') || 0)
            : (legacySnap.exists() ? (legacySnap.get('total') || 0) : 0);
        const next = current + 1;
        trx.set(
            counterRef,
            {
                total: next,
                updatedAt: serverTimestamp(),
                createdAt: counterSnap.exists()
                    ? counterSnap.get('createdAt') || serverTimestamp()
                    : serverTimestamp(),
            },
            { merge: true }
        );
        return next;
    });
    return newTotal;
}

// Reads the current visitor counter without mutating it (prefers 'counter', falls back to legacy 'metrics')
export async function getVisitorCounterFirebase(key = 'global') {
    const db = getDb();
    const primaryRef = doc(db, 'counter', key);
    let snap = await getDoc(primaryRef);
    if (!snap.exists()) {
        const legacyRef = doc(db, 'metrics', key);
        snap = await getDoc(legacyRef);
        if (!snap.exists()) return 0;
    }
    const total = snap.get('total');
    return typeof total === 'number' ? total : 0;
}
