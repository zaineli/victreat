import { useState, useEffect, useRef } from 'react';

const useSectionInView = <T>(options: {
  threshold?: number;
  rootMargin?: string;
} = {
}) => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
    }, options);

    const { current } = sectionRef;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [options]);

  return [sectionRef, inView] as const;
};

export default useSectionInView;
