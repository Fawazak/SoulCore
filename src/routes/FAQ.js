import React from 'react'
import marble from '../assets/marble.jpg'
import Transitions from '../components/Transitions'

const FAQ = () => {
  return (
    <Transitions>
    <div
      className="bg-cover bg-center min-h-screen p-10"
      style={{ backgroundImage: `url(${marble})` }}
    >
      <div className=" font-serif max-w-8xl mx-auto bg-white bg-opacity-50 p-8 rounded-lg shadow-lg">
        <h1 className="text-5xl  text-forest mb-12">FAQs</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* First Row */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl  mb-6 text-lime-800">What is the duration of each session and where are they held?</h2>
            <p className="text-gray-700">Each session lasts 50 minutes, currently Sadeen is only offering online telehealth sessions (phone or video). Sadeen will be sending you a link before the session via email.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl text-lime-800 mb-6">What are the costs of each session and method of payment?</h2>
            <p className="text-gray-700">For Australian residents, the current fee is 200 AUD. If from outside of Australia, please contact Sadeen on sadeenpsychology@gmail.com for more information.
            All payments will be processed before each session.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl text-lime-800 mb-6">Do I need a referral?</h2>
            <p className="text-gray-700">No, you do not need a referral to book an appointment or to see a psychologist. You do require a referral if you are wanting to claim the Medicare rebate for your session.</p>
          </div>

          {/* Second Row */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl text-lime-800 mb-6">What rebates are available?</h2>
            <p className="text-gray-700">For Australian residents only: Australian Medicare card holders are entitled to a rebate of 92.90 AUD per session, for 10 sessions in each calendar year. If you wish to claim Medicare Benefits, please visit your GP first and obtain a Mental Health Care Plan and a referral letter.
Please send this plan and referral before your first session.
For private health insurance rebates, please check with your private health insurance provider to find out if psychological services are covered.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl text-lime-800 mb-6">Do you charge late cancellation fees?</h2>
            <p className="text-gray-700">We understand that unexpected events can occur, however, cancellations and rescheduling of appointments require at least a 24 hour notice. If notified with less than 24 hour notice, the full session fee will be charged.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl text-lime-800 mb-6">Do you work with all ages?</h2>
            <p className="text-gray-700">No, currently Sadeen works with individuals with a minimum age of 18 years old.</p>
          </div>
        </div>
      </div>
    </div>
    </Transitions>
  )
}

export default FAQ
