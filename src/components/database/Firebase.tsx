import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCFu52TLzmrjEXVHuLdjgTDivRfkGHbLUE",
    authDomain: "next-ecom-app-bbca5.firebaseapp.com",
    projectId: "next-ecom-app-bbca5",
    storageBucket: "next-ecom-app-bbca5.firebasestorage.app",
    messagingSenderId: "386460439257",
    appId: "1:386460439257:web:e4d69b4ae02b97f2c5a4c8",
    measurementId: "G-Z586GNKWND"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
console.log(db);

export default Firebase;