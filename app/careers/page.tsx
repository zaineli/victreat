'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { jobsData} from '@/app/careers/jobsData';
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
          <motion.div className='text-6xl font-semibold text-center mt-52'>
            Help us build technology for<br /> the next era of insurance.
          </motion.div>
          <motion.p className='text-center mx-auto text-xl mt-8 w-1/3'
            variants={variants}
          >
            We're looking for exceptional talent to join us in creating technology that propels the insurance industry forward.
          </motion.p>
        </motion.div>

        <motion.div className='bg-[#F9F9F9] py-24 px-80'
          initial='hidden'
          animate='visible'
          variants={variants}
        >
          <div className='flex gap-32'>
            <motion.div className='text-2xl font-semibold flex-1 text-justify'
              variants={variants}
            >
              Our mission is clear: leverage the best of today's technology to revolutionise how insurers and brokers operate tomorrow.
            </motion.div>
            <motion.div className=' flex-1'
              variants={variants}
            >
              At Artificial, we're not just building software - we're reshaping the future of the insurance industry. Our friendly and talented team value high performance, low ego and a sense of autonomy, coupled with a strong and sociable support network.
            </motion.div>
          </div>
          <div className='flex gap-8 mt-24'>
            <motion.div className='w-1/4 bg-white  rounded-lg shadow-md cover-image'
              variants={variants}
            >
              <img className="w-full h-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSnfYSWn51ogpVTzkbwOGDPSC-_91FZosZf5bREofNZRZqB6xbA3V595p1xzwmTkGaNDo&usqp=CAU" alt="" />
            </motion.div>
            <motion.div className='w-1/4 bg-white p-8 rounded-lg shadow-md'
              variants={variants}
            >
              <div className='text-4xl font-semibold'>02</div>
              <div className='text-2xl font-semibold mt-4'>Competitive salary</div>
              <div className='text-lg mt-4'>We offer competitive salaries to attract the best talent.</div>
            </motion.div>
            <motion.div className='w-1/4 bg-white p-8 rounded-lg shadow-md'
              variants={variants}
            >
              <div className='text-4xl font-semibold'>03</div>
              <div className='text-2xl font-semibold mt-4'>Training and development</div>
              <div className='text-lg mt-4'>We offer training and development opportunities to help you grow.</div>
            </motion.div>
            <motion.div className='w-1/4 bg-white p-8 rounded-lg shadow-md'
              variants={variants}
            >
              <div className='text-4xl font-semibold'>04</div>
              <div className='text-2xl font-semibold mt-4'>Health and wellness</div>
              <div className='text-lg mt-4'>We offer health and wellness benefits to keep you healthy.</div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div className='flex gap-32 mt-32 pt-32 bg-white py-24 px-80'
          initial='hidden'
          animate='visible'
          variants={variants}
        >
          <div className="flex-col flex gap-12">
            <div className="text-6xl font-bold">Benefits at Victreat</div>
            <p>We offer the following benefits at Artificial, some of which are location dependent.</p>
            <img src="https://proventainternational.com/wp-content/uploads/2023/08/annesydesign_create_same_like_cancer_ribbon_redesign_bba12c38-5680-4bf7-a6a2-88d88b919539.png" alt="" />
          </div>
          <div className='grid grid-cols-2 gap-8'>
            <motion.div className='bg-[#FAFAFA] rounded-lg shadow-md px-[3.5rem] py-[2.5rem]'
              variants={variants}
            >
              <IoMdGlobe className='text-6xl text-[#D4D4D4]' />
              
              <div className='text-2xl font-semibold mt-4'>Flexible working</div>
              <div className='text-lg mt-4'>We offer flexible working hours and the option to work from home.</div>
            </motion.div>
            <motion.div className='bg-[#FAFAFA] p-8 rounded-lg shadow-md px-[3.5rem] py-[2.5rem]'
              variants={variants}
            >
              <BsClockFill className='text-6xl text-[#D4D4D4]' />
              
              <div className='text-2xl font-semibold mt-4'>Competitive salary</div>
              <div className='text-lg mt-4'>We offer competitive salaries to attract the best talent.</div>
            </motion.div>
            <motion.div className='bg-[#FAFAFA] p-8 rounded-lg shadow-md px-[3.5rem] py-[2.5rem]'
              variants={variants}
            >
              <GiUmbrella className='text-6xl text-[#D4D4D4]' />
              
              <div className='text-2xl font-semibold mt-4'>Training and development</div>
              <div className='text-lg mt-4'>We offer training and development opportunities to help you grow.</div>
            </motion.div>
            <motion.div className='bg-[#FAFAFA] p-8 rounded-lg shadow-md px-[3.5rem] py-[2.5rem]'
              variants={variants}
            >
              <GiPawHeart className='text-6xl text-[#D4D4D4]' />
              
              <div className='text-2xl font-semibold mt-4'>Health and wellness</div>
              <div className='text-lg mt-4'>We offer health and wellness benefits to keep you healthy.</div>
            </motion.div>
          </div>
        </motion.div>

        <div className='flex gap-32 pt-24 bg-white py-24 px-80 mb-24'>
          <div className='text-3xl bg-[#F9F9F9] w-full rounded-xl p-8'>
            <span className='font-semibold'>{jobsData.length} Open Positions</span>
            {jobsData.map(job => (
              <Link key={job.id} href={`/careers/${job.id}`}>
                <div className='block'>
                  <motion.div className='flex justify-between items-center p-2 border-b'
                    variants={variants}
                  >
                    <div className='text-lg'>{job.title}</div>
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
