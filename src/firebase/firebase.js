// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUmd72_go4GJiB_lb4RajsP6LxvcqCs6w",
  authDomain: "sama-pilates.firebaseapp.com",
  projectId: "sama-pilates",
  storageBucket: "sama-pilates.firebasestorage.app",
  messagingSenderId: "1031340078525",
  appId: "1:1031340078525:web:e8726b2bd6abd89568ced4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

