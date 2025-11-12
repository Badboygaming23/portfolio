import React from 'react';
import { CloseIcon } from './icons/CloseIcon';

interface ImagePopupProps {
  imageUrl: string;
  altText: string;
  onClose: () => void;
}

const ImagePopup: React.FC<ImagePopupProps> = ({ imageUrl, altText, onClose }) => {
  // Prevent background scroll when modal is open
  React.useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-[100] p-4 backdrop-blur-sm"
      onClick={onClose} // Close on backdrop click
      role="dialog"
      aria-modal="true"
      aria-label={altText || "Image Preview"}
    >
      <div 
        className="bg-slate-100 rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden relative animate-fade-in-scale-popup"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside image container
      >
        <div className="flex justify-between items-center p-3 border-b border-slate-300 bg-slate-200">
          <h3 className="text-md font-semibold text-slate-700 truncate pr-2">
            {altText}
          </h3>
          <button
            onClick={onClose}
            className="text-slate-600 hover:text-indigo-600 p-1 rounded-full hover:bg-slate-300 transition-colors"
            aria-label="Close image preview"
          >
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>
        <div className="p-4 flex-grow flex items-center justify-center overflow-auto">
          <img 
            src={imageUrl} 
            alt={altText} 
            className="max-w-full max-h-[calc(90vh-120px)] object-contain rounded" /* Adjusted max-h for padding/header */
          />
        </div>
      </div>
      <style>{`
        @keyframes fadeInScalePopup {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in-scale-popup {
          animation: fadeInScalePopup 0.25s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ImagePopup;
