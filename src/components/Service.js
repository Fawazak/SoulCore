
    // <div className=' h-auto md:h-[32rem] p-6 justify-between items-center'>
    //   <div className='flex flex-col gap-6 md:gap-12 text-center items-center font-serif w-full md:w-[52rem]'>
    //     <h1 className='text-3xl md:text-4xl'>Services</h1>
    //     <h2 className='text-xl md:text-2xl'>Providing telehealth sessions to anywhere in the world.</h2>
    //     <h3 className='px-4 md:px-24 text-base md:text-lg'>
    //       A psychologist aims to help identify unhelpful thoughts and behaviors, 
    //       and teach you helpful and practical skills and strategies to manage life's challenges.
    //     </h3>
    //     <Link to='/services' className='btn'>Services</Link>
    //   </div>
    //   <div className='flex justify-center mt-8 md:mt-0'>
    //     <img src={photo} className='w-[15rem] md:w-[21rem]' alt='Plant'/>
    //   </div>
    // </div>



import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { MdOutlineOndemandVideo } from "react-icons/md";
import { RiUserCommunityLine } from "react-icons/ri";
import { TbLivePhoto } from "react-icons/tb";


const Service = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-neutral-100 py-12 px-6 flex flex-col items-center overflow-hidden">
  {/* Title */}
  <h1 className=" text-4xl  md:text-5xl text-center text-black font-final mb-12">
    What We Offer
  </h1>

  {/* Circle Container */}
  <div className="flex flex-wrap justify-center md:gap-48 gap-20">
    {/* Circle 1 */}
    <div className="group text-xl relative w-60 h-60 md:w-80 md:h-80 rounded-full bg-slate-500 flex items-center justify-center text-white font-bold shadow-lg cursor-pointer transition duration-300 ease-in-out overflow-hidden" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" 
     onClick={() => navigate("/services")}>
      Live Mat Pilates
      <TbLivePhoto className="absolute text-[6rem] opacity-20 group-hover:opacity-0 transition duration-300"/>

      <div className="absolute inset-0 bg-black bg-opacity-70 text-white text-md flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300 p-4 text-center">
        <p>Join us for energizing, instructor-led Pilates classes from the comfort of your home.</p>
      </div>
    </div>

    {/* Circle 2 */}
    <div className="group text-xl relative w-60 h-60 md:w-80 md:h-80 rounded-full bg-denim flex items-center justify-center text-white font-bold shadow-lg cursor-pointer transition duration-300 ease-in-out overflow-hidden" data-aos="fade-up"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
     onClick={() => navigate("/services")}>
  <MdOutlineOndemandVideo className="absolute text-[6rem] opacity-20 group-hover:opacity-0 transition duration-300" />

      On-Demand Library
      <div className="absolute inset-0 bg-black bg-opacity-70 text-white text-md flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300 p-4 text-center">
        <p>Access a growing library of recorded Pilates flows anytime, anywhere.</p>
      </div>
    </div>

    {/* Circle 3 */}
    
    <div className="group text-xl relative w-60 h-60 md:w-80 md:h-80 rounded-full bg-linen flex items-center justify-center text-white font-bold shadow-lg cursor-pointer transition duration-300 ease-in-out overflow-hidden " data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
     onClick={() => navigate("/services")}>
      Supportive Community
      <RiUserCommunityLine className="absolute text-[6rem] opacity-20 group-hover:opacity-0 transition duration-300"/>

      <div className="absolute inset-0 bg-black bg-opacity-70 text-white text-md flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300 p-4 text-center">
        <p>Connect and stay motivated with like-minded people through our private WhatsApp group.</p>
      </div>
    </div>
    
  </div>
</div>


  )
}

export default Service
