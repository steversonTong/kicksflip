// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBaHuYCfOzayytTG2uUGUt6o88JBcu4ss",
  authDomain: "kicksflip-auth.firebaseapp.com",
  projectId: "kicksflip-auth",
  storageBucket: "kicksflip-auth.appspot.com",
  messagingSenderId: "1082201278771",
  appId: "1:1082201278771:web:3bb8092a8f8b6f80fb9646",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
