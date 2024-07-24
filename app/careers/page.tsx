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
    <div className='bg-[#f1ffe9]  text-gray-700'>
      <div>
        <motion.div className='mb-8 py-32 px-4 sm:px-8 md:px-16 lg:px-20 max-w-[1280px] w-[80%] mx-auto box-content'
          initial='hidden'
          animate='visible'
          variants={variants}
        >
          <motion.div className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-center pt-32 sm:pt-32 md:pt-32 lg:pt-52'>
<<<<<<< HEAD
            Help us build technology for the next era&nbsp;of&nbsp;Cancer.
=======
            Join us in developing technology for the future of&nbsp;cancer&nbsp;treatment.
>>>>>>> a1387e0df96df296f8c132b0bfd1c64d4a64fee0
          </motion.div>
          <motion.p className='text-center mx-auto text-base sm:text-lg md:text-xl mt-4 sm:mt-6 md:mt-8 w-11/12 sm:w-2/3 md:w-1/2 '
            variants={variants}
          >
            We're looking for exceptional talent to join us in creating technology that propels the Cancer industry forward.
          </motion.p>
        </motion.div>

        <motion.div className='flex flex-col  gap-8 lg:gap-16  px-4 sm:px-8 md:px-16 lg:px-32  items-center'
          initial='hidden'
          animate='visible'
          variants={variants}
        >
          <div className="flex-col h-full flex gap-4 sm:gap-6 md:gap-10 flex-1 self-stretch ">
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Benefits at Victreat</div>
            <p className='text-base sm:text-lg md:text-xl'>We offer the following benefits at Victreat, some of which are location dependent.</p>
            {/* <img className="rounded-2xl max-w-96 mx-auto" src="/images/vicWallpaper3.png" alt="" /> */}
          </div>
          <div className='flex-1 grid md:grid-cols-2 grid-cols-1 gap-4 sm:gap-6 md:gap-8 lg:gap-12'>
<<<<<<< HEAD
            <motion.div className='bg-[#FAFAFA] p-6 md:px-[3.5rem] md:py-[2.5rem] rounded-lg shadow-md'
              variants={variants}
            >
              <div className='text-lg sm:text-xl md:text-2xl font-semibold mt-2 sm:mt-3 md:mt-4'>Flexible working</div>
              <div className='text-base sm:text-lg md:text-xl mt-2 sm:mt-3 md:mt-4'>We offer flexible working hours and the option to work from home.</div>
            </motion.div>
=======
>>>>>>> a1387e0df96df296f8c132b0bfd1c64d4a64fee0
            <motion.div className='bg-[#FAFAFA] p-6 md:px-[3.5rem] md:py-[2.5rem] rounded-lg shadow-md'
              variants={variants}
            >
              <div className='text-lg sm:text-xl md:text-2xl font-semibold mt-2 sm:mt-3 md:mt-4'>Competitive salary</div>
              <div className='text-base sm:text-lg md:text-xl mt-2 sm:mt-3 md:mt-4'>Our competitive salary structure is designed to attract and retain the best talent in the industry.</div>
            </motion.div>
            <motion.div className='bg-[#FAFAFA] p-6 md:px-[3.5rem] md:py-[2.5rem] rounded-lg shadow-md'
              variants={variants}
            >
<<<<<<< HEAD
              <div className='text-lg sm:text-xl md:text-2xl font-semibold mt-2 sm:mt-3 md:mt-4'>Training and development</div>
              <div className='text-base sm:text-lg md:text-xl mt-2 sm:mt-3 md:mt-4'>We offer training and development opportunities to help you grow.</div>
=======
              <div className='text-lg sm:text-xl md:text-2xl font-semibold mt-2 sm:mt-3 md:mt-4'>Professional Growth</div>
              <div className='text-base sm:text-lg md:text-xl mt-2 sm:mt-3 md:mt-4'>Opportunities for professional growth, learning and career advancement</div>
>>>>>>> a1387e0df96df296f8c132b0bfd1c64d4a64fee0
            </motion.div>
            <motion.div className='bg-[#FAFAFA] p-6 md:px-[3.5rem] md:py-[2.5rem] rounded-lg shadow-md'
              variants={variants}
            >
<<<<<<< HEAD
              <div className='text-lg sm:text-xl md:text-2xl font-semibold mt-2 sm:mt-3 md:mt-4'>Health and wellness</div>
              <div className='text-base sm:text-lg md:text-xl mt-2 sm:mt-3 md:mt-4'>We offer health and wellness benefits to keep you healthy.</div>
=======
              <div className='text-lg sm:text-xl md:text-2xl font-semibold mt-2 sm:mt-3 md:mt-4'>Creativity and Innovation Environment</div>
              <div className='text-base sm:text-lg md:text-xl mt-2 sm:mt-3 md:mt-4'>Collaborative and dynamic work environment that encourages innovation and creativity.</div>
            </motion.div>
            <motion.div className='bg-[#FAFAFA] p-6 md:px-[3.5rem] md:py-[2.5rem] rounded-lg shadow-md'
              variants={variants}
            >
              <div className='text-lg sm:text-xl md:text-2xl font-semibold mt-2 sm:mt-3 md:mt-4'>Leading Edge</div>
              <div className='text-base sm:text-lg md:text-xl mt-2 sm:mt-3 md:mt-4'>Chance to be at the forefront of healthcare technology advancements</div>
>>>>>>> a1387e0df96df296f8c132b0bfd1c64d4a64fee0
            </motion.div>
          </div>
        </motion.div>

        <div className='flex flex-col  lg:flex-row gap-8 lg:gap-32 pt-12 md:pt-24 py-12 md:py-24 px-4 sm:px-8 md:px-16 lg:px-32 pb-12- md:pb-24'>
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
