// Import Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCFu52TLzmrjEXVHuLdjgTDivRfkGHbLUE",
    authDomain: "next-ecom-app-bbca5.firebaseapp.com",
    projectId: "next-ecom-app-bbca5",
    storageBucket: "next-ecom-app-bbca5.firebasestorage.app",
    messagingSenderId: "386460439257",
    appId: "1:386460439257:web:e4d69b4ae02b97f2c5a4c8",
    measurementId: "G-Z586GNKWND"
};

// Initialize Firebase (Ensure it's only initialized once)
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };
