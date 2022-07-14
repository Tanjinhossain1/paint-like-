// Import the functions you need from the SDKs you need
import { getApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAf-5FOMrjib4j5mUY7_E0DoZAi5WpXmrU",
  authDomain: "paint-like.firebaseapp.com",
  projectId: "paint-like",
  storageBucket: "paint-like.appspot.com",
  messagingSenderId: "696699417511",
  appId: "1:696699417511:web:039dea4750954a6bac7c82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;