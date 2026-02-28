// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYqT6rH-yG1bDX3XsYcAmIzacWtFu6crk",
  authDomain: "nool-309aa.firebaseapp.com",
  projectId: "nool-309aa",
  storageBucket: "nool-309aa.firebasestorage.app",
  messagingSenderId: "1069187964057",
  appId: "1:1069187964057:web:6b14bfba2dfb92bea2ac08",
  measurementId: "G-YPZKEKMSS5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
