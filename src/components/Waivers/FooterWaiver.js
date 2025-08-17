import React from 'react';
import Modal from '../Modal';

const FooterWaiver = ({ onClose }) => (
   
    <Modal isOpen={true} onClose={onClose}>
      <div className="text-gray-700 text-left max-h-[70vh] overflow-y-auto px-4 md:px-6">
        <h2 className="text-xl font-bold mb-4">Waiver Terms</h2>
        <p className="text-gray-700">
        <div className="space-y-4 text-gray-700 text-sm">
        <h1 className="text-2xl font-bold text-denim">Participant Waiver & Release of Liability</h1>
        <p>
          I acknowledge that I have voluntarily chosen to participate in Pilates sessions (live, online, or pre-recorded), provided by Sama Al Khreisha / SoulCore Pilates (hereafter referred to as “the Instructor”).
        </p>

        <h2 className="text-xl font-semibold mt-4">1. Physical Condition & Assumption of Risk</h2>
        <p>
          I understand that Pilates involves physical movement and exercise, which may include stretching, strength-building, and balance exercises.
        </p>
        <p>
          I confirm that I am in good physical condition, or that if I have any medical conditions, injuries, or concerns, I have consulted with a physician or healthcare provider prior to participating in these sessions.
        </p>
        <p>
          I knowingly and voluntarily assume all risk of injury, whether physical or mental, that may occur during or after participation in these sessions.
        </p>

        <h2 className="text-xl font-semibold mt-4">2. Release of Liability</h2>
        <p>
          I release and discharge the Instructor from any and all liability, claims, or causes of action, known or unknown, that may arise from my participation in these sessions. This includes, but is not limited to, any personal injury, illness, or property damage.
        </p>
        <p>
          I agree that the Instructor is not responsible for providing medical care or advice, and is not liable for any injuries sustained as a result of following verbal or visual instructions.
        </p>

        <h2 className="text-xl font-semibold mt-4">3. Online Class Disclaimer</h2>
        <p>
          I understand that participating in online sessions means the Instructor may not be able to see or correct my form in real-time. I agree to take responsibility for modifying or stopping any movement that causes discomfort, pain, or injury.
        </p>

      </div>

        </p>
        </div>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-denim text-white rounded-md hover:bg-blue-500"
        >
          Close
        </button>
    </Modal>
  );

export default FooterWaiver;
