// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBuGAa_WFphOL-SvNIIxSb1iaLkRTCVzM4",
    authDomain: "lab5-58fe2.firebaseapp.com",
    projectId: "lab5-58fe2",
    storageBucket: "lab5-58fe2.appspot.com",
    messagingSenderId: "683039121370",
    appId: "1:683039121370:web:7782c68e1c49bec0392ae3",
    measurementId: "G-6XMVHYZLMT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);