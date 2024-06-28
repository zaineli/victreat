'use client'
import React from 'react';
import { motion } from 'framer-motion';
import OrbitingCircles from "@/components/magicui/orbiting-circles";
import ShinyButton from '@/components/magicui/shiny-button';

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const MotionTextBlock = ({ title, text, buttonText = "" }) => (
  <motion.div
    className="bg-white p-6"
    initial="hidden"
    animate="visible"
    variants={textVariants}
  >
    <div className="flex flex-col items-start mb-2">
      <motion.h2 className="text-7xl text-start font-medium" variants={textVariants}>
        {title}
      </motion.h2>
    </div>
    <motion.p className="text-gray-600 mb-4 text-justify" variants={textVariants}>
      {text}
    </motion.p>
    {buttonText && <ShinyButton text={buttonText} />}
  </motion.div>
);

const OrbitingImage = ({ src, className, radius, duration, delay, reverse }) => (
  <OrbitingCircles
    className={className}
    radius={radius}
    duration={duration}
    delay={delay}
    reverse={reverse}
  >
    <img src={src} alt="" />
  </OrbitingCircles>
);

function Page() {
  return (
    <div className='grid grid-cols-3 h-[calc(100vh-10rem)] px-10'>
      <div className='flex flex-col justify-center py-10'>
        <MotionTextBlock
          title="Contact Us"
          text="Welcome to Victreat, where our mission is to empower patients with up-to-date information on cancer treatments and diagnosis methods. We aim to guide you through your treatment journey with clarity and confidence. 
          Contact us to learn more about our services and how we can help you.
          "
        />
      </div>
      <div className={`flex h-full items-center justify-center overflow-hidden bg-background`}>
        <span className="pointer-events-none whitespace-pre-wrap  text-center text-7xl font-normal leading-none text-black">
          Victreat
        </span>
        <OrbitingImage src="/images/1.png" className="h-[30px] w-[30px] border-none bg-transparent" radius={80} duration={20} delay={20} />
        <OrbitingImage src="/images/1.png" className="h-[30px] w-[30px] border-none bg-transparent" radius={80} duration={20} delay={20} />
        <OrbitingImage src="/images/2.png" className="h-[30px] w-[30px] border-none bg-transparent" radius={80} duration={20} delay={10} />
        <OrbitingImage src="/images/3.png" className="h-[50px] w-[50px] border-none bg-transparent" radius={190} duration={20} reverse />
        <OrbitingImage src="/images/4.png" className="h-[50px] w-[50px] border-none bg-transparent" radius={190} duration={20} delay={20} reverse />
        <OrbitingImage src="/images/cancer.png" className="h-[50px] w-[50px] border-none bg-transparent" radius={190} duration={20} delay={20} reverse />
      </div>
      <div className='flex flex-col justify-center py-10'>
        <MotionTextBlock
          title="Join Us"
          text="Join our community to stay informed about the latest cancer treatments and diagnosis methods. We aim to guide you through your treatment journey with clarity and confidence."
          buttonText="Join Us"
        />
      </div>
    </div>
  );
}

export default Page;
