import React, { useState, useEffect } from 'react';

interface PreloaderProps {
  isLoading: boolean;
}

const Preloader: React.FC<PreloaderProps> = ({ isLoading }) => {
  const [isUltimatelyVisible, setIsUltimatelyVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    if (!isLoading) { // App has loaded, start preloader fade out
      setIsFadingOut(true);
      const timer = setTimeout(() => {
        setIsUltimatelyVisible(false); // Remove from DOM after fade out
      }, 500); // This duration should match the CSS transition duration for opacity
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (!isUltimatelyVisible) {
    return null; // Component is removed from the DOM
  }

  return (
    <div
      className={`fixed inset-0 bg-slate-900 flex flex-col items-center justify-center z-[9999] transition-opacity duration-500 ease-in-out
                  ${isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      role="status"
      aria-live="polite"
      aria-label="Loading page content"
      aria-busy={!isFadingOut} // True while preloader is fully visible or starting to fade
    >
      <svg 
        className="w-20 h-20 md:w-24 md:h-24 text-indigo-500" 
        viewBox="0 0 100 100" 
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true" // Decorative SVG
      >
        {/* Outer spinning ring */}
        <circle
          style={{ animation: 'preloader-outer-spin 3s linear infinite' }}
          cx="50" cy="50" r="45"
          stroke="currentColor" strokeOpacity="0.3" strokeWidth="5" fill="none"
        />
        {/* Inner dashed spinning ring */}
        <circle
          style={{ animation: 'preloader-inner-spin 2.5s ease-in-out infinite' }}
          cx="50" cy="50" r="30"
          stroke="currentColor" strokeOpacity="0.6" strokeWidth="4" fill="none"
          strokeDasharray="100 50" // Creates dashed effect that moves
        />
         {/* Central pulsing dot */}
         <circle
          style={{ animation: 'preloader-pulse 1.5s ease-in-out infinite' }}
          cx="50" cy="50" r="12" // Slightly smaller
          fill="currentColor"
        />
      </svg>
      <p className="mt-8 text-lg md:text-xl text-slate-300 font-medium animate-pulse">
        Crafting your experience...
      </p>
    </div>
  );
};

export default Preloader;