import React from 'react';
import Modal from '../Modal';

const CancellationModal = ({ onClose }) => (
   
    <Modal isOpen={true} onClose={onClose}>
      <div className="text-gray-700 text-left max-h-[70vh] overflow-y-auto px-4 md:px-6">
  <h2 className="text-2xl font-bold mb-4">Cancellation Policy</h2>

  <h3 className="text-lg font-semibold mb-2">Cancellations & Refunds</h3>
  <ul className="list-disc ml-6 mb-4 space-y-2">
    <li>You may cancel your membership at any time through your account dashboard or by contacting us.</li>
    <li><strong>No refunds</strong> are issued for partial months or unused sessions.</li>
    <li>New members may be eligible for a <strong>7-day free trial</strong>, after which the paid subscription will begin unless cancelled.</li>
  </ul>

  <h3 className="text-lg font-semibold mb-2">Live Class Cancellation Policy</h3>
  <ul className="list-disc ml-6 mb-4 space-y-2">
    <li>If you are unable to attend a scheduled live class, please cancel at least <strong>8 hours in advance</strong> to avoid losing the session.</li>
    <li>Cancellations made <strong>less than 8 hours</strong> before class time may result in the session being deducted or counted as used.</li>
  </ul>
</div>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-denim text-white rounded-md hover:bg-blue-500"
        >
          Close
        </button>
    </Modal>
  );

export default CancellationModal;
