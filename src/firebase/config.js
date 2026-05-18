// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth ,   } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-0z6hr9G1zNbJD8vxukdY2OU27ZIgkI0",
  authDomain: "training-project-81d14.firebaseapp.com",
  projectId: "training-project-81d14",
  storageBucket: "training-project-81d14.firebasestorage.app",
  messagingSenderId: "950436708343",
  appId: "1:950436708343:web:335d348e20aa87d11338f2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 