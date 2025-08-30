// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAq6hh1el6wx5F84u-iP-PHykUKOF01xH8",
  authDomain: "prime-bazaar.firebaseapp.com",
  projectId: "prime-bazaar",
  storageBucket: "prime-bazaar.firebasestorage.app",
  messagingSenderId: "679919333684",
  appId: "1:679919333684:web:84fc087e60bf08d161f561",
  measurementId: "G-FJV1YJDZJE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);