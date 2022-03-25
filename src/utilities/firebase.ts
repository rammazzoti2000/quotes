// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { Config } from "../config/config";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: Config.API_KEY ,
  authDomain: Config.AUTH_DOMAIN,
  projectId: Config.PROJECT_ID,
  storageBucket: Config.STORAGE_BUCKET,
  messagingSenderId: Config.MESSAGING_SENDER_ID,
  appId: Config.APP_ID
};

// Initialize Firebase
const { initializeApp } = firebase;
initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export default firebase;
