// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCx_zE-Uz6SG0zhpZP9UI2tyl7Mmkc_G08",
  authDomain: "photo-f9fa7.firebaseapp.com",
  projectId: "photo-f9fa7",
  storageBucket: "photo-f9fa7.appspot.com",
  messagingSenderId: "63751838094",
  appId: "1:63751838094:web:1b6b139f360534818aecdf",
  measurementId: "G-JKHWR9C5XN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;