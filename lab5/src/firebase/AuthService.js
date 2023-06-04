import { auth } from "./init.js";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
import { useState, useEffect } from "react";
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export const logInWithGoogle = async () => {
    try {
        await signInWithPopup(auth, googleProvider);

    } catch (err) {
        console.error({ err });
        alert(err.message);
    }
};


export const logInWithGithub = async () => {
    try {
        const result = await signInWithPopup(auth, githubProvider);
        console.log("result " + result.user.email)
    } catch (err) {
        console.error({ err });
        alert(err.message);
    }
};

export const useUser = () => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const unsubcribe = auth.onAuthStateChanged((user) => {
            setUser(user);
        });
        return () => unsubcribe();
    }, []
    );
    return user;
};

export const logout = () => signOut(auth);