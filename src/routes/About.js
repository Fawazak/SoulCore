import React from 'react'
import photo from '../assets/samaAbout.jpeg'
import Transitions from "../components/Transitions";

const About = () => {
  return (
    <Transitions>
      <div className='flex font-sans md:pt-24'>
        
        {/* First Section: About Us */}
        <div className='px-20 py-20 justify-center'>
          <h1 className='text-denim text-4xl md:text-5xl mb-20 md:justify-center flex font-final '>The Person Behind It All</h1>
          <div className=' flex flex-col md:flex-row'>
            <div className='flex justify-center'>
              
              <img src={photo} alt='sama'   className='rounded-[5rem] md:w-10/12 md:h-auto w-40 h-40 object-cover object-left' 
              />
            </div>
            <div className="flex flex-col items-center  md:px-10 lg:px-32 mt-10  mb-10 text-center md:text-left ">
              
              <h1 className="text-3xl md:text-3xl font-final mb-2">Sama Al Khreisha</h1>

              
              <h2 className="text-lg italic text-gray-600 mb-6">SoulCore Founder & Pilates Instructor</h2>

              {/* Paragraph */}
              <p className="text-lg leading-relaxed md:text-center max-w-4xl text-gray-700 ">
              Since a young age, I’ve always been drawn to movement whether it was sports, long walks, or simply staying active. But in 2020, everything changed when I discovered Pilates on YouTube. I began doing short home mat workouts, and those 30–40 minute sessions quickly became my daily reset.
              <br /><br />
              In that quiet space on the mat, I felt more grounded. My mind felt calmer. My body felt stronger. That’s when I realized that Pilates isn’t just a workout. It’s a lifestyle. It transforms the way you move, breathe, and carry yourself.             
              <br /><br />
              I created <b>SoulCore</b> to help men and women reconnect with their bodies, gently, intentionally, and with strength. Whether you’re on your living room floor or halfway across the world, my goal is to guide you to feel stronger in your body and calmer in your mind.
              <br /><br />
              Movement shouldn’t be overwhelming. It should feel empowering. Every time you show up on the mat, you’re investing in the most important person,<b> your future self.</b>  </p>

            </div>
          </div>
          
        </div>
        
        {/* Second Section: About Me */}
        {/* <div className='flex flex-col-reverse md:flex-row justify-end mt-10'>
        <div className='flex justify-center md:ml-10 mb-10'> */}
    {/* <img 
      src={photo2} 
      alt='sadeen' 
      className='rounded-full border-8 w-56 h-60 md:w-auto md:h-auto md:mt-28 max-w-full' 
    /> */}
  {/* </div> */}
          {/* <div className='ml-6 md:ml-12 mr-6 md:mr-10 p-6 md:p-10'>
            <h1 className='text-forest text-4xl md:text-6xl'>About Me</h1>
            <br/>
            <h1 className='text-gray-600 text-2xl'>Sadeen Alkhreisha</h1>
            <br/>
            <h1 className='text-gray-600 text-sm'>BA(Psych & Neuro), PGDip(Psych), MProf(Psych)</h1>
            <br/>
            <p className='text-gray-600 text-lg md:text-xl'>
              Sadeen is a registered psychologist who aims to work collaboratively with clients to achieve the most effective goals. Sadeen will seek to tailor her methods based on this collaboration, and assist her client to develop a basket of skills suitable for them to utilise in the present moment and the future. <br/><br/>
              Her previous roles involved working with individuals and groups along the lifespan and in various settings such as public community health, hospitals and private settings (telehealth and face-to-face). During her work, she worked with individuals with anxiety, depression, OCD, trauma, personality disorders, and eating disorders.<br/><br/>
              Sadeen utilises a range of treatment modalities, including: Cognitive Behaviour Therapy (CBT), Dialectical Behaviour Therapy (DBT), Motivational Therapy, Mindfulness, and Acceptance and Commitment Therapy (ACT).<br/><br/>
              Sadeen is a registered practitioner with the Australian Health Practitioners Regulation Authority and the Psychology Board of Australia. She is a registered provider under Medicare.
            </p>
          </div> */}
        {/* </div> */}
      </div>
    </Transitions>
  )
}

export default About
