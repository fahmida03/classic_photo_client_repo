// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD62Go59CmVKNvETC_8aFVRZdiyblAE7UQ",
    authDomain: "classic-photo-4e002.firebaseapp.com",
    projectId: "classic-photo-4e002",
    storageBucket: "classic-photo-4e002.appspot.com",
    messagingSenderId: "62674485367",
    appId: "1:62674485367:web:7813fff7730f0d26194672",
    measurementId: "G-MXYPN2HKG0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);