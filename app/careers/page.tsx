'use client'
import React from 'react';
import { motion } from 'framer-motion';
import OrbitingCircles from "@/components/magicui/orbiting-circles";
import ShinyButton from '@/components/magicui/shiny-button';

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

function Page() {
  return (
    <div className='grid grid-cols-3 h-[calc(100vh-10rem)] px-10'>
      <div className='flex flex-col justify-center py-10'>
        <motion.div
          className="bg-white p-6"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <div className="flex flex-col items-start mb-2">
            <motion.h2 className="text-8xl text-justify font-medium" variants={textVariants}>
              About Us
            </motion.h2>
          </div>
          <motion.p className="text-gray-600 mb-4 text-justify" variants={textVariants}>
            Welcome to Victreat, where our mission is to empower patients with up-to-date information on cancer treatments and diagnosis methods. We aim to guide you through your treatment journey with clarity and confidence.
          </motion.p>
          <ShinyButton text="View More" />
        </motion.div>
      </div>
      <div className={`flex h-full items-center justify-center overflow-hidden bg-background`}>
        <span className="pointer-events-none whitespace-pre-wrap text-slate-800 bg-clip-text text-center text-7xl font-normal leading-none text-transparent">
          Victreat
        </span>

        {/* Inner Circles */}
        <OrbitingCircles
          className="h-[30px] w-[30px] border-none bg-transparent"
          duration={20}
          delay={20}
          radius={80}
        >
          <img src="/images/1.png" alt="" />
        </OrbitingCircles>
        <OrbitingCircles
          className="h-[30px] w-[30px] border-none bg-transparent"
          duration={20}
          delay={20}
          radius={80}
        >
          <img src="/images/1.png" alt="" />
        </OrbitingCircles>
        <OrbitingCircles
          className="h-[30px] w-[30px] border-none bg-transparent"
          duration={20}
          delay={10}
          radius={80}
        >
          <img src="/images/2.png" alt="" />
        </OrbitingCircles>

        {/* Outer Circles (reverse) */}
        <OrbitingCircles
          className="h-[50px] w-[50px] border-none bg-transparent"
          radius={190}
          duration={20}
          reverse
        >
          <img src="/images/3.png" alt="" />
        </OrbitingCircles>
        <OrbitingCircles
          className="h-[50px] w-[50px] border-none bg-transparent"
          radius={190}
          duration={20}
          delay={20}
          reverse
        >
          <img src="/images/4.png" alt="" />
        </OrbitingCircles>
        <OrbitingCircles
          className="h-[50px] w-[50px] border-none bg-transparent"
          radius={190}
          duration={20}
          delay={20}
          reverse
        >
          <img src="/images/cancer.png" alt="" />
        </OrbitingCircles>
      </div>
      <div className='flex flex-col justify-center py-10'>
        <motion.div
          className="bg-white px-6 py-6"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <div className="flex flex-col items-start mb-2">
            <motion.h2 className="text-8xl text-justify font-medium" variants={textVariants}>
              Join Us
            </motion.h2>
          </div>
          <motion.p className="text-gray-600 mb-4 text-justify" variants={textVariants}>
            Join our community where our mission is to empower patients with up-to-date information on cancer treatments and diagnosis methods. We aim to guide you through your treatment journey with clarity and confidence.
          </motion.p>
          <ShinyButton text="Join Us" />
        </motion.div>
      </div>
    </div>
  );
}

export default Page;
