import React from 'react';
import AnimatedLogo from '@/components/custom/AnimatedLogo';

const HeroSection = () => {
  const text = 'Treatment Navigator';
  return (
    <div className="bg-[#f1ffe9ab] min-h-screen px-4 relative flex flex-col md:flex-row justify-start md:items-center items-start font-sans">
      <div className="md:pl-20 z-[999] w-full md:w-1/3 pt-32 text-center md:pt-0 flex flex-col items-center">
        <div className="text-4xl md:text-8xl absolute top-32 font-thin translate-x-[-50%] left-[50%] antipasto">
          Victreat
        </div>

        <p className="text-base md:text-2xl mt-4 drop-shadow-xl bottom-8 absolute max-w-[800px] w-full translate-x-[-50%] left-[50%] text-center px-4">
          With an increasingly complex treatment landscape, how can you ensure that you're getting the right drug for YOU?
        </p>

        <div className="absolute text-4xl md:text-8xl bottom-28 translate-x-[-50%] left-[50%] text-center w-full antipasto font-thin px-4">
          {text}
        </div>
      </div>
      <div className="absolute w-full md:h-full md:w-1/2 top-0 left-0 bg-gradient-to-b from-[#d3f0c3ab_80%] to-[#f1ffe9ab_90%] h-0 z-50"></div>
      <div className="p-4 aspect-square h-auto w-full mt-12 md:mt-0 md:p-0 md:w-0">
        <AnimatedLogo className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2 md:w-[400px] w-full aspect-square h-auto md:mt-0" />
      </div>
    </div>
  );
}

export default HeroSection;
