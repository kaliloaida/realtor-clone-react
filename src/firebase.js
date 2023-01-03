// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7Nr5HYThaMxyOkIYap7DZfQLoeNSc71E",
  authDomain: "realtor-project-2cf29.firebaseapp.com",
  projectId: "realtor-project-2cf29",
  storageBucket: "realtor-project-2cf29.appspot.com",
  messagingSenderId: "221820445709",
  appId: "1:221820445709:web:9e1a59af4980161f5b6144",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()
