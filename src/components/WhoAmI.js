import React from 'react'
import { Link } from 'react-router-dom'
import qt from '../assets/qt.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const WhoAmI = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
<div className="relative flex flex-col md:flex-row items-center justify-center bg-white px-6 md:px-20 py-16 font-serif overflow-hidden">
  {/* Image in center */}
  <div className="relative z-0">
    <img
      src={qt}
      alt="Sadeen"
      className="w-64 h-64 md:w-[30rem] md:h-[32rem] object-cover rounded-3xl shadow-lg"
    />
  </div>

  {/* Text overlapping right side */}
  <div className="relative md:-ml-20 z-8 mt-6 md:mt-0 md:w-1/2 bg-white/70 backdrop-blur p-6 rounded-lg shadow-md text-center md:text-left" data-aos="fade-up" data-aos-offset="300"
     data-aos-easing="ease-in-sine">
    <h2 className="text-3xl md:text-5xl mb-4 font-final ">Who Am I?</h2>
    <p className="text-base md:text-lg mb-4 font-sans">
    Sama is a certified Mat and Reformer Pilates instructor, trained in Sydney, Australia.
Through SoulCore, she brings her passion for mindfulness and strength‑building movement to people everywhere, helping each client feel stronger in their body, calmer in their mind, and empowered in their daily life.

    </p>
    <Link to="/about" className="btn">
      Learn More
    </Link>
  </div>
</div>

  )
}

export default WhoAmI
