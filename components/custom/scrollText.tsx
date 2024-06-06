'use client'
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const useIntersectionObserver = (ref: , options) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return isIntersecting;
};

const ScrollText = ({ text }) => {
  const ref = useRef();
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });

  const words = text.split(' ');

  return (
    <div className="flex flex-wrap text-2xl h-screen">
      <div className="border-2 border-black h-max">

        <div ref={ref}>
          {words.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ delay: index * 0.3, duration: 0.5 }}
              style={{ display: 'inline-block', marginRight: '5px' }}
            >
              {word}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollText;
