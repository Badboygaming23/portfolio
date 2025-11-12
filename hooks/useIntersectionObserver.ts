import { useEffect, useState, RefObject } from 'react';

interface IntersectionObserverOptions extends IntersectionObserverInit {
  // No custom options needed for now, but can be extended
}

export const useIntersectionObserver = (
  elementRef: RefObject<Element>,
  options: IntersectionObserverOptions = { threshold: 0.1 }
): boolean => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      // Update state when intersection changes
      // Once it's intersecting, we can keep it that way for "reveal once" animations
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        observer.unobserve(element); // Stop observing once visible to save resources
      }
    }, options);

    observer.observe(element);

    return () => {
      // Cleanup observer on component unmount
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [elementRef, options]); // Re-run effect if ref or options change

  return isIntersecting;
};
