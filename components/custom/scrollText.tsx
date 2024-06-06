'use client'
import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const useIntersectionObserver = (ref, options) => {
  // const [isIntersecting, setIsIntersecting] = useState(false);
  const [ratio, setRatio] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // setIsIntersecting(entry.isIntersecting);
      setRatio(entry.intersectionRatio);
      console.log(entry.intersectionRatio);
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

  return ratio;
  // return true;
  // return isIntersecting;
};

const ScrollText = ({ text }) => {
  const ref = useRef();
  const ratio = useIntersectionObserver(ref, { threshold: Array.from({ length: 101 }).fill(0).map((_, i) => i * 0.01) });

  const words = text.split('');

  return (
    <div ref={ref} className="flex flex-wrap justify-center text-2xl h-[100vh]">
      {/* {ratio} */}
      <div
        style={
          {
            backgroundColor: 'black',
                  opacity: ratio > 0.5 ? (ratio < 0.6 ? (ratio - 0.5) / 0.1 : 1) : 0,
            // backgroundColor: ratio > 0.3 ? (ratio < 0.7 ? `rgba(0, 0, 0, ${255-(ratio - 0.3) / 0.4})` : 'black') : 'transparent',
          }
        }
        className="fixed inset-0 flex justify-center items-center ">

        <div className=' text-center  text-6xl h-max  w-[70vw]'>
          {
            words.map((l, index) => (
              <span
                style={{
                  // animationDelay: `${index * 0.01}s`,
                  // animationDelay: `${index * 0.01}s`,
                  opacity: ratio > 0.5 ? (ratio < 0.6 ? (ratio - 0.5) / 0.1 : 1) : 0,
                  color: index / words.length < (ratio - 0.6) / 0.4 ? 'white' : 'gray',
                }}
                className='scroll-text'>{l}</span>
            ))
          }
        </div>


      </div>
    </div>
  );
};

export default ScrollText;
