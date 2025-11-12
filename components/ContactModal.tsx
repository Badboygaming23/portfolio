import React, { useState, useEffect } from 'react';
import { PersonalInfo } from '../types';
import { CloseIcon } from './icons/CloseIcon';
import { MailIcon } from './icons/MailIcon';
import { PhoneIcon } from './icons/PhoneIcon';
import { CopyIcon } from './icons/CopyIcon';
import { CheckIcon } from './icons/CheckIcon'; // Import CheckIcon

interface ContactModalProps {
  personalInfo: PersonalInfo;
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ personalInfo, isOpen, onClose }) => {
  const [showModal, setShowModal] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
      document.body.style.overflow = 'hidden';
    } else {
      // Delay hiding to allow for exit animation
      const timer = setTimeout(() => {
        setShowModal(false);
        document.body.style.overflow = '';
      }, 300); // Match animation duration
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text).then(() => {
      if (type === 'email') {
        setCopiedEmail(true);
        setCopiedPhone(false); // Reset other copy state
        setTimeout(() => setCopiedEmail(false), 2000);
      } else {
        setCopiedPhone(true);
        setCopiedEmail(false); // Reset other copy state
        setTimeout(() => setCopiedPhone(false), 2000);
      }
    }).catch(err => {
      console.error('Failed to copy text: ', err);
      alert('Failed to copy. Please try manually.');
    });
  };

  if (!showModal && !isOpen) return null; // Render nothing if not open and not animating out

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ease-out ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      onClick={onClose} // Close on overlay click
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div 
        className={`fixed inset-0 bg-slate-900/70 backdrop-blur-sm transition-opacity duration-300 ease-out ${isOpen ? 'opacity-100' : 'opacity-0'}`}
      />
      <div
        className={`bg-slate-800 rounded-xl shadow-2xl w-full max-w-md p-6 md:p-8 transform transition-all duration-300 ease-out ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 -translate-y-4'}`}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        <div className="flex justify-between items-center mb-6">
          <h2 id="contact-modal-title" className="text-2xl font-semibold text-indigo-400">Contact Information</h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-indigo-400 p-1 rounded-full hover:bg-slate-700 transition-colors"
            aria-label="Close contact information"
          >
            <CloseIcon className="w-7 h-7" />
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <MailIcon className="w-6 h-6 text-indigo-400" />
                <a href={`mailto:${personalInfo.email}`} className="text-slate-200 hover:text-indigo-300 transition-colors break-all">{personalInfo.email}</a>
              </div>
              <button
                onClick={() => copyToClipboard(personalInfo.email, 'email')}
                className="flex items-center space-x-1.5 text-sm text-indigo-400 hover:text-indigo-300 bg-slate-700 hover:bg-slate-600 px-3 py-1.5 rounded-md transition-all duration-150 active:scale-95"
                aria-label="Copy email address"
              >
                {copiedEmail ? <CheckIcon className="w-4 h-4 text-emerald-400" /> : <CopyIcon className="w-4 h-4" />}
                <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>
          </div>

          {personalInfo.phoneNumber && (
            <div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <PhoneIcon className="w-6 h-6 text-indigo-400" />
                  <span className="text-slate-200">{personalInfo.phoneNumber}</span>
                </div>
                 <button
                  onClick={() => copyToClipboard(personalInfo.phoneNumber!, 'phone')}
                  className="flex items-center space-x-1.5 text-sm text-indigo-400 hover:text-indigo-300 bg-slate-700 hover:bg-slate-600 px-3 py-1.5 rounded-md transition-all duration-150 active:scale-95"
                  aria-label="Copy phone number"
                >
                  {copiedPhone ? <CheckIcon className="w-4 h-4 text-emerald-400" /> : <CopyIcon className="w-4 h-4" />}
                  <span>{copiedPhone ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
            </div>
          )}
        </div>

        <button
          onClick={onClose}
          className="mt-8 w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 active:scale-95 active:brightness-90"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ContactModal;