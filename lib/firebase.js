// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB_hzclcXtg6wzdNiDIjB5lkfPxwQRpxLg",
  authDomain: "fir-basics-26c52.firebaseapp.com",
  projectId: "fir-basics-26c52",
  storageBucket: "fir-basics-26c52.appspot.com",
  messagingSenderId: "619807896649",
  appId: "1:619807896649:web:6cbc41faac1240a9d3bb98",
  measurementId: "G-GRQCD0LL5N",
};

// Initialize Firebase
if (!firebase.auth.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
