import { FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo2 from '../assets/logo.png' 
import { MdOutlineEmail } from "react-icons/md";
import Modal from './Modal';
import React, { useState } from "react";
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
  const [isPolicyOpen, setIsPolicyOpen] = useState(false);
  
  return (
    
    <footer className="bg-denim text-white py-10 px-6 md:px-16 ">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 font-final">

        {/* Logo & Brand */}
        <div className="flex flex-col space-y-1">
          <img src={logo2} className='w-44 '></img>
        </div>

        {/* Links Section */}
        <div className="flex flex-col md:flex-row items-start gap-20">
          {/* Contact */}
          <div className='items-center flex flex-col gap-2'>
            <h2 className="text-3xl font-semibold mb-2">Connect</h2>
            <div className='flex gap-2'>
            <p><a href="mailto:samaalkhreisha@gmail.com" className="underline"><MdOutlineEmail size={34}/>
            </a></p>
            <div className="flex items-center gap-2">
            <a
              href="https://www.instagram.com/soulcorepilates"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:underline"
            >
              <FaInstagram size={30} /> 
            </a>
            </div>
          </div>
          </div>

          {/* FAQs Link */}
          <div className='items-center flex flex-col gap-2'>
            <h2 className="text-3xl font-semibold mb-2">Support</h2>
            <HashLink smooth to="/services#faq" className="hover:underline text-xl">
              FAQs
            </HashLink>
            <label  className="text-sm text-gray-700">
            <span
              className="text-white text-xl cursor-pointer hover:underline"
              onClick={() => setIsPolicyOpen(true)}
            >            Cancellation Policy
            </span>
          </label>
          </div>

          
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-2 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} SoulCore. All rights reserved.
      </div>
      <Modal isOpen={isPolicyOpen} onClose={() => setIsPolicyOpen(false)}>
      <div className="text-gray-700 text-left max-h-[70vh] overflow-y-auto px-4 md:px-6">
  <h2 className="text-2xl font-bold mb-4">Cancellation Policy</h2>

  <h3 className="text-lg font-semibold mb-2">Cancellations & Refunds</h3>
  <ul className="list-disc ml-6 mb-4 space-y-2">
    <li>You may cancel your membership at any time through your <strong>account dashboard</strong> or by contacting us.</li>
    <li><strong>No refunds</strong> are issued for partial months or unused sessions.</li>
    <li>New members may be eligible for a <strong>7-day free trial</strong>, after which the paid subscription will begin unless cancelled.</li>
  </ul>

  <h3 className="text-lg font-semibold mb-2">Live Class Cancellation Policy</h3>
  <ul className="list-disc ml-6 mb-4 space-y-2">
    <li>If you are unable to attend a scheduled live class, please cancel at least <strong>8 hours in advance</strong> to avoid losing the session.</li>
    <li>Cancellations made <strong>less than 8 hours</strong> before class time may result in the session being deducted or counted as used.</li>
  </ul>
</div>
        <button
          onClick={() => setIsPolicyOpen(false)}
          className="mt-4 px-4 py-2 bg-denim text-white rounded-md hover:bg-indigo-700"
        >
          Close
        </button>
      </Modal>
    </footer>
  );
};

export default Footer;
