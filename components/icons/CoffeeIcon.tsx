
import React from 'react';

export const CoffeeIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor" 
    className={className}
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      d="M10.5 19.5H3.75a2.25 2.25 0 01-2.25-2.25V6.75A2.25 2.25 0 013.75 4.5h6.75a2.25 2.25 0 012.25 2.25v2.25M10.5 19.5V14.25M10.5 19.5L18.75 12v-1.5a2.25 2.25 0 00-2.25-2.25H13.5A2.25 2.25 0 0011.25 6v1.5m3.75 7.5H15a2.25 2.25 0 012.25 2.25v2.25a2.25 2.25 0 01-2.25 2.25h-1.5A2.25 2.25 0 0111.25 18v-2.25a2.25 2.25 0 012.25-2.25z" 
    />
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 4.5V2.25" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 4.5V2.25" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 4.5V2.25" />
  </svg>
);
