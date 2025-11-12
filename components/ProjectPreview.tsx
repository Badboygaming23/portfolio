
import React, { useState, useEffect } from 'react';
import { CloseIcon } from './icons/CloseIcon';

interface ProjectPreviewProps {
  previewUrl: string;
  previewTitle: string;
  onClose: () => void;
}

const ProjectPreview: React.FC<ProjectPreviewProps> = ({ previewUrl, previewTitle, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true); // Reset loading state when URL changes
  }, [previewUrl]);

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <div className="bg-slate-100 rounded-lg shadow-2xl w-full max-w-6xl h-[90vh] flex flex-col overflow-hidden animate-fade-in">
        <div className="flex justify-between items-center p-4 border-b border-slate-300 bg-slate-200">
          <h3 className="text-lg font-semibold text-slate-800 truncate pr-2">
            Preview: <span className="text-indigo-600 break-all">{previewUrl}</span>
          </h3>
          <button
            onClick={onClose}
            className="text-slate-600 hover:text-indigo-600 p-1 rounded-full hover:bg-slate-300 transition-colors"
            aria-label="Close preview"
          >
            <CloseIcon className="w-7 h-7" />
          </button>
        </div>
        <div className="relative w-full h-full flex-grow">
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-50 text-slate-600">
              <svg className="animate-spin h-10 w-10 text-indigo-500 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <p className="text-lg">Loading preview...</p>
              <p className="text-sm text-slate-500 mt-1">Please wait while the content is loading.</p>
            </div>
          )}
          <iframe
            src={previewUrl}
            title={previewTitle}
            className={`w-full h-full border-0 ${isLoading ? 'invisible' : 'visible'}`}
            onLoad={() => setIsLoading(false)}
            onError={() => {
              setIsLoading(false);
              console.error(`Error loading iframe for URL: ${previewUrl}`);
            }}
            sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-microphone"
            allowFullScreen
            allow="microphone" // Added allow attribute for microphone explicitly
          />
        </div>
      </div>
      <style>
        {`
          @keyframes fade-in {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }
          .animate-fade-in {
            animation: fade-in 0.3s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
};

export default ProjectPreview;