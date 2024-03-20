// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "allianz-blog-1a7eb.firebaseapp.com",
  projectId: "allianz-blog-1a7eb",
  storageBucket: "allianz-blog-1a7eb.appspot.com",
  messagingSenderId: "608631870053",
  appId: "1:608631870053:web:e9d8e5e287aa645f6aec8c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
