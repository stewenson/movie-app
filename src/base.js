/*
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const app = firebase.initializeApp = ({
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASURMENT_ID
});

 export default app;
*/

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyD9MW3PT8amKrBF3dWdHLICiURZv8UvNFw",
  authDomain: "movie-app-37c89.firebaseapp.com",
  projectId: "movie-app-37c89",
  storageBucket: "movie-app-37c89.appspot.com",
  messagingSenderId: "759130791322",
  appId: "1:759130791322:web:551098f97473e7d2c36e23",
  measurementId: "G-P5075MN3GJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;