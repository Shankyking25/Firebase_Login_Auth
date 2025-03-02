import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjy4lc4WiLehgpM1IVomVSPF3gYxFmDuY",
  authDomain: "login-auth-b8152.firebaseapp.com",
  projectId: "login-auth-b8152",
  storageBucket: "login-auth-b8152.firebasestorage.app",
  messagingSenderId: "748156718474",
  appId: "1:748156718474:web:5a5151b5e22f93c2ae4c73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;






