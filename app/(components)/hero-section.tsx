import React from 'react';
import AnimatedLogo from '@/components/custom/AnimatedLogo';

const HeroSection = () => {
  return (
    <div className="bg-[#f1ffe9ab] min-h-screen px-4 relative flex flex-col md:flex-row justify-center md:items-center items-start">
<<<<<<< HEAD
      <div className="md:pl-20 z-[999] w-full md:w-1/3 text-center  flex flex-col items-center">
        <div className="text-8xl md:text-8xl absolute top-32 font-thin translate-x-[-50%] left-[50%] antipasto">
          Victreat
        </div>

        <p className="text-base md:text-2xl mt-4 drop-shadow-xl bottom-8 absolute max-w-[800px] w-full translate-x-[-50%] text-[#408410] left-[50%] text-center px-4">
          With an increasingly complex treatment landscape, how can you ensure that you're getting the right medication?
        </p>

        <div className="absolute text-5xl md:text-6xl lg:text-8xl bottom-28 mt-12 md:mt-0  translate-x-[-50%]  left-[50%] text-center w-full  px-4">
        Treatment Navigator
        </div>
      </div>
      <div className="absolute w-full md:h-full md:w-1/2 top-0 left-0 bg-gradient-to-b from-[#d3f0c3ab_80%] to-[#f1ffe9ab_90%] h-0 z-50"></div>
      <div className="p-4 aspect-square h-auto max-w-[400px] mx-auto mt-12 md:mt-0 md:p-0 md:w-0 w-full ">
        <AnimatedLogo className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2 md:w-[400px] w-full aspect-square h-auto md:mt-0" />
    </div>
=======
      <div className="z-[999] w-full text-center  flex flex-col items-center justify-between min-h-screen lg:pt-32 pt-16 pb-16 box-border">
        <div className="text-8xl md:text-8xl  top-32 font-thin left-[50%] antipasto">
          Victreat
        </div>

        <div className=" aspect-square h-auto max-w-[400px] mx-auto md:mt-0 md:p-0 w-full ">
          <AnimatedLogo className="md:w-[400px] w-full aspect-square h-auto md:mt-0" />
        </div>
        <div className="w-full">
          <div className="  text-5xl md:text-6xl lg:text-8xl bottom-28 md:mt-0   left-[50%] text-center w-full font-thin  px-4">
            Treatment Navigator
          </div>
          <p className="mx-auto text-base md:text-2xl mt-4 drop-shadow-xl bottom-8 md:w-[70%]  max-w-[800px] text-[#408410] left-[50%] text-center ">
            With an increasingly complex treatment landscape, how can you ensure that you're getting the right medication?
          </p>
        </div>

      </div>
      <div className="absolute w-full md:h-full md:w-1/2 top-0 left-0 bg-gradient-to-b from-[#d3f0c3ab_80%] to-[#f1ffe9ab_90%] h-0 z-50"></div>
>>>>>>> a1387e0df96df296f8c132b0bfd1c64d4a64fee0
    </div>
  );
}

export default HeroSection;
