import React from 'react'
import { Link } from 'react-router-dom'
import img from '../assets/mat.png'
import sydney from '../assets/sydney.png'
import img3 from '../assets/img4.png'

const GetInContact = () => {
  return (
<div className='flex flex-col md:flex-row w-full font-serif bg-slate-100 items-center justify-center py-10'>

{/* Left Content */}
<div className='flex flex-col justify-center items-center w-full md:w-2/5 gap-6'>
  <h1 className='text-3xl md:text-5xl text-center font-final'>Get in Touch!</h1>
  <p className='px-10 md:px-32 text-center font-sans'>Whether you’re looking for private one-on-one sessions, private group classes, or a Pilates experience for your next event, I’d love to hear from you!
<br></br> <br></br>For all inquiries, or collaborations, please reach out via email.
<br></br> Let’s move & connect together.

</p>
<a
  href="mailto:sama.alkhreisha14@gmail.com?subject=Inquiry%20from%20Website&body=Hello,%20I%20am%20interested%20in%20learning%20more%20about..."
  className="btn"
>Email me</a>
</div>

{/* Image Group with Overlap */}
<div className='relative w-full md:w-3/5 flex justify-center items-center mt-10 md:mt-0'>

  {/* Wrapper for all images */}
  <div className='relative w-[28rem] h-[28rem] flex justify-center items-center'>

    {/* Left Image */}
    <img
      src={img3}
      alt='left'
      className='hidden md:block absolute left-1/2 transform -translate-x-[120%] md:-translate-x-[170%] w-40 h-40 md:w-60 md:h-60  object-cover rounded-xl shadow-md z-0 transition-transform duration-300 hover:scale-110 object-left'
    />

    {/* Center Image */}
    <img
          src={img}
          alt='center'
          className='hidden md:block relative z-10 w-64 h-64 md:w-[25rem] md:h-[28rem] object-cover rounded-xl shadow-lg transition-transform duration-300 hover:scale-105'
        />
    {/* Right Image */}
    {/* <div className="relative overflow-hidden"> */}
    <img
      src={sydney}
      alt='right'
      className='absolute md:left-1/2 transform md:translate-x-[70%] w-52 h-52 md:w-60 md:h-60 object-cover rounded-xl shadow-md z-0 transition-transform duration-300 hover:scale-110'
      />
{/* </div> */}
   
  </div>

</div>
</div>

  
  )
}

export default GetInContact
