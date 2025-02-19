import { initializeApp } from "firebase/app";
import { browserLocalPersistence, getAuth, sendPasswordResetEmail, setPersistence, signOut } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore, collection, doc, setDoc, updateDoc, getDocs, query, where, serverTimestamp } from "firebase/firestore";
import { deleteUser } from "firebase/auth"; 

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

setPersistence(auth, browserLocalPersistence).catch((error) => {
  console.error('Failed to set persistence:', error);
});

export { sendPasswordResetEmail, signOut, collection, doc, setDoc, updateDoc, getDocs, query, where, serverTimestamp };
export default app;
