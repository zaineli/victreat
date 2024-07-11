'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Timeline from '@/components/custom/Timeline';
import { AnimatedBeamMultipleOutputDemo } from '@/components/AnimatedBeam'; // Import AnimatedBeamMultipleOutputDemo
import LineChart from '@/components/custom/line-chart';
import MutationSection from '@/components/custom/mutationSections';
import RibbonsCard from '@/components/custom/ribbonsCard';
import Trials from '@/components/custom/trials';
import CallToAction from '@/components/custom/callToAction';
import ScrollButton from '@/components/custom/scroll-button';
import Footer from '@/components/custom/footer';
import CustomBarChart1 from '@/components/custom/CustomBarChart1';
import CardsBanner from '@/components/custom/cardsBanner';

const animationVariants = {
  hidden: { y: "100%" },
  visible: { y: 0 },
};

const textVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const cardVariants = {
  hidden: (direction: string) => ({
    opacity: 0,
    y: direction === 'center' ? '100%' : '50%',
    x: direction === 'center' ? 0 : direction === 'left' ? '-50%' : '50%',
    rotate: direction === 'center' ? 0 : direction === 'left' ? -10 : 10,
  }),
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    rotate: 0,
  },
};

const dataArray = [
  { year: 1990, cancer: 33 },
  { year: 1991, cancer: 47 },
  { year: 1992, cancer: 55 },
  { year: 1993, cancer: 110 },
  { year: 1994, cancer: 123 },
  { year: 1995, cancer: 201 },
  { year: 1996, cancer: 316 },
  { year: 1997, cancer: 416 },
  { year: 1998, cancer: 635 },
  { year: 1999, cancer: 806 },
  { year: 2000, cancer: 1006 },
  { year: 2001, cancer: 1047 },
  { year: 2002, cancer: 1298 },
  { year: 2003, cancer: 1608 },
  { year: 2004, cancer: 2025 },
  { year: 2005, cancer: 2372 },
  { year: 2006, cancer: 2808 },
  { year: 2007, cancer: 3090 },
  { year: 2008, cancer: 3318 },
  { year: 2009, cancer: 3536 },
  { year: 2010, cancer: 3606 },
  { year: 2011, cancer: 3772 },
  { year: 2012, cancer: 3876 },
  { year: 2013, cancer: 3917 },
  { year: 2014, cancer: 4417 },
  { year: 2015, cancer: 4876 },
  { year: 2016, cancer: 5328 },
  { year: 2017, cancer: 5630 },
  { year: 2018, cancer: 5983 },
  { year: 2019, cancer: 6214 },
  { year: 2020, cancer: 6439 },
  { year: 2021, cancer: 7427 },
  { year: 2022, cancer: 7117 },
  { year: 2023, cancer: 7155 },
  // { year: 2024, cancer: 4958 }
];

const charts = [
  { type: "AnimatedBeam", dataPoints: ["Data 1", "Data 2", "Data 3"] },
  { type: "AnimatedBeam", dataPoints: ["Data 32", "Data 2", "Data 3"] },
  { type: "AnimatedBeam", dataPoints: ["Data 3242", "Data 2", "Data 3"] },
];

function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % charts.length);
    }, 5000); // Change chart every 5 seconds (5000 milliseconds)

    return () => clearInterval(interval);
  }, []);


  // return (
  //   <div className='mt-48 w-96 h-96 bg-red-200 rounded-[15%] overflow-hidden m-2'>
  //     <RibbonsCard />
  //   </div>
  // );

  // const renderChart = () => {
  //   const { type, dataPoints } = charts[activeIndex];
  //   switch (type) {
  //     case "AnimatedBeam":
  //       return <AnimatedBeamMultipleOutputDemo dataPoints={dataPoints} />;
  //     default:
  //       return null;
  //   }
  // };

  return (
    <div className="">

      <section className='relative min-h-screen flex flex-col items-center'>
        <ScrollButton />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={animationVariants}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute top-0 left-0 h-full w-72 w-[15%] min-w-[150px] bg-gradient-to-b from-[#DAE5EB] to-white rounded-tr-[100%] -z-30"
        ></motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={animationVariants}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute top-0 right-0 h-full w-72 w-[15%] min-w-[150px] bg-gradient-to-b from-[#DAE5EB] to-white rounded-tl-[100%] -z-30 scale-x-[100%]"
        ></motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ delay: 1, duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center mt-48 p-2"
        >
          <div className='w-4/5 lg:text-6xl md:text-3xl text-3xl text-center font-semibold '>
          With an increasingly complex treatment landscape, how can you ensure that you're getting the right drug for YOU? 
          </div>
          <p className='lg:text-lg text-sm sm:text-base w-4/5 text-center lg:w-2/5 mt-4'>
             
          </p>
          <Timeline />
        </motion.div>
        <div className="flex justify-center mt-8 w-[90%]">
          <motion.div
            initial="hidden"
            animate="visible"
            custom="left"
            variants={cardVariants}
            transition={{ delay: 2.5, duration: 1, ease: "easeOut" }}
            className="w-[20%] hidden lg:block bg-[#DBE5EB] aspect-square self-start rounded-[15%] p-4 m-2"
          >
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            custom="center"
            variants={cardVariants}
            transition={{ delay: 2, duration: 1, ease: "easeOut" }}
            className="bg-gray-300 rounded-[15%] scale-125"
          >
            {/* {renderChart()} */}
            {/* <MutationSection /> */}
            {/* <RibbonsCard /> */}
            <img src='/images/test.png' alt='Medical Research' className='w-full h-full object-contain' />
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            custom="right"
            variants={cardVariants}
            transition={{ delay: 2, duration: 1, ease: "easeOut" }}
            className="w-[20%] bg-[#DBE5EB] hidden lg:flex  aspect-square rounded-[15%] p-4 m-2  flex-col items-start justify-start h-min relative overflow-hidden"
          >
            <div className='absolute top-10 left-10'>
              <div className='text-4xl font-semibold'>Trials</div>
              <div className='text-xl'>+99% increase</div>
            </div>
            <div className='-rotate-180 translate-x-8 translate-y-20 overflow-x-hidden'>
              <svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="
              M10,150
              C30,140, 50,150, 70,140
              S110,130, 130,140
              S170,170, 190,160
              S230,120, 250,130
              S290,90, 310,100
              S350,80, 400,90
            "
                  style={{ fill: 'none', stroke: 'white', strokeWidth: 2 }}
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </section>

      <section>
        <CardsBanner />
      </section>
      <section>
        <CustomBarChart1 />
      </section>

        <section className='w-full mt-12 lg:p-32  p-4 sm:p-16 flex flex-col items-center justify-center '>
          <div className='lg:text-6xl md:text-3xl text-3xl font-semibold text-center'>
            Meanwhile, exponential growth in trials will only add to the complexity in onology treatment landscape.
            {/* Exponential growth in oncology trials */}
          </div>
          <p className='lg:text-lg text-sm sm:text-base  w-4/5 mb-16'>
          </p>
          <Trials className={'flex justify-center w-[80%] mx-auto'} />
        </section>
      


      <section id={'mutations'} className='w-full  mt-64 lg:p-32  p-4 sm:p-16 '>
        <div className='lg:text-6xl md:text-4xl text-3xl text-center font-bold'>
          Victreat aspires to be your partner at navigating  cancer stages, mutations and myriad of clinical trial options 
        </div>
        <div className="lg:max-w-[75%] w-full mx-auto">

        <MutationSection small={false} />
        </div>
      </section>

      <section className='w-full max-w-full'>
        <CallToAction />
      </section>

      <section className='w-full bg-black text-white'>
        <Footer />
      </section>
    </div>
  );
}

export default Home;
