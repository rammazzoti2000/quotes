// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCryIOCLxZ_95bOLLd1LYHGRxyPcIU9wgU",
  authDomain: "quotes-homework.firebaseapp.com",
  projectId: "quotes-homework",
  storageBucket: "quotes-homework.appspot.com",
  messagingSenderId: "422522315254",
  appId: "1:422522315254:web:b33e4f16ac839a7f58a7d7"
};

// Initialize Firebase
const { initializeApp } = firebase;
initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export default firebase;
