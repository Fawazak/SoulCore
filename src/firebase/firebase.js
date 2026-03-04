
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

 
// 


const firebaseConfig = {
  apieKey: "x",
  authDomain: "x",
  projectId: "x",
  storageBucket: "x",
  messagingSenderId: "x",
  appId: "x"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
