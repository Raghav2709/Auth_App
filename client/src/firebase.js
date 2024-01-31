// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "auth-app-68e9e.firebaseapp.com",
  projectId: "auth-app-68e9e",
  storageBucket: "auth-app-68e9e.appspot.com",
  messagingSenderId: "913352015911",
  appId: "1:913352015911:web:1a6dcbd7918e39bc9c0e02"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);