import React, { useState, useEffect } from 'react';
import { login, logout, getCurrentUser } from "../services/authServices"; // Add logout + getCurrentUser
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { updateEmail } from 'firebase/auth';
import { updatePassword } from 'firebase/auth';
import Transitions from "../components/Transitions";
import { toast } from 'sonner';
import Account from './Account';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [resetMessage, setResetMessage] = useState('');
    

  // Forgot Password Function
  const handleForgotPassword = async () => {
    if (!email) {
        toast.error("Please enter your email to reset password.")
    
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset email sent! Please check your inbox.")
    
    } catch (error) {
      console.error(error);
      toast.error("Error sending reset email. Please try again.")
   
    }
  };


  // Get logged-in user from Firebase
  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = await getCurrentUser(); 
      setUser(currentUser);
    };
    fetchUser();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      
      const currentUser = await getCurrentUser();
      setUser(currentUser);
      setEmail("")
      setPassword("")
    } catch (error) {
      console.error(error.message);
      if (error.code === "auth/invalid-credential") {
        toast.error("Incorrect username or password.");
      } else {
        toast.error("Signup failed. Please try again.");
      }
    }
  };

  const handleLogout = async () => {
    await logout();
    setUser(null);
  };
  
  if (user) {
    // User is logged in → Show welcome message + logout
    return <Account user={user} handleLogout={handleLogout} />;
    
  }

  // If not logged in → Show Login Form
  return (
    <Transitions>
    <div className="min-h-screen flex items-center justify-center bg-slate-300 font-serif px-4 pt-20">
      <div className="bg-white rounded-xl shadow-lg p-10 max-w-md w-full">
        <h1 className="text-4xl font-bold mb-8 text-denim text-center font-final">
          Login
        </h1>
        {resetMessage && (
        <div className="mb-6 w-full text-center py-2 bg-orange-100 rounded-lg animate-fadeInOut transition-opacity duration-500">
            {resetMessage}
        </div>
        )}
        <form onSubmit={handleLogin} className="flex flex-col gap-6">
          <label className="flex flex-col text-gray-700 font-semibold">
            Email
            <input
              type="email"
              required
              className="mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-denim"
              placeholder="you@example.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </label>
          <label className="flex flex-col text-gray-700 font-semibold">
            Password
            <input
              type="password"
              required
              className="mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-denim"
              placeholder="••••••••"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </label>
          <p 
            onClick={handleForgotPassword} 
            className="text-sm text-denim hover:underline cursor-pointer text-right mt-2 w-fit"
            >
            Forgot Password?
            </p>
          <button
            type="submit"
            className="btn bg-denim text-white font-bold py-3 rounded-full hover:bg-indigo-700 transition"
          >
            Log In
          </button>
        </form>
        <p className="mt-6 text-center text-gray-600">
          Don’t have an account?{' '}
          <a href="/signup" className="text-denim font-semibold hover:underline">
            Sign up here
          </a>
        </p>
      </div>
    </div>
    </Transitions>
  );
};

export default LoginPage;
