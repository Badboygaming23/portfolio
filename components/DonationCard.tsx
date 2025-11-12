import React, { useState } from 'react';
import { DonationInfo } from '../types';
import { CopyIcon } from './icons/CopyIcon';
import { CheckIcon } from './icons/CheckIcon';

interface DonationCardProps {
  donation: DonationInfo;
  onImageClick: (url: string, alt: string) => void; // New prop for image click
}

const DonationCard: React.FC<DonationCardProps> = ({ donation, onImageClick }) => {
  const [copiedNumber, setCopiedNumber] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedNumber(true);
      setTimeout(() => setCopiedNumber(false), 2000);
    }).catch(err => {
      console.error('Failed to copy text: ', err);
      alert('Failed to copy. Please try manually.');
    });
  };

  const handleImageClick = () => {
    onImageClick(donation.qrCodeImageUrl, `QR Code for ${donation.methodName} donation`);
  };

  return (
    <div 
      className="relative rounded-xl shadow-lg transition-all duration-300 hover:shadow-indigo-500/50 hover:scale-[1.02] group animate-led-border p-0.5"
    >
      <div className="bg-slate-800 rounded-[calc(0.75rem-2px)] flex flex-col items-center p-6 h-full w-full">
        <button
          type="button"
          onClick={handleImageClick}
          className="w-full aspect-square bg-white p-2 rounded-lg mb-4 shadow-md cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-800 group"
          aria-label={`View larger QR Code for ${donation.methodName}`}
        >
          <img 
            src={donation.qrCodeImageUrl} 
            alt={`QR Code for ${donation.methodName} donation`} 
            className="w-full h-full object-contain transition-opacity duration-200 group-hover:opacity-80" 
            loading="lazy"
          />
        </button>
        <h3 className="text-xl font-semibold text-slate-100 mb-1">{donation.methodName}</h3>
        <p className="text-sm text-slate-400 mb-2">Receiver: <span className="font-medium text-indigo-300">{donation.receiverName}</span></p>
        
        {donation.methodName !== 'CIMB Bank' && (
          <div className="flex items-center justify-between w-full max-w-xs bg-slate-700/50 p-2 rounded-md mb-3">
            <span className="text-slate-300 text-sm truncate pr-2">
              Number: <span className="font-mono">{donation.accountNumber}</span>
            </span>
            <button
              onClick={() => copyToClipboard(donation.accountNumber)}
              className="flex items-center space-x-1 text-xs text-indigo-400 hover:text-indigo-300 bg-slate-600 hover:bg-slate-500 px-2 py-1 rounded-md transition-all duration-150 active:scale-95"
              aria-label={`Copy ${donation.methodName} account number`}
            >
              {copiedNumber ? <CheckIcon className="w-3 h-3 text-emerald-400" /> : <CopyIcon className="w-3 h-3" />}
              <span className="text-xs">{copiedNumber ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
        )}

        {donation.details && (
          <p className="text-xs text-slate-400 text-center mt-2 px-2">{donation.details}</p>
        )}
      </div>
    </div>
  );
};

export default DonationCard;
