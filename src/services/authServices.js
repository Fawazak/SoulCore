// authService.js
import { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase"; // path to your firebase.js config

export const signup = async (email, password, userName) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  
    const user = userCredential.user;
  
    await updateProfile(user, {
      displayName: userName
    });
  
    return userCredential;
  };
export const logout = () => {
    return signOut(auth);
  };
export const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};
export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        unsubscribe();
        resolve(user);
      }, reject);
    });
  


};

