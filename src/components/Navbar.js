import {React, useState} from "react";
import './navbar.css'
import { Link } from 'react-router-dom'
import logo2 from '../assets/logo.png' 
import { useEffect } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { PiUserLight } from "react-icons/pi";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/firebase';


const Navbar = () =>{
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
          setScrolled(offset > 50); // adjust threshold as needed
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
    return(
        <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                
            
            <div className="menu">
                <Link  to = '/'  className ="item">Home</Link>
                <Link to = '/about' className ="item">About</Link>
                <Link className="logo2" to = '/' > <img src={logo2} alt="Logo"></img></Link>
                <Link activeClass = 'active' to = '/services' spy = {true} smooth={true} offset= {-100} duration = {800}className ="item">Pricing</Link>
                {/* <Link activeClass = 'active' to = '/signup' spy = {true} smooth={true} offset= {-100} duration = {800}className ="item">Sign Up</Link> */}
                

                {user ? (
            <Link activeClass = 'active' to = '/library' spy = {true} smooth={true} offset= {-100} duration = {800}className ="item">Library</Link>
    
        ) : (
            <Link activeClass = 'active' to = '/signup' spy = {true} smooth={true} offset= {-100} duration = {800}className ="item">Sign Up</Link>
            
        )}
                
                
                
                <Link to='/login' className="user-icon-container">
                    <PiUserLight className="user-icon" size={35} />
                </Link>

             </div>


            <CiMenuBurger size={50} className='mobMenu absolute top-4 right-4 z-20' onClick={() => setShowMenu(!showMenu)}/>

            <div className={`flex flex-col p-2 gap-2 text-white bg-denim w-1/3 rounded-xl  mt-16 z-10 font-yay mr-4
                transition-opacity duration-500 ${showMenu ? 'block opacity-100' : 'hidden opacity-0'} `}
    style={{ position: 'absolute', top: '0px', right: '0px' }}
  >                <Link activeClass = 'active' to = '/' spy = {true} smooth={true} offset= {-100} duration = {800} className =" " onClick={() => setShowMenu(false)}>Home</Link>
                <Link activeClass = 'active' to = 'about' spy = {true} smooth={true} offset= {-200} duration = {800}className =" " onClick={() => setShowMenu(false)}>About</Link>
                <Link activeClass = 'active' to = '/services' spy = {true} smooth={true} offset= {-100} duration = {800}className =" " onClick={() => setShowMenu(false)}>Pricing</Link>
                {/* <Link activeClass = 'active' to = '/faqs' spy = {true} smooth={true} offset= {-250} duration = {800}className =" " onClick={() => setShowMenu(false)}>FAQs</Link> */}
                <Link activeClass = 'active' to = '/signup' spy = {true} smooth={true} offset= {-100} duration = {800}className =" " onClick={() => setShowMenu(false)}>Sign Up</Link>
            </div>
        </div>
    )
}

export default Navbar