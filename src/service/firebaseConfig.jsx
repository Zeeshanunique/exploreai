// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAm_TqMIRyvVjxPMJa4zqMmj2AmAiWFuoo",
  authDomain: "trip-planner-27429.firebaseapp.com",
  projectId: "trip-planner-27429",
  storageBucket: "trip-planner-27429.appspot.com",
  messagingSenderId: "1095777350717",
  appId: "1:1095777350717:web:cfe47c80767186dbb86654",
  measurementId: "G-9QECJGZXL8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);