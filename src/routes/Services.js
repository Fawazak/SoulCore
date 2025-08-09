import React, {useRef, useState, useEffect} from 'react'
import photo from '../assets/sea.png'
import Transitions from '../components/Transitions'
import faqs from '../assets/faqs.json'
import { IoIosArrowDown } from "react-icons/io";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    });
  }, []);
  const form = useRef();
    
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  return (
    <Transitions>
      <div className="bg-gray-100">
    <div className=" flex flex-col items-center min-h-screen  mb-20">
      <h1 className="text-4xl md:text-7xl font-final mb-20 py-20 px-10  md:pt-52 bg-cover bg-center w-full text-center relative z-5 text-neutral-200" style={{ backgroundImage: `url(${photo})` }}>Pricing</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-[95rem] ">

      {/* Basic Plan */}
      <div className="bg-white rounded-xl shadow-lg p-8 text-center flex flex-col hover:scale-110 transition-transform duration-300">
        <h2 className="text-2xl font-semibold mb-4">Live Group Classes</h2>
        <p className="text-4xl font-bold mb-6">AED 29<span className="text-lg">/mo</span></p>
        <ul className="text-gray-600 space-y-2 mb-6">
          <li>Access to On-Demand Library</li>
          <li>1 Live Class per Week</li>
          <li>Basic Community Access</li>
        </ul>
        <button className="btn">Select</button>
      </div>

      

  {/* Pricing Card */}
  <div className="bg-slate-500 text-white rounded-xl shadow-2xl p-8 text-center flex flex-col scale-105 hover:scale-110 transition-transform duration-300 items-center">
    
    <h2 className="text-2xl font-semibold mb-4">Monthly Membership</h2>
    <p className="text-4xl font-bold mb-6">AED 49<span className="text-lg">/mo</span></p>
    <ul className="space-y-2 mb-6">
      <li>Unlimited access to on-demand library</li>
      <li>Access to online live mat pilates classes via Zoom</li>
      <li>Access to the private SoulCore Community</li>
      <li>Discount to in-person community events/classes</li>
      <br></br>
      <li className='text-sm italic text-start'>*7-day free trial. Cancel anytime. You will automatically roll onto our monthly membership after the 7 days are complete, unless cancelled within the trial period.</li>
    </ul>
    <button className="btn bg-white text-denim">Select</button>
  </div>
{/* </div> */}


      {/* Premium Plan */}
      <div className="bg-white rounded-xl shadow-lg p-8 text-center flex flex-col w-full hover:scale-110 transition-transform duration-300">
        <h2 className="text-2xl font-semibold mb-4">On-</h2>
        <p className="text-4xl font-bold mb-6">AED 79<span className="text-lg">/mo</span></p>
        <ul className="text-gray-600 space-y-2 mb-6">
            <li>All Standard Features</li>
            <li>1:1 Private Sessions</li>
            <li>Priority Support</li>
          </ul>
          <button className="btn">Select</button>
        </div>

      </div>
      

    </div>
    <div className='bg-gray-200 px-6 py-10 flex flex-col items-center h-[600px]'>
      <h1 className='text-denim text-3xl md:text-5xl mb-6 font-final text-center'>
        FAQs
      </h1>

  {/* Scrollable inner box */}
  <section id="faq" className='space-y-4 w-full md:w-1/2 overflow-y-auto px-2 pr-3 scrollbar-thin'>
  {faqs.map((faq, index) => {
    const isOpen = openIndex === index;
    const animation = index % 2 === 0 ? 'fade-left' : 'fade-right';

    return (
      <div
        key={index}
        className='bg-white rounded-lg shadow-md p-4 transition-all duration-300'
        data-aos={animation}
      >
        <button
          onClick={() => toggleFAQ(index)}
          className='w-full flex justify-between items-center text-left text-xl font-semibold text-denim focus:outline-none'
        >
                  {faq.question}
                  <IoIosArrowDown
                    className={`ml-2 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-40 mt-2' : 'max-h-0'
                  }`}
                >
                <p className='text-gray-700 text-base'>
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </section>

    </div>

    </div>
    </Transitions>
  )
}

export default Services
