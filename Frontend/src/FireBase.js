// Import the functions you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "webgenai-def42.firebaseapp.com",
  projectId: "webgenai-def42",
  storageBucket: "webgenai-def42.appspot.com",
  messagingSenderId: "302947898310",
  appId: "1:302947898310:web:6c2898dfe29f8c247198c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth
const auth = getAuth(app);

// Google provider
const provider = new GoogleAuthProvider();

// Export
export { auth, provider };
