import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDer9t5G5qr2pzs_lQqkNijjSbSGI5rrTI",
    authDomain: "chai-cafeteria-counter.firebaseapp.com",
    projectId: "chai-cafeteria-counter",
    storageBucket: "chai-cafeteria-counter.firebasestorage.app",
    messagingSenderId: "820037834439",
    appId: "1:820037834439:web:830ca4e4ca51b21a7c50e2",
    measurementId: "G-TR759YC2VS"
};

let app;
export function getFirebaseApp() {
    if (!app) {
        if (!firebaseConfig.apiKey || !firebaseConfig.projectId) {
        throw new Error('Missing Firebase env. Please set VITE_FIREBASE_* variables.');
        }
        app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
    }
    return app;
}

export function getDb() {
    return getFirestore(getFirebaseApp());
}
