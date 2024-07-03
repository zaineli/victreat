'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { jobsData } from '@/app/careers/jobsData';
import { IoMdGlobe } from "react-icons/io";
import { BsClockFill } from "react-icons/bs";
import { GiUmbrella } from "react-icons/gi";
import { GiPawHeart } from "react-icons/gi";

type Props = {};

const Page = (props: Props) => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div>
      <div>
        <motion.div className='mb-40'
          initial='hidden'
          animate='visible'
          variants={variants}
        >
          <motion.div className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-center mt-32 sm:mt-32 md:mt-32 lg:mt-52'>
            Help us build technology for<br /> the next era of insurance.
          </motion.div>
          <motion.p className='text-center mx-auto text-base sm:text-lg md:text-xl mt-4 sm:mt-6 md:mt-8 w-11/12 sm:w-2/3 md:w-1/2 lg:w-1/3'
            variants={variants}
          >
            We're looking for exceptional talent to join us in creating technology that propels the insurance industry forward.
          </motion.p>
        </motion.div>

        <motion.div className='bg-[#F9F9F9] py-12 sm:py-16 md:py-24 px-4 sm:px-16 md:px-32 lg:px-40 xl:px-80'
          initial='hidden'
          animate='visible'
          variants={variants}
        >
          <div className='flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-32'>
            <motion.div className='text-xl sm:text-2xl md:text-[31px] font-semibold flex-1'
              variants={variants}
            >
              Our mission is clear: leverage the best of today's technology to revolutionise how insurers and brokers operate tomorrow.
            </motion.div>
            <motion.div className='text-base sm:text-lg md:text-[18px] flex-1'
              variants={variants}
            >
              At Artificial, we're not just building software - we're reshaping the future of the insurance industry. Our friendly and talented team value high performance, low ego and a sense of autonomy, coupled with a strong and sociable support network.
            </motion.div>
          </div>
          <div className='flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-12 mt-12 sm:mt-16 md:mt-24'>
            <motion.div className='w-full md:w-1/3 bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-md'
              variants={variants}
            >
              <div className='text-2xl sm:text-3xl md:text-4xl font-semibold'>02</div>
              <div className='text-lg sm:text-xl md:text-2xl font-semibold mt-2 sm:mt-3 md:mt-4'>Competitive salary</div>
              <div className='text-base sm:text-lg md:text-xl mt-2 sm:mt-3 md:mt-4'>We offer competitive salaries to attract the best talent.</div>
            </motion.div>
            <motion.div className='w-full md:w-1/3 bg-white rounded-lg shadow-md cover-image'
              variants={variants}
            >
              <img className="w-full h-full" src="https://i.insider.com/65fdee3c4af076d3cf92f1cf?width=1136&format=jpeg" alt="" />
            </motion.div>
            <motion.div className='w-full md:w-1/3 bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-md'
              variants={variants}
            >
              <div className='text-2xl sm:text-3xl md:text-4xl font-semibold'>03</div>
              <div className='text-lg sm:text-xl md:text-2xl font-semibold mt-2 sm:mt-3 md:mt-4'>Training and development</div>
              <div className='text-base sm:text-lg md:text-xl mt-2 sm:mt-3 md:mt-4'>We offer training and development opportunities to help you grow.</div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div className='flex flex-col lg:flex-row gap-8 lg:gap-32 mt-16 md:mt-24 lg:mt-32 pt-12 md:pt-24 bg-white py-12 md:py-24 px-4 sm:px-16 md:px-32 lg:px-40 xl:px-80 items-center'
          initial='hidden'
          animate='visible'
          variants={variants}
        >
          <div className="flex-col flex gap-4 sm:gap-6 md:gap-10">
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Benefits at Victreat</div>
            <p className='text-base sm:text-lg md:text-xl'>We offer the following benefits at Artificial, some of which are location dependent.</p>
            <img className="rounded-2xl" src="https://i.pinimg.com/originals/c4/8b/21/c48b214868d7bd51755ffe2317617fcf.jpg" alt="" />
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 mt-8 md:mt-12 lg:mt-0 h-2/3'>
            <motion.div className='bg-[#FAFAFA] rounded-lg shadow-md p-6 md:px-[3.5rem] md:py-[2.5rem]'
              variants={variants}
            >
              <IoMdGlobe className='text-4xl sm:text-5xl md:text-6xl text-[#D4D4D4]' />
              <div className='text-lg sm:text-xl md:text-2xl font-semibold mt-2 sm:mt-3 md:mt-4'>Flexible working</div>
              <div className='text-base sm:text-lg md:text-xl mt-2 sm:mt-3 md:mt-4'>We offer flexible working hours and the option to work from home.</div>
            </motion.div>
            <motion.div className='bg-[#FAFAFA] p-6 md:px-[3.5rem] md:py-[2.5rem] rounded-lg shadow-md'
              variants={variants}
            >
              <BsClockFill className='text-4xl sm:text-5xl md:text-6xl text-[#D4D4D4]' />
              <div className='text-lg sm:text-xl md:text-2xl font-semibold mt-2 sm:mt-3 md:mt-4'>Competitive salary</div>
              <div className='text-base sm:text-lg md:text-xl mt-2 sm:mt-3 md:mt-4'>We offer competitive salaries to attract the best talent.</div>
            </motion.div>
            <motion.div className='bg-[#FAFAFA] p-6 md:px-[3.5rem] md:py-[2.5rem] rounded-lg shadow-md'
              variants={variants}
            >
              <GiUmbrella className='text-4xl sm:text-5xl md:text-6xl text-[#D4D4D4]' />
              <div className='text-lg sm:text-xl md:text-2xl font-semibold mt-2 sm:mt-3 md:mt-4'>Training and development</div>
              <div className='text-base sm:text-lg md:text-xl mt-2 sm:mt-3 md:mt-4'>We offer training and development opportunities to help you grow.</div>
            </motion.div>
            <motion.div className='bg-[#FAFAFA] p-6 md:px-[3.5rem] md:py-[2.5rem] rounded-lg shadow-md'
              variants={variants}
            >
              <GiPawHeart className='text-4xl sm:text-5xl md:text-6xl text-[#D4D4D4]' />
              <div className='text-lg sm:text-xl md:text-2xl font-semibold mt-2 sm:mt-3 md:mt-4'>Health and wellness</div>
              <div className='text-base sm:text-lg md:text-xl mt-2 sm:mt-3 md:mt-4'>We offer health and wellness benefits to keep you healthy.</div>
            </motion.div>
          </div>
        </motion.div>

        <div className='flex flex-col lg:flex-row gap-8 lg:gap-32 pt-12 md:pt-24 bg-white py-12 md:py-24 px-4 sm:px-16 md:px-32 lg:px-40 xl:px-80 mb-12 md:mb-24'>
          <div className='text-lg sm:text-xl md:text-2xl lg:text-3xl bg-[#F9F9F9] w-full rounded-xl p-4 sm:p-6 md:p-8'>
            <span className='font-semibold'>{jobsData.length} Open Positions</span>
            {jobsData.map(job => (
              <Link key={job.id} href={`/careers/${job.id}`}>
                <div className='block'>
                  <motion.div className='flex justify-between items-center p-2 border-b'
                    variants={variants}
                  >
                    <div className='text-sm sm:text-base md:text-lg'>{job.title}</div>
                    <div>&rarr;</div> 
                  </motion.div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Page;
