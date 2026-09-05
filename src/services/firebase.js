import { initializeApp, getApps } from 'firebase/app';
import { 
  getAuth, 
  GoogleAuthProvider, 
  GithubAuthProvider 
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyAgCOhl7arwhUgiDUhEBcst-c3XcrI3_G4",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "tiramisu-c73e6.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "tiramisu-c73e6",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "tiramisu-c73e6.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "225477059250",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:225477059250:web:f43a77770ad5d596735fab"
};

// Check if Firebase credentials are valid
export const isFirebaseConfigured = Boolean(
  firebaseConfig.apiKey && 
  firebaseConfig.apiKey !== 'your_firebase_api_key_here'
);

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();

export default app;
