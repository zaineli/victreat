'use client';

import React from 'react';
import { motion } from 'framer-motion';
import useSectionInView from '@/lib/useSectionInView';
import Link from 'next/link';

type Props = {};

const Page = (props: Props) => {
  // Using your custom hook to track when sections are in view
  const [sectionRef1, inView1] = useSectionInView({ threshold: 0.5 });
  const [sectionRef2, inView2] = useSectionInView({ threshold: 0.5 });
  const [sectionRef3, inView3] = useSectionInView({ threshold: 0.5 });

  // Variants for Framer Motion animations
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const jobs = [
    {
      id: 'software-engineer',
      title: 'Software Engineer',
      location: 'London, UK',
      description: 'We are looking for a software engineer to join our team in London. You will be working on our core product, helping us to deliver the best possible experience to our customers.',
      requirements: [
        'Experience with React and Node.js',
        'Strong problem-solving skills',
        'Excellent communication skills'
      ]
    },
    {
      id: 'product-manager',
      title: 'Product Manager',
      location: 'New York, USA',
      description: 'We are looking for a product manager to join our team in New York. You will be responsible for defining the product roadmap and working closely with the engineering team to deliver new features.',
      requirements: [
        'Experience in product management',
        'Strong analytical skills',
        'Excellent communication skills'
      ]
    },
    {
      id: 'data-scientist',
      title: 'Data Scientist',
      location: 'San Francisco, USA',
      description: 'We are looking for a data scientist to join our team in San Francisco. You will be responsible for analysing data and providing insights to help drive business decisions.',
      requirements: [
        'Experience with Python and SQL',
        'Strong analytical skills',
        'Excellent communication skills'
      ]
    }
  ];

  const addSearchParam = (id: string) => () => {
    const url = new URL(window.location.href);
    url.searchParams.set('job', id);
    window.history.pushState({}, '', url);
  }

  return (
    <div>
      <div>
        <motion.div className='mb-40'
          ref={sectionRef1}
          initial='hidden'
          animate={inView1 ? 'visible' : 'hidden'}
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
          ref={sectionRef2}
          initial='hidden'
          animate={inView2 ? 'visible' : 'hidden'}
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
          <div className='flex gap-32 mt-24'>
            <motion.div className='w-1/4 bg-white p-8 rounded-lg shadow-md'
              variants={variants}
            >
              <div className='text-4xl font-semibold'>01</div>
              <div className='text-2xl font-semibold mt-4'>Flexible working</div>
              <div className='text-lg mt-4'>We offer flexible working hours and the option to work from home.</div>
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
          ref={sectionRef3}
          initial='hidden'
          animate={inView3 ? 'visible' : 'hidden'}
          variants={variants}
        >
          <div className="flex-col flex gap-12">
            <div className="text-6xl font-bold">Benefits at Victreat</div>
            <p>We offer the following benefits at Artificial, some of which are location dependent.</p>
            <img src="https://proventainternational.com/wp-content/uploads/2023/08/annesydesign_create_same_like_cancer_ribbon_redesign_bba12c38-5680-4bf7-a6a2-88d88b919539.png" alt="" />
          </div>
          <div className='grid grid-cols-2 gap-32'>
            <motion.div className='bg-white p-8 rounded-lg shadow-md'
              variants={variants}
            >
              <div className='text-4xl font-semibold'>01</div>
              <div className='text-2xl font-semibold mt-4'>Flexible working</div>
              <div className='text-lg mt-4'>We offer flexible working hours and the option to work from home.</div>
            </motion.div>
            <motion.div className='bg-white p-8 rounded-lg shadow-md'
              variants={variants}
            >
              <div className='text-4xl font-semibold'>02</div>
              <div className='text-2xl font-semibold mt-4'>Competitive salary</div>
              <div className='text-lg mt-4'>We offer competitive salaries to attract the best talent.</div>
            </motion.div>
            <motion.div className='bg-white p-8 rounded-lg shadow-md'
              variants={variants}
            >
              <div className='text-4xl font-semibold'>03</div>
              <div className='text-2xl font-semibold mt-4'>Training and development</div>
              <div className='text-lg mt-4'>We offer training and development opportunities to help you grow.</div>
            </motion.div>
            <motion.div className='bg-white p-8 rounded-lg shadow-md'
              variants={variants}
            >
              <div className='text-4xl font-semibold'>04</div>
              <div className='text-2xl font-semibold mt-4'>Health and wellness</div>
              <div className='text-lg mt-4'>We offer health and wellness benefits to keep you healthy.</div>
            </motion.div>
          </div>
        </motion.div>

        <div className='flex gap-32 pt-24 bg-white py-24 px-80 mb-24'>
          <div className='text-3xl bg-[#F9F9F9] w-full rounded-xl p-8'>
            <span className='font-semibold'>{jobs.length} Open Positions</span>
            {/* Rows of jobs showing only job title and arrow */}
            {jobs.map(job => (
                <div className='block'>
                  <motion.div className='flex justify-between items-center p-2 border-b'
                    variants={variants}
                    onClick={addSearchParam(job.id)}
                  >
                    <div className='text-lg'>{job.title}</div>
                    <div>&rarr;</div>
                  </motion.div>
                </div>
            ))}
          </div>
        </div>
      </div>A
    </div>
  );
};

export default Page;
