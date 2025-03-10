"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../../utils/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

const FirebaseContext = createContext(null);

export const FirebaseProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    return (
        <FirebaseContext.Provider value={{ user }}>
            {children}
        </FirebaseContext.Provider>
    );
};

export const useFirebase = () => useContext(FirebaseContext);
