import React, { useRef, useState, useEffect } from 'react';
import { PersonalInfo } from '../types';
// import { ExternalLinkIcon } from './icons/ExternalLinkIcon'; // No longer directly used for resume
import { LinkedInIcon } from './icons/LinkedInIcon';
import { GitHubIcon } from './icons/GitHubIcon';
import { MailIcon } from './icons/MailIcon';
import { DocumentTextIcon } from './icons/DocumentTextIcon'; // Using a more generic document icon
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface HeroSectionProps {
  id: string;
  personalInfo: PersonalInfo;
  onContactMeClick: () => void;
  onPreviewResumeClick: (url: string) => void; // New prop for resume preview
}

const TYPING_SPEED_MS = 120;
const DELETING_SPEED_MS = 70;
const PAUSE_DURATION_MS = 1800;

const HeroSection: React.FC<HeroSectionProps> = ({ id, personalInfo, onContactMeClick, onPreviewResumeClick }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.01 }); 

  const [typedName, setTypedName] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const nameToAnimate = personalInfo.name;

  useEffect(() => {
    if (!isVisible) return; // Start animation only when section is visible

    let timeoutId: number;

    if (!isDeleting && currentIndex < nameToAnimate.length) {
      // Typing
      timeoutId = window.setTimeout(() => {
        setTypedName(prev => prev + nameToAnimate[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, TYPING_SPEED_MS);
    } else if (isDeleting && typedName.length > 0) {
      // Deleting
      timeoutId = window.setTimeout(() => {
        setTypedName(prev => prev.slice(0, -1));
      }, DELETING_SPEED_MS);
    } else if (!isDeleting && currentIndex === nameToAnimate.length && typedName.length === nameToAnimate.length) {
      // Finished typing, pause then start deleting
      timeoutId = window.setTimeout(() => {
        setIsDeleting(true);
      }, PAUSE_DURATION_MS);
    } else if (isDeleting && typedName.length === 0) {
      // Finished deleting, pause then start typing again
      timeoutId = window.setTimeout(() => {
        setIsDeleting(false);
        setCurrentIndex(0);
      }, PAUSE_DURATION_MS / 2);
    }

    return () => window.clearTimeout(timeoutId);
  }, [typedName, currentIndex, isDeleting, nameToAnimate, isVisible]);


  return (
    <section 
      id={id} 
      ref={sectionRef}
      className={`min-h-screen flex items-center justify-center text-center px-4 py-20 md:py-32 transition-opacity duration-[1200ms] ease-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="max-w-3xl">
        {personalInfo.profileImageUrl && (
          <div 
            className={`mb-6 md:mb-8 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-90'
            }`}
            style={{ transitionDelay: isVisible ? '100ms' : '0ms' }} // Stagger profile image animation
          >
            <img
              src={personalInfo.profileImageUrl}
              alt={`Profile picture of ${personalInfo.name}`}
              className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full object-cover shadow-xl border-4 border-slate-700/50"
            />
          </div>
        )}
        <h1 
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
           style={{ transitionDelay: isVisible ? '200ms' : '0ms' }}
        >
          <span className="block mb-2 sm:mb-4 text-slate-100">
            Hi, I'm{' '}
            <span className="font-bold text-indigo-400 min-h-[1.2em] inline-block">
              {typedName}
            </span>
            <span
              className={`inline-block h-[0.85em] w-[3px] ml-1 bg-indigo-400 animate-blink align-baseline`}
              aria-hidden="true"
            ></span>.
          </span>
          {personalInfo.title && ( // Render title only if it exists
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              {personalInfo.title}
            </span>
          )}
        </h1>
        <p 
          className={`mt-6 md:mt-8 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
           style={{ transitionDelay: isVisible ? '400ms' : '0ms' }}
        >
          {personalInfo.shortBio}
        </p>
        <div 
          className={`mt-8 md:mt-12 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
           style={{ transitionDelay: isVisible ? '600ms' : '0ms' }}
        >
          {personalInfo.resumeUrl && (
            <button
              onClick={() => onPreviewResumeClick(personalInfo.resumeUrl!)}
              type="button"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 text-lg shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95 active:brightness-90"
            >
              <DocumentTextIcon className="w-5 h-5" />
              <span>View Resume</span>
            </button>
          )}
          <button
            onClick={onContactMeClick}
            type="button"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 border-2 border-indigo-500 hover:bg-indigo-500 hover:text-white text-indigo-400 font-semibold py-3 px-8 rounded-lg transition-all duration-200 text-lg shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95 active:brightness-90"
          >
             <MailIcon className="w-5 h-5" />
            <span>Contact Me</span>
          </button>
        </div>
        <div 
          className={`mt-8 md:mt-12 flex justify-center space-x-6 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
           style={{ transitionDelay: isVisible ? '800ms' : '0ms' }}
        >
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-slate-400 hover:text-indigo-400 transition-transform duration-200 ease-out transform hover:scale-110 hover:-rotate-[5deg]">
            <LinkedInIcon className="w-8 h-8" />
          </a>
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-slate-400 hover:text-indigo-400 transition-transform duration-200 ease-out transform hover:scale-110 hover:rotate-[5deg]">
            <GitHubIcon className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;