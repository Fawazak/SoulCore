import React, {  useEffect, useState } from "react";
import Transitions from '../components/Transitions'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { signup } from "../services/authServices";
import PhoneInput from 'react-phone-input-2';
import Modal from '../components/Modal';


const SignUp = () => {
  const [email, setEmail] = useState("");
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
  const [isWaiverOpen, setIsWaiverOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);



  
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
      showFeedback("Signup failed. Please try again.", "error");
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
      <Modal isOpen={isWaiverOpen} onClose={() => setIsWaiverOpen(false)}>
      <div className="text-gray-700 text-left max-h-[70vh] overflow-y-auto px-4 md:px-6">
        <h2 className="text-xl font-bold mb-4">Waiver Terms</h2>
        <p className="text-gray-700">
        <div className="space-y-4 text-gray-700 text-sm">
        <h1 className="text-2xl font-bold text-denim">Participant Waiver & Release of Liability</h1>
        <p>
          I acknowledge that I have voluntarily chosen to participate in Pilates sessions (live, online, or pre-recorded), provided by Sama Al Khreisha / SoulCore Pilates (hereafter referred to as “the Instructor”).
        </p>

        <h2 className="text-xl font-semibold mt-4">1. Physical Condition & Assumption of Risk</h2>
        <p>
          I understand that Pilates involves physical movement and exercise, which may include stretching, strength-building, and balance exercises.
        </p>
        <p>
          I confirm that I am in good physical condition, or that if I have any medical conditions, injuries, or concerns, I have consulted with a physician or healthcare provider prior to participating in these sessions.
        </p>
        <p>
          I knowingly and voluntarily assume all risk of injury, whether physical or mental, that may occur during or after participation in these sessions.
        </p>

        <h2 className="text-xl font-semibold mt-4">2. Release of Liability</h2>
        <p>
          I release and discharge the Instructor from any and all liability, claims, or causes of action, known or unknown, that may arise from my participation in these sessions. This includes, but is not limited to, any personal injury, illness, or property damage.
        </p>
        <p>
          I agree that the Instructor is not responsible for providing medical care or advice, and is not liable for any injuries sustained as a result of following verbal or visual instructions.
        </p>

        <h2 className="text-xl font-semibold mt-4">3. Online Class Disclaimer</h2>
        <p>
          I understand that participating in online sessions means the Instructor may not be able to see or correct my form in real-time. I agree to take responsibility for modifying or stopping any movement that causes discomfort, pain, or injury.
        </p>

        <h2 className="text-xl font-semibold mt-4">4. Acknowledgment & Consent</h2>
        <p>
          I have read and understood this waiver and release of liability. I voluntarily agree to its terms.
        </p>
      </div>

        </p>
        </div>
        <button
          onClick={() => setIsWaiverOpen(false)}
          className="mt-4 px-4 py-2 bg-denim text-white rounded-md hover:bg-blue-500"
        >
          Close
        </button>
      </Modal>
      <Modal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)}>
      <div className="text-gray-700 text-left max-h-[70vh] overflow-y-auto px-4 md:px-6">
  <h2 className="text-2xl font-bold mb-4">Terms & Conditions</h2>
  <p className="mb-4">
    By signing up for SoulCore’s online classes or membership, you agree to the following terms and conditions:
  </p>

  <h3 className="text-lg font-semibold mb-2">1. Access & Membership</h3>
  <ul className="list-disc ml-6 mb-4 space-y-2">
    <li>Your membership grants you access to live online classes, on-demand video content, and other member features as outlined in your chosen plan.</li>
    <li>Access is for <strong>your personal use only</strong> and may not be shared or transferred.</li>
  </ul>

  <h3 className="text-lg font-semibold mb-2">2. Payments & Renewals</h3>
  <ul className="list-disc ml-6 mb-4 space-y-2">
    <li>All memberships and class fees are <strong>billed in advance</strong>.</li>
    <li>Monthly subscriptions <strong>renew automatically</strong> unless cancelled before the renewal date.</li>
    <li>Payments are processed securely through our payment provider.</li>
  </ul>

  <h3 className="text-lg font-semibold mb-2">3. Cancellations & Refunds</h3>
  <ul className="list-disc ml-6 mb-4 space-y-2">
    <li>You may cancel your membership at any time through your <strong>account dashboard</strong> or by contacting us.</li>
    <li><strong>No refunds</strong> are issued for partial months or unused sessions.</li>
    <li>New members may be eligible for a <strong>7-day free trial</strong>, after which the paid subscription will begin unless cancelled.</li>
  </ul>

  <h3 className="text-lg font-semibold mb-2">4. Live Class Cancellation Policy</h3>
  <ul className="list-disc ml-6 mb-4 space-y-2">
    <li>If you are unable to attend a scheduled live class, please cancel at least <strong>8 hours in advance</strong> to avoid losing the session.</li>
    <li>Cancellations made <strong>less than 8 hours</strong> before class time may result in the session being deducted or counted as used.</li>
  </ul>

  <h3 className="text-lg font-semibold mb-2">5. Content Usage</h3>
  <ul className="list-disc ml-6 mb-4 space-y-2">
    <li>All videos, written content, and materials provided by SoulCore are for <strong>personal use only</strong> and are protected by copyright.</li>
    <li>You may not <strong>record, distribute, or reuse</strong> any content without written permission.</li>
  </ul>

  <h3 className="text-lg font-semibold mb-2">6. Community Guidelines</h3>
  <ul className="list-disc ml-6 mb-4 space-y-2">
    <li>We foster a <strong>respectful, inclusive, and safe space</strong>.</li>
    <li>Any misuse, abuse, or inappropriate behavior may result in <strong>suspension or termination</strong> of your membership.</li>
  </ul>
</div>
        <button
          onClick={() => setIsTermsOpen(false)}
          className="mt-4 px-4 py-2 bg-denim text-white rounded-md hover:bg-blue-700"
        >
          Close
        </button>
      </Modal>
      <div className='font-final flex flex-col w-full bg-slate-300 min-h-screen md:pt-24'>
        <div className='flex flex-col md:flex-col justify-between text-center items-center'>
          <div className='w-full md:w-1/2 px-6 md:px-10 pt-10'>
            <h1 className='text-slate-600 text-4xl md:text-6xl font-final'>Sign Up</h1>
            <p className='mt-6 md:mt-10'>
            <b>You're just a few clicks away from joining the SoulCore Community!</b> <br></br><br></br>
As a member, you'll gain unlimited access to our growing on-demand library, a variety of structured workout plans and challenges, and weekly live mat sessions to help you stay consistent. 
<br></br><br></br>Whether you're new to Pilates or building on your practice, SoulCore offers something for every level, anytime, anywhere.

            </p>
          </div>
          
  <div className='relative w-full md:w-1/2 p-6 pt-0 md:p-10'>
          
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
        onChange={(e) => setPassword(e.target.value)}
      />

      <input
        required
        type="password"
        className="bg-gray-200 rounded-xl p-2"
        placeholder="Confirm Password"
        name="confirmPassword"
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
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
      <button type="submit" className={`btn ${(!passwordMatch || !emailMatch || !acceptedWaiver) ? 'opacity-50 cursor-not-allowed' : ''}`}
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
                onClick={() => setIsWaiverOpen(true)}
              >
                Participant Waiver & Release of Liability Form
              </span>
              and the
              <span
                className="text-denim underline cursor-pointer"
                onClick={() => setIsTermsOpen(true)}
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
