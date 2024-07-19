import React from 'react';
import AnimatedLogo from '@/components/custom/AnimatedLogo';

const HeroSection = () => {
  const text = 'Treatment Navigator';
  return (
    <div className="bg-[#f1ffe9ab] min-h-screen px-4 relative flex flex-col md:flex-row justify-start md:items-center items-center font-sans">
      <div className="md:pl-20 z-[999] w-full md:w-1/3 pt-32 md:pt-0 flex flex-col items-center md:items-start text-center md:text-left">
        <div className="text-4xl md:text-8xl font-thin antipasto">
          Victreat
        </div>
        <p className="text-base md:text-2xl mt-4 drop-shadow-xl max-w-[800px] w-full text-center md:text-left px-4">
          With an increasingly complex treatment landscape, how can you ensure that you're getting the right drug for YOU?
        </p>
        <div className="text-4xl md:text-8xl mt-8 md:mt-4 antipasto font-thin">
          {text}
        </div>
      </div>
      <div className="absolute w-full md:w-1/2 h-full top-0 left-0 bg-gradient-to-b from-[#d3f0c3ab] to-[#f1ffe9ab] z-50"></div>
      <div className="flex justify-center items-center w-full mt-12 md:mt-0 md:w-1/2">
        <AnimatedLogo className="w-[80%] md:w-[400px] h-auto" />
      </div>
    </div>
  );
}

export default HeroSection;
