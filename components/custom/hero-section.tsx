import React from 'react';
import AnimatedLogo from '@/components/custom/AnimatedLogo';

const HeroSection = () => {
  const text = 'Treatment Navigator'
  return (
    <div className="bg-[#f1ffe9ab] min-h-screen px-4  relative flex-col md:flex-row  flex justify-start md:items-center items-start font-sans">
      <div className=" md:pl-20 z-[999] w-full md:w-1/3 pt-32 text-center md:pt-0 items-start flex flex-col items-center">
        <h1 className="text-7xl md:text-9xl drop-shadow-xl  ">
          Victreat
        </h1>

        <p className="text-base md:text-xl mt-4 drop-shadow-xl text-start ml-7">
          With an increasingly complex treatment landscape, how can you ensure that you're getting the right drug for YOU?
        </p>

      </div>
      <div className="absolute w-full md:h-full md:w-1/2 top-0 left-0 bg-gradient-to-b from-[#d3f0c3ab_80%] to-[#f1ffe9ab_90%] h-0 z-50"></div>
      <div className="p-4 aspect-square h-auto w-full mt-12 md:mt-0 md:p-0 md:w-0">
        <AnimatedLogo className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2 md:w-[400px] w-full aspect-square h-auto md:mt-0" />
      </div>
      <button className="absolute mt-4 bottom-8 md:bottom-16 rounded-full bg-[#FFEDED] border-none left-1/2 transform -translate-x-1/2 z-50 px-4 md:px-5 py-2 gradient-glow">
          Treatment Navigator
        </button>
    </div>
  );
}

export default HeroSection;
