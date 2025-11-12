
import React, { useRef } from 'react';
import { Quote } from '../types';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface QuoteOfTheDayProps {
  quote: Quote | null;
}

const QuoteOfTheDay: React.FC<QuoteOfTheDayProps> = ({ quote }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  if (!quote) {
    // Optionally return a placeholder or loading indicator if quote is not yet available
    return (
      <div ref={sectionRef} className="text-center max-w-2xl mx-auto py-8">
        <p className="text-slate-400">Loading wisdom...</p>
      </div>
    );
  }

  return (
    <div 
      ref={sectionRef} 
      className={`text-center max-w-2xl mx-auto transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: isVisible ? '100ms' : '0ms' }}
    >
      <blockquote className="text-xl md:text-2xl italic text-slate-300/90 leading-relaxed relative">
        <span className="absolute -left-4 -top-2 text-6xl text-indigo-500/50 opacity-50 font-serif">&ldquo;</span>
        {quote.text}
        <span className="absolute -right-4 -bottom-2 text-6xl text-indigo-500/50 opacity-50 font-serif">&rdquo;</span>
      </blockquote>
      <cite className="block mt-6 text-md md:text-lg text-indigo-400 font-medium">
        &mdash; {quote.author}
      </cite>
    </div>
  );
};

export default QuoteOfTheDay;
