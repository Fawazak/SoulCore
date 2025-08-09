// authService.js
import { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase"; // path to your firebase.js config

export const signup =  (email, password, userName) => {
    const userCredential =  createUserWithEmailAndPassword(auth, email, password);
    
    // The user is successfully created and automatically signed in!
    const user = userCredential.user;

    // 2. Now, update the user's profile to add their display name
     updateProfile(user, {
      displayName: userName // The name you got from your form input
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

