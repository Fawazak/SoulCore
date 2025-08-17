import React from 'react';
import Modal from '../Modal';

const TermsModal = ({ onClose }) => (
   
    <Modal isOpen={true} onClose={onClose}>
      <div className="text-gray-700 text-left max-h-[70vh] overflow-y-auto px-4 md:px-6">
  <h2 className="text-2xl font-bold mb-4">Terms & Conditions</h2>
  <p className="mb-4">
    By signing up for SoulCore’s online classes or membership, you agree to the following terms and conditions:
  </p>

  <h3 className="text-lg font-semibold mb-2">1. Access & Membership</h3>
  <ul className="list-disc ml-6 mb-4 space-y-2">
    <li>Your membership grants you access to live online classes, on-demand video content, and other member features as outlined in your chosen plan.</li>
    <li>Access of your account is for <strong>your personal use only</strong> and may not be shared or transferred.</li>
  </ul>

  <h3 className="text-lg font-semibold mb-2">2. Payments & Renewals</h3>
  <ul className="list-disc ml-6 mb-4 space-y-2">
    <li>All memberships and class fees are <strong>billed in advance</strong>.</li>
    <li>Monthly subscriptions <strong>renew automatically</strong> unless cancelled before the renewal date.</li>
    <li>Payments are processed securely through our payment provider.</li>
  </ul>

  <h3 className="text-lg font-semibold mb-2">3. Cancellations & Refunds</h3>
  <ul className="list-disc ml-6 mb-4 space-y-2">
    <li>You may cancel your membership at any time through your <strong>account dashboard</strong> or by contacting us.</li>
    <li><strong>No refunds</strong> are issued for partial months or unused sessions.</li>
    <li>New members may be eligible for a <strong>7-day free trial</strong>, after which the paid subscription will begin unless cancelled.</li>
  </ul>

  <h3 className="text-lg font-semibold mb-2">4. Live Class Cancellation Policy</h3>
  <ul className="list-disc ml-6 mb-4 space-y-2">
    <li>If you are unable to attend a scheduled live class, please cancel at least <strong>8 hours in advance</strong> to avoid losing the session.</li>
    <li>Cancellations made <strong>less than 8 hours</strong> before class time may result in the session being deducted or counted as used.</li>
  </ul>

  <h3 className="text-lg font-semibold mb-2">5. Content Usage</h3>
  <ul className="list-disc ml-6 mb-4 space-y-2">
    <li>All videos, written content, and materials provided by SoulCore are for <strong>personal use only</strong> and are protected by copyright.</li>
    <li>You may not <strong>record, distribute, or reuse</strong> any content without written permission.</li>
  </ul>

  <h3 className="text-lg font-semibold mb-2">6. Community Guidelines</h3>
  <ul className="list-disc ml-6 mb-4 space-y-2">
    <li>We foster a <strong>respectful, inclusive, and safe space</strong>.</li>
    <li>Any misuse, abuse, or inappropriate behavior may result in <strong>suspension or termination</strong> of your membership.</li>
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

export default TermsModal;
