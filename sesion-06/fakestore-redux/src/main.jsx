import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKeGWF4oJm-6fFdQ9sJtSQdtm3TgodO9U",
  authDomain: "fakestore-talentotech-48830.firebaseapp.com",
  projectId: "fakestore-talentotech-48830",
  storageBucket: "fakestore-talentotech-48830.appspot.com",
  messagingSenderId: "356010188040",
  appId: "1:356010188040:web:3ff775d36ea2708ff160bd",
  measurementId: "G-HYP346KRRJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
