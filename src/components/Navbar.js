import { React, useState, useEffect } from "react";
import './navbar.css'
import { Link } from 'react-router-dom'
import logo2 from '../assets/logo.png' 
import { CiMenuBurger } from "react-icons/ci";
import { PiUserLight } from "react-icons/pi";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/firebase';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      
      <div className="menu">
        {/* LOGO */}
        {user ? (
          // logged in → logo on far left
          <Link className="logo2" to='/'>
            <img src={logo2} alt="Logo" />
          </Link>
        ) : null}

        {/* MENU ITEMS */}
        {!user ? (
          <>
            <Link to='/' className="item">Home</Link>
            <Link to='/about' className="item">About</Link>
            <Link className="logo2" to='/'>
              <img src={logo2} alt="Logo" />
            </Link>
            <Link to='/services' className="item">Packages</Link>
            <Link to='/signup' className="item">Sign Up</Link>
          </>
        ) : (
          <>
            <Link to='/services' className="item">Packages</Link>
            <Link to='/classes' className="item">Classes</Link>
            <Link to='/library' className="item">Library</Link>
            
          </>
        )}

        {/* USER ICON */}
        <Link to='/login' className="user-icon-container">
          <PiUserLight className="user-icon" size={35} />
        </Link>
      </div>

      {/* MOBILE MENU */}
      <CiMenuBurger
        size={50}
        className='mobMenu absolute top-4 right-4 z-20'
        onClick={() => setShowMenu(!showMenu)}
      />
      
      <div
        className={`flex flex-col p-2 gap-2 text-white bg-denim w-1/3 rounded-xl mt-16 z-10 font-final mr-4
        transition-opacity duration-500 ${showMenu ? 'block opacity-100' : 'hidden opacity-0'} `}
        style={{ position: 'absolute', top: '0px', right: '0px' }}
      >
        {!user ? (
          <>
            <Link to='/' onClick={() => setShowMenu(false)}>Home</Link>
            <Link to='/about' onClick={() => setShowMenu(false)}>About</Link>
            <Link to='/services' onClick={() => setShowMenu(false)}>Packages</Link>
            <Link to='/signup' onClick={() => setShowMenu(false)}>Sign Up</Link>
            <Link to='/login' onClick={() => setShowMenu(false)}>Login</Link>
          </>
        ) : (
          <>
            <Link to='/services' onClick={() => setShowMenu(false)}>Packages</Link>
            <Link to='/classes' onClick={() => setShowMenu(false)}>Classes</Link>
            <Link to='/library' onClick={() => setShowMenu(false)}>Library</Link>
            <Link to='/login' onClick={() => setShowMenu(false)}>Account</Link>
          </>
        )}
      </div>
    </div>
  )
}

export default Navbar;
