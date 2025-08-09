import React, { useState, useEffect } from 'react';
import { login, logout, getCurrentUser } from "../services/authServices"; // Add logout + getCurrentUser
import { useNavigate } from 'react-router-dom';
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { updateEmail } from 'firebase/auth';
import { updatePassword } from 'firebase/auth';
import Transitions from "../components/Transitions";

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [resetMessage, setResetMessage] = useState('');
    
  // Change Password or Email Functions
  const handleChangePassword = async (newPassword) => {
    try {
      const user = auth.currentUser;
      
      await updatePassword(user, newPassword);
      alert("Password updated successfully.");
    } catch (error) {
      console.error(error);
      alert("Failed to update password. You may need to re-login.");
    }
  };
  const handleChangeEmail = async (newEmail) => {
    try {
      const user = auth.currentUser;
      await updateEmail(user, newEmail);
      alert("Email updated successfully.");
    } catch (error) {
      console.error(error);
      alert("Failed to update email. You may need to re-login.");
    }
  };

  // Forgot Password Function
  const handleForgotPassword = async () => {
    if (!email) {
      setResetMessage("Please enter your email to reset password.");
      setTimeout(() => setResetMessage(''), 3000); // Remove message after 3 seconds
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      setResetMessage("Password reset email sent! Please check your inbox.");
      setTimeout(() => setResetMessage(''), 3000);
    } catch (error) {
      console.error(error);
      setResetMessage("Error sending reset email. Please try again.");
      setTimeout(() => setResetMessage(''), 3000);
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
    } catch (error) {
      console.error(error.message);
     
    }
  };

  const handleLogout = async () => {
    await logout();
    setUser(null);
  };

  if (user) {
    // User is logged in → Show welcome message + logout
    return (
        <Transitions>
      <div className="min-h-screen flex items-center justify-center bg-slate-300 font-serif px-4">
        <div className="bg-white rounded-xl shadow-lg p-10 max-w-md w-full text-center">
          <h1 className="text-4xl font-bold mb-4 text-denim font-final">Welcome to SoulCore!</h1>
          <p className="text-xl mb-6">{user.email}</p>
          <button
            onClick={handleLogout}
            className="btn bg-denim text-white font-bold py-3 rounded-full hover:bg-indigo-700 transition"
          >
            Log Out
          </button>
        </div>
      </div>
      </Transitions>
    );
  }

  // If not logged in → Show Login Form
  return (
    <Transitions>
    <div className="min-h-screen flex items-center justify-center bg-slate-300 font-serif px-4">
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
