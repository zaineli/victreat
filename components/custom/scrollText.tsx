'use client'
import { useEffect, useRef } from 'react';

const ScrollText = ({ text }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const words = Array.from(textRef.current.children);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('text-blue-500');
          } else {
            entry.target.classList.remove('text-blue-500');
          }
        });
      },
      { threshold: 0.1 }
    );

    words.forEach((word) => observer.observe(word));

    return () => {
      words.forEach((word) => observer.unobserve(word));
    };
  }, []);

  return (
    <div ref={textRef} className="flex flex-wrap text-2xl">
      {text.split(' ').map((word, index) => (
        <span key={index} className="transition-colors duration-300 mx-1">
          {word}
        </span>
      ))}
    </div>
  );
};

export default ScrollText;
