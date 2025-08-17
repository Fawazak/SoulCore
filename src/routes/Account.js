import React, { useState, useEffect } from "react";
// Assuming 'auth' is already the result of getAuth() and 'db' is getFirestore()
// from your '../firebase/firebase' file.
import { auth, db } from "../firebase/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { updatePassword, verifyBeforeUpdateEmail, onAuthStateChanged } from "firebase/auth"; // Added onAuthStateChanged
import { FiEdit2 } from "react-icons/fi";
import { toast } from 'sonner'; // Using sonner for toast
import Transitions from "../components/Transitions";
import PhoneInput from 'react-phone-input-2'; // Assuming this is react-phone-input-2

const Skeleton = ({ className }) => {
  return <div className={`bg-gray-300 animate-pulse rounded ${className}`}></div>;
};

const Account = ({ handleLogout }) => {
  // Use state to manage the current authenticated user
  const [currentUser, setCurrentUser] = useState(null); // This is your reactive user object

  // Loading state for Firestore data
  const [loading, setLoading] = useState(true);

  // Data from Firestore
  const [phoneFromDB, setPhoneFromDB] = useState("");
  const [membership, setMembership] = useState("");

  // Edit mode toggles
  const [editingEmail, setEditingEmail] = useState(false);
  const [editingPhone, setEditingPhone] = useState(false);
  const [editingPassword, setEditingPassword] = useState(false);

  // States for updates
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // State for confirm password input
  const [newPhone, setNewPhone] = useState("");

  // Effect to listen for Firebase Auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user); // Update the currentUser state whenever auth state changes
    });
    return () => unsubscribe(); // Clean up the listener on unmount
  }, []); // Empty dependency array means this runs once on mount

  // Fetch phone and membership from Firestore
  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      // Only attempt to fetch data if a user is authenticated
      if (currentUser && currentUser.uid) {
        try {
          const userDoc = doc(db, "users", currentUser.uid); // Use currentUser.uid
          const snapshot = await getDoc(userDoc);
          if (snapshot.exists()) {
            const data = snapshot.data();
            setPhoneFromDB(data.phone || "");
            setMembership(data.membership || "");
          } else {
            // Document does not exist, perhaps a new user
            setPhoneFromDB("");
            setMembership("");
          }
        } catch (err) {
          console.error("Error fetching user data:", err);
          toast.error("Error fetching user data.");
        }
      } else {
        // No user or user.uid, clear any previous data
        setPhoneFromDB("");
        setMembership("");
      }
      setLoading(false);
    };

    fetchUserData();
  }, [currentUser, db]); // Rerun this effect when currentUser changes or db changes (though db is usually stable)

  // Update email
  const handleEmailChange = async () => {
    // Check if currentUser exists
    if (!currentUser) {
      toast.error("No user signed in!");
      return;
    }
    // Basic validation for the new email input
    if (!newEmail) {
      toast.error("Please enter a new email address.");
      return;
    }

    try {
      // Use currentUser from state
      await verifyBeforeUpdateEmail(currentUser, newEmail);

      toast.success("A verification email has been sent to your new email address. Please check your inbox to complete the update!");
      setNewEmail(""); // Clear the input field
      setEditingEmail(false); // Close the editing mode

    } catch (error) {
      console.error("Error sending verification email:", error);

      // Specific error handling based on Firebase error codes
      if (error.code === 'auth/requires-recent-login') {
        toast.error("For security, please sign in again to change your email.");
        // Implement re-authentication flow here (e.g., show a modal asking for their password again)
      } else if (error.code === 'auth/invalid-email') {
        toast.error("Please enter a valid email address.");
      } else if (error.code === 'auth/email-already-in-use') {
        toast.error("This email is already in use by another account.");
      } else if (error.code === 'auth/operation-not-allowed') {
        toast.error("Email change operation is not allowed, possibly due to a server-side setting.");
      } else {
        toast.error("Failed to initiate email change. Please try again.");
      }
    }
  };

  // Update password
  const handlePasswordChange = async () => {
    if (!currentUser) {
      toast.error("No user signed in!");
      return;
    }
    if (!newPassword) {
      toast.error("Please enter a new password.");
      return;
    }
    // TODO: Implement password confirmation logic here
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }
    if (newPassword.length < 6) { // Firebase default minimum password length is 6 characters
      toast.error("Password must be at least 6 characters long.");
      return;
    }

    try {
      await updatePassword(currentUser, newPassword); // Use currentUser
      toast.success("Successfully updated password!"); // Changed from alert
      setNewPassword("");
      setConfirmPassword(""); // Clear confirm password field
      setEditingPassword(false);
    } catch (error) {
      console.error("Error changing password:", error);
      if (error.code === 'auth/requires-recent-login') {
        toast.error("For security, please sign in again to change your password.");
      } else if (error.code === 'auth/weak-password') {
        toast.error("Password is too weak. " + error.message); // Display Firebase's specific reason
      } else {
        toast.error("Error changing password: " + error.message);
      }
    }
  };

  // Update phone in Firestore
  const handlePhoneChange = async () => {
    if (!currentUser) {
      toast.error("No user signed in!");
      return;
    }
    if (!newPhone) {
        toast.error("Please enter a new phone number.");
        return;
    }

    try {
      const userDoc = doc(db, "users", currentUser.uid); // Use currentUser.uid
      await updateDoc(userDoc, { phone: newPhone });
      setPhoneFromDB(newPhone); // Update local state for display
      setNewPhone(""); // Clear the input field
      setEditingPhone(false); // Close editing mode
      toast.success("Successfully updated phone number!");
    } catch (error) {
      console.error("Error updating phone number:", error);
      toast.error("Error updating phone number.");
    }
  };

  return (
    <Transitions>
      <div className="min-h-screen flex items-center justify-center bg-slate-300 font-final px-4">
        <div className="rounded-xl p-10 max-w-lg w-full text-start mt-20 backdrop-blur">

          <h1 className="text-3xl font-bold mb-8 text-denim text-center">
            Account Settings
          </h1>

          <div className="space-y-6">

            {/* Name */}
            <div className="border-b border-denim pb-2">
                {/* Use currentUser for display */}
                <p className="text-lg"><strong>Name:</strong> {currentUser?.displayName || "Not set"}</p>
            </div>

            {/* Email */}
            <div className="border-b border-denim pb-2">
                <div className="flex items-center justify-between">
                {/* Use currentUser for display */}
                <p className="text-lg"><strong>Email:</strong> {currentUser?.email}</p>
                <FiEdit2
                    className="text-denim cursor-pointer"
                    onClick={() => setEditingEmail(!editingEmail)}
                />
                </div>
                <div
                className={`overflow-hidden transition-all duration-500 ${
                    editingEmail ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0 mt-0"
                }`}
                >
                <input
                    type="email"
                    placeholder="Enter new email"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                    className="w-full border-b border-denim bg-transparent py-2 focus:outline-none"
                />
                <div className="flex justify-center mt-2">
                    <button
                    onClick={handleEmailChange} // No arguments needed here now
                    className="w-1/2 bg-denim text-white py-2 rounded-full hover:bg-slate-500 transition"
                    >
                    Save Email
                    </button>
                </div>
                </div>
            </div>

            {/* Phone */}
            <div className="border-b border-denim pb-2">
                <div className="flex items-center justify-between">
                <p className="text-lg">
                    <strong>Phone:</strong> {loading ? <Skeleton className="h-5 w-32 inline-block" /> : phoneFromDB || "Not set"}
                </p>
                <FiEdit2
                    className="text-denim cursor-pointer"
                    onClick={() => setEditingPhone(!editingPhone)}
                />
                </div>
                <div
                className={`overflow-hidden transition-all duration-500 ${
                    editingPhone ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0 mt-0"
                }`}
                >

                <PhoneInput
                    country={'ae'}
                    value={newPhone}
                    onChange={(value) => setNewPhone(value)}
                    containerClass='rounded-lg max-w-full'
                    inputClass='pl-20 pr-4 py-2 text-lg font-serif  '
                    dropdownStyle={{borderRadius: '0.75rem', maxWidth: '200px'}}
                    inputStyle={{ width: '100%',
                        borderRadius: '0.75rem',
                        backgroundColor: '#e5e7eb',
                        fontSize: '1rem',  }}
                    />
                <div className="flex justify-center mt-2">
                    <button
                    onClick={handlePhoneChange} // No arguments needed here now
                    className="w-1/2 bg-denim text-white py-2 rounded-full hover:bg-slate-500 transition"
                    >
                    Save Phone
                    </button>
                </div>
                </div>
            </div>

            {/* Membership */}
            <div className="border-b border-denim pb-2">
                <p className="text-lg">
                <strong>Membership:</strong> {loading ? <Skeleton className="h-5 w-32 inline-block" /> : membership || "Not set"}
                </p>
            </div>

            <div className="mt-4">
                <div className="flex items-center justify-center">
                    <button
                    onClick={() => setEditingPassword(!editingPassword)}
                    className="text-denim underline text-lg"
                    >
                    Update Password
                    </button>
                </div>

                {/* Password change form */}
                <div
                    className={`overflow-hidden transition-all duration-500 ${
                    editingPassword ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0 mt-0"
                    }`}
                >
                    <input
                    type="password"
                    placeholder="Enter new password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full border-b border-denim bg-transparent py-2 focus:outline-none"
                    />
                    <input
                    type="password"
                    placeholder="Confirm new password"
                    value={confirmPassword} // Bind this input to a state variable
                    onChange={(e) => setConfirmPassword(e.target.value)} // Update state
                    className="w-full border-b border-denim bg-transparent py-2 mt-2 focus:outline-none"
                    />
                    <div className="flex justify-center mt-2">
                    <button
                        onClick={handlePasswordChange} // No arguments needed here now
                        className="w-1/2 bg-denim text-white py-2 rounded-full hover:bg-slate-500 transition"
                    >
                        Save Password
                    </button>
                    </div>
                </div>
                </div>
                </div>

          {/* Logout */}
          <div className="flex justify-center">
          <button
            onClick={handleLogout}
            className="mt-8 w-1/2 bg-blue-800 text-white py-3 rounded-full hover:bg-cyan-900 transition"
          >
            Log Out
          </button>
        </div>
        </div>
      </div>
    </Transitions>
  );
};

export default Account;
