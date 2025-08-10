import React, {  useEffect, useState } from "react";
import Transitions from '../components/Transitions'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { signup } from "../services/authServices";
import PhoneInput from 'react-phone-input-2';
import { toast } from 'sonner';
import { useLocation } from "react-router-dom";

const SignUp = ({ openModal }) => {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [feedback, setFeedback] = useState({ message: "", type: "" });
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [emailMatch, setEmailMatch] = useState(true);
  const [acceptedWaiver, setAcceptedWaiver] = useState(false);
  const location = useLocation();
  const [selectedPackage, setSelectedPackage] = useState("");

  useEffect(() => {
    if (location.state?.selectedPackage) {
      setSelectedPackage(location.state.selectedPackage);
    }
  }, [location.state]);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleEmailChange = (e) => {
    const val = e.target.value;
    setEmail(val);

    // Validate email and update state
    setIsEmailValid(validateEmail(val));
  };

  
  useEffect(() => {
    setPasswordMatch(password === confirmPassword && confirmPassword !== "");
  }, [password, confirmPassword]);
  
  useEffect(() => {
    setEmailMatch(email === confirmEmail && confirmEmail !== "");
  }, [email, confirmEmail]);

  const showFeedback = (message, type = "info") => {
    setFeedback({ message, type });
    setTimeout(() => {
      setFeedback({ message: "", type: "" });
    }, 3000);
  };
  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      showFeedback("Passwords do not match!", "error");
      return;
    }
    if (email !== confirmEmail) {
      showFeedback("Emails do not match!", "error");
      return;
    }
    try {
      await signup(email, password, (fname + " " + lname));
      showFeedback("Signed up successfully!", "success");
      // navigate to homepage or dashboard
    } catch (error) {
      console.error(error.message);
      if (error.code === "auth/email-already-in-use") {
        toast.error("This email is already in use.");
      } else {
        toast.error("Signup failed. Please try again.");
      }
    }
  };
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      once: true     // Only animate once
    });
  }, []);
  useEffect(() => {
    // Reset edited values when switching to display mode
    if (success) {
      const timeoutId = setTimeout(() => {
        // Hide success message after 3 seconds
        setSuccess(false);
      }, 3500);

      // Clear the timeout when the component unmounts or when showError changes
      return () => clearTimeout(timeoutId);
    }
    
  }, [
   success
  ]);
  
  return (
    <Transitions>
      
      <div className='font-final flex flex-col w-full bg-slate-300 min-h-screen md:pt-24'>
        <div className='flex flex-col md:flex-col justify-between text-center items-center'>
          <div className='w-full md:w-1/2 px-6 md:px-6 pt-10'>
            <h1 className='text-slate-600 text-4xl md:text-6xl font-final'>Sign Up</h1>
            <p className='mt-6 md:mt-10'>
            <b>You're just a few clicks away from joining the SoulCore Community!</b> <br></br><br></br>
As a member, you'll gain unlimited access to our growing on-demand library, a variety of structured workout plans and challenges, and weekly live mat sessions to help you stay consistent. 
<br></br><br></br>Whether you're new to Pilates or building on your practice, SoulCore offers something for every level, anytime, anywhere.

            </p>
          </div>
          
  <div className='relative w-full md:w-3/5 p-6 pt-0 md:p-10'>
          
      {feedback.message && (
        <div
          className={`absolute top-0 left-0 w-full text-center p-2 rounded-md transition-all duration-500 ${
            feedback.type === "success" ? "bg-green-100 text-green-800" :
            feedback.type === "error" ? "bg-orange-100 text-red-800 " :
            "bg-blue-100 text-blue-800"
          } animate-fadeInOut`}
        >
          {feedback.message}
        </div>
      )}
    <form
      className="bg-gray-100 flex flex-col gap-6 md:gap-10 p-6 md:p-10 rounded-xl"
      onSubmit={handleSignup} // Replace with your submit handler
    >
      <div className="justify-between flex gap-4">
      <input
        required
        type="text"
        className="bg-gray-200 rounded-xl p-2 w-full"
        placeholder="First Name"
        name="fname"
        onChange={(e) => setFname(e.target.value)}
      />
      <input
        required
        type="text"
        className="bg-gray-200 rounded-xl p-2 w-full"
        placeholder="Last Name"
        name="lname"
        onChange={(e) => setLname(e.target.value)}
      />
      </div>
      
      <input
        required
        type="email"
        className="bg-gray-200 rounded-xl p-2"
        placeholder="Email"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      
      <input
        required
        type="email"
        className="bg-gray-200 rounded-xl p-2"
        placeholder="Email Confirmation"
        name="confirmEmail"
        onChange={(e) => setConfirmEmail(e.target.value)}
      />
    <div >
    <PhoneInput
      country={'ae'}
      value={phone}
      onChange={setPhone}
      containerClass='rounded-lg max-w-full'
      inputClass='pl-20 pr-4 py-2 text-lg font-serif  '
      dropdownStyle={{borderRadius: '0.75rem', maxWidth: '200px'}}
      inputStyle={{ width: '100%',        
        borderRadius: '0.75rem',          
        backgroundColor: '#e5e7eb',       // bg-gray-200 equivalent
        fontSize: '1rem',  }}
    />
    <p className="text-gray-400 italic items-start flex font-thin text-sm pt-2">* Preferred Whatsapp number</p>
    </div>
      <input
        required
        type="password"
        className="bg-gray-200 rounded-xl p-2"
        placeholder="Password"
        name="password"
        minLength={8}
        onChange={(e) => setPassword(e.target.value)}
      />

      <input
        required
        type="password"
        className="bg-gray-200 rounded-xl p-2"
        placeholder="Confirm Password"
        name="confirmPassword"
        minLength={8}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <select
        required
        value={selectedPackage}
        onChange={(e) => setSelectedPackage(e.target.value)}
        className="bg-gray-200 rounded-xl p-2"
      >
        <option value="" className="">Select a Package</option>
        <option value="Basic Plan">On-Demand Library Only - AED 65/mo</option>
        <option value="Monthly">Monthly Membership - AED 180/mo</option>
        <option value="Private">Private Session - AED 280/session</option>
      </select>
    {confirmEmail && !emailMatch && (
      <p className="text-sm text-red-600 mt-1">
        Emails do not match
      </p>
    )}

    {confirmPassword && !passwordMatch && (
      <p className="text-sm text-red-600 mt-1">
        Passwords do not match
      </p>
    )}
      <button type="submit" className={`btn  ${(!passwordMatch || !emailMatch || !acceptedWaiver) ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={!passwordMatch || !emailMatch || !acceptedWaiver}>
              Sign Up
            </button>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="waiver"
                checked={acceptedWaiver}
                onChange={(e) => setAcceptedWaiver(e.target.checked)}
                className="w-4 h-4"
                required
              />
              <label htmlFor="waiver" className="text-sm text-gray-700">
                I accept the
              </label>
              <span
                className="text-denim underline cursor-pointer"
                onClick={() => openModal('waiver')}
              >
                Participant Waiver & Release of Liability Form
              </span>
              and the
              <span
                className="text-denim underline cursor-pointer"
                onClick={() => openModal('terms')}
              >
                Terms and Conditions
              </span>
            </div>
          </form>
              </div>
            </div>

    </div>
      
    </Transitions>
  )
}

export default SignUp
