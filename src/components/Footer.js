import logo2 from '../assets/logo.png' 
import React, { useState } from "react";
import { HashLink } from 'react-router-hash-link';
import { useAuth } from "../components/AuthContext";

const Footer = ({ openModal }) => {
  const { user } = useAuth();
  return (
    
    <footer className="bg-denim text-white py-10 px-6 md:px-16 ">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 font-final">

        {/* Logo & Brand */}
        <div className="flex flex-col space-y-1">
          <img src={logo2} className='w-44 '></img>
        </div>

        {/* Links Section */}
        {/* Links Section */}
        <div className="flex flex-col md:flex-row gap-20">
          
          {/* Connect */}
          <div>
            <h2 className="text-lg font-semibold mb-4 tracking-wide">DISCOVER</h2>
            <ul className="space-y-2 text-gray-300">
            {!user && (
                <li>
                  <a href="/signup" className="hover:underline">
                    Join SoulCore
                  </a>
                </li>
              )}
              <li>
                <a href="mailto:soulcore.online@gmail.com" className="hover:underline">
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/soulcorepilates"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h2 className="text-lg font-semibold mb-4 tracking-wide">SUPPORT</h2>
            <ul className="space-y-2 text-gray-300">
              <li>
                <HashLink smooth to="/services#faq" className="hover:underline">
                  FAQ
                </HashLink>
              </li>
              <li>
                <button
                  onClick={() => openModal('cancellation')}
                  className="hover:underline text-left"
                >
                  Cancellation Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => openModal('terms')}
                  className="hover:underline text-left"
                >
                  Terms of Condition
                </button>
              </li>
              <li>
                <button
                  onClick={() => openModal('footer waiver')}
                  className="hover:underline text-left"
                >
                  Participant Waiver
                </button>
              </li>
            </ul>
          </div>

        </div>

          
      </div>

      {/* Footer Bottom */}
      <div className="mt-2 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} SoulCore. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
