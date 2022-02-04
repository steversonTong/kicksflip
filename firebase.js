// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdsUVa7eeLQQgdlHagpKL3EgGXcFsx7mA",
  authDomain: "kicksflip-191c8.firebaseapp.com",
  projectId: "kicksflip-191c8",
  storageBucket: "kicksflip-191c8.appspot.com",
  messagingSenderId: "1042372696104",
  appId: "1:1042372696104:web:de86e014a958de0fa2fd1d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
