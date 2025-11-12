import React, { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

// Define props for the Section component
interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode | ((isVisible: boolean) => React.ReactNode); // Allow children to be a render prop
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = '' }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  return (
    <section 
      id={id} 
      ref={sectionRef}
      className={`py-16 md:py-24 ${className} transition-opacity duration-1000 ease-out ${ // Main transition for section opacity
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl sm:text-4xl font-bold text-center mb-12 md:mb-16 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0 delay-100' : 'opacity-0 translate-y-5' // Title animation
          }`}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            {title}
          </span>
        </h2>
        {typeof children === 'function' ? (
          // If children is a render prop, call it with isVisible state
          children(isVisible)
        ) : (
          // Otherwise, apply default animation to a wrapper
          <div 
            className={`transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0 delay-200' : 'opacity-0 translate-y-5' // Default children animation
            }`}
          >
            {children}
          </div>
        )}
      </div>
    </section>
  );
};

export default Section;