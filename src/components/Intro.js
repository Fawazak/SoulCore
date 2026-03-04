import React from 'react'
import './intro.css'
import { Link } from 'react-router-dom'
import bh from '../assets/bg.jpeg' 


const Intro = () => {
  return (
    <header className="relative ">
    <img
      className="video-header"
      src={bh}
    >
      {/* <source } /> */}
      {/* Your browser does not support HTML5 video. */}
    </img>
  
    <div className="intro absolute top-0 left-0 w-full h-full z-0 flex flex-col items-center justify-center text-black ">
      <h1 className="text-4xl md:text-6xl font-final italic mb-44 px-4 ">
        Strengthen Your Body. Calm Your Mind.
      </h1>
  
      <div className="flex justify-center w-full">
        <a href="/services" className="btn ">
          Learn More
        </a>
      </div>
    </div>
  </header>
  )
}

export default Intro
