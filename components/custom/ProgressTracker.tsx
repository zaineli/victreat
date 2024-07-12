import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBullseye, faCogs } from '@fortawesome/free-solid-svg-icons';

const ProgressTracker = ({ sections }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const sectionElements = sections.map((section) => document.getElementById(section));

      const newActiveIndex = sectionElements.findIndex((section) => {
        if (!section) return false;
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        return scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight;
      });

      setActiveIndex(newActiveIndex === -1 ? sections.length - 1 : newActiveIndex);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call to set the correct state

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections]);

  const icons = [faHome, faBullseye, faCogs];

  return (
    <div className="hidden md:flex fixed right-14 top-[30%] z-[2000]">
      <div className="relative flex flex-col items-center h-full">
        {sections.map((_, index) => (
          <div key={index} className="flex flex-col items-center z-10">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                index <= activeIndex ? 'bg-[#92e665aa]' : 'bg-gray-300'
              }`}
            >
              <FontAwesomeIcon
                icon={icons[index]}
                className={`text-white ${index === activeIndex ? 'animate-bounce' : ''}`}
              />
            </div>
            {index !== sections.length - 1 && (
              <div className={`w-1 h-16 ${index < activeIndex ? 'bg-[#92e665aa]' : 'bg-gray-300'}`}></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressTracker;
