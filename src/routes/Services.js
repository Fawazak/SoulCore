import React, {useRef, useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import photo from '../assets/sea.png'
import Transitions from '../components/Transitions'
import faqs from '../assets/faqs.json'
import { IoIosArrowDown } from "react-icons/io";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
  const navigate = useNavigate();
  const handleSelectPackage = (packageName) => {
    navigate("/signup", { state: { selectedPackage: packageName } });
  };
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const renderAnswer = (answer) => {
    return answer.split("via email").map((part, i, arr) => (
      <span key={i}>
        {part}
        {i < arr.length - 1 && (
          <a href="mailto:soulcore.online@gmail.com" >
            <span>via</span> <span className="hover:text-blue-600 underline">email</span>
          </a>
          
        )}
      </span>
    ));
  };

  return (
    <Transitions>
      <div className="bg-gray-50">
        <div className="flex flex-col items-center min-h-screen mb-24">
          <h1
            className="text-3xl md:text-5xl font-final mb-16 py-16 px-6 md:pt-40 bg-cover bg-center w-full text-center relative z-5 text-neutral-200"
            style={{ backgroundImage: `url(${photo})` }}
          >
            Packages
          </h1>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl px-6 md:px-10 items-stretch">
  
  {/* Basic Plan */}
  <div className="bg-white rounded-xl shadow-md p-6 text-center flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-lg">
    {/* Top section with fixed height */}
    <div className="flex flex-col justify-start min-h-[140px]">
      <h2 className="text-xl font-semibold mb-3 text-gray-800 font-final">
        On-Demand Library Only
      </h2>
      <p className="text-3xl font-bold text-gray-900">
        AED 65<span className="text-base font-normal">/mo</span>
      </p>
    </div>

    {/* List */}
    <ul className="text-gray-600 space-y-2 mb-6 text-sm leading-relaxed ">
      <li>Unlimited access to all pre-recorded Pilates classes</li>
      <li>Move anytime, anywhere, at your own pace</li>
      <li>New videos added monthly</li>
      <li className="italic text-gray-400 pt-10">* No live classes included</li>
    </ul>

    {/* Button */}
    <div className="mt-auto flex justify-center">
      <button 
        onClick={() => handleSelectPackage("Basic Plan")} 
        className="hover:bg-slate-600 bg-denim transition duration-300 text-white font-semibold py-2 rounded-md w-8/12"
      >
        JOIN NOW
      </button>
    </div>
  </div>

  {/* Monthly Membership */}
  <div className="bg-slate-500 text-white h-[30rem] rounded-xl scale-105 shadow-lg p-6 text-center flex flex-col transition-transform duration-300 hover:scale-110 hover:shadow-lg">
    {/* Top section with fixed height */}
    <div className="flex flex-col justify-start min-h-[140px]">
      <h2 className="text-xl font-semibold mb-3 font-final">
        Monthly Membership
      </h2>
      <p className="text-3xl font-bold">
        AED 150<span className="text-base font-normal">/mo</span>
      </p>
      <h3 className="italic text-xs text-gray-300 p-2">
        Opening offer: AED 130/month
      </h3>
    </div>

    {/* List */}
    <ul className="space-y-2 mb-6 text-sm leading-relaxed">
      <li>Access to online live mat pilates classes via Zoom</li>
      <li>Access to the private SoulCore Community</li>
      <li>Unlimited access to on-demand library</li>
      <li>Discount to in-person community events/classes</li>
      <li className="text-xs italic text-left text-white pt-6">
        * 7-day free trial. Cancel anytime. Membership is activated after trial unless cancelled.
      </li>
    </ul>

    {/* Button */}
    <div className="mt-auto flex justify-center">
      <button 
        onClick={() => handleSelectPackage("Monthly")} 
        className="hover:bg-slate-600 bg-denim text-white transition duration-300 font-semibold py-2 rounded-md w-8/12"
      >
        JOIN NOW
      </button>
    </div>
  </div>

  {/* Premium Plan */}
  <div className="bg-white rounded-xl shadow-md p-6 text-center flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-lg">
    {/* Top section with fixed height */}
    <div className="flex flex-col justify-start min-h-[140px]">
      <h2 className="text-xl font-semibold mb-3 font-final">
        Private Sessions
      </h2>
      <p className="text-3xl font-bold">
        <span className="text-base font-normal">Contact us for tailored pricing</span>
      </p>
    </div>

    {/* List */}
    <ul className="text-gray-600 space-y-2 mb-6 text-sm leading-relaxed ">
      <li>Online 1:1 session (50 min)</li>
      <li>Sessions tailored to meet your individual fitness goals</li>
      <li>
        Single/Duet/Group/Event sessions: Custom quote 
        <br></br><a href="mailto:soulcore.online@gmail.com" className="hover:underline font-bold"> Get in touch</a>
      </li>
    </ul>

    {/* Button */}
    <div className="mt-auto flex justify-center">
      <a 
        href="mailto:soulcore.online@gmail.com" 
        className="hover:bg-slate-600 bg-denim text-white transition duration-300 font-semibold py-2 rounded-md w-8/12"
      >
        EMAIL NOW
      </a>
    </div>
  </div>
</div>
</div>

        <section className="bg-gray-100 px-6 py-10 flex flex-col items-center min-h-[600px]" id="faq">
          <h1 className="text-denim text-2xl md:text-4xl mb-8 font-final text-center font-semibold">
            FAQs
          </h1>

          {/* Scrollable inner box */}
          <section
            
            className="space-y-4 w-full md:w-2/3 max-w-3xl overflow-y-auto px-4 pr-6 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100"
            style={{ maxHeight: '500px' }}
            data-aos="fade-up"
          >
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-4 transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center text-left text-lg md:text-xl font-semibold text-denim focus:outline-none"
                  >
                    {faq.question}
                    <IoIosArrowDown
                      className={`ml-2 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? 'max-h-40 mt-2' : 'max-h-0'
                    }`}
                  >
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    {renderAnswer(faq.answer)}
                    </p>
                  </div>
                </div>
              );
            })}
          </section>
        </section>
      </div>
    </Transitions>
  );
};


export default Services
