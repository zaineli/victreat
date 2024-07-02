'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Timeline from '@/components/custom/Timeline';
import { AnimatedBeamMultipleOutputDemo } from '@/components/AnimatedBeam'; // Import AnimatedBeamMultipleOutputDemo
import LineChart from '@/components/custom/line-chart';

const animationVariants = {
  hidden: { y: "100%" },
  visible: { y: 0 },
};

const textVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const cardVariants = {
  hidden: (direction) => ({
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
  { type: "AnimatedBeam", dataPoints: ["Data 3242" , "Data 2", "Data 3"] },
];

function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % charts.length);
    }, 5000); // Change chart every 5 seconds (5000 milliseconds)

    return () => clearInterval(interval);
  }, []);

  const renderChart = () => {
    const { type, dataPoints } = charts[activeIndex];
    switch (type) {
      case "AnimatedBeam":
        return <AnimatedBeamMultipleOutputDemo dataPoints={dataPoints} />;
      default:
        return null;
    }
  };

  return (
    <div className="relative h-screen overflow-hidden flex flex-col items-center ">

      <motion.div
        initial="hidden"
        animate="visible"
        variants={animationVariants}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute top-0 left-0 h-full w-72 bg-gradient-to-b from-[#DAE5EB] to-white rounded-tr-[100%] z-30"
      ></motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={animationVariants}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute top-0 right-0 h-full w-72 bg-gradient-to-b from-[#DAE5EB] to-white rounded-tl-[100%] z-30 scale-x-[100%]"
      ></motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={textVariants}
        transition={{ delay: 1, duration: 1, ease: "easeOut" }}
        className="flex flex-col items-center mt-48"
      >
        <div className='text-6xl text-center font-bold'>
          FDA Accelerates Approval of <br />Oncology Medicines
        </div>
        <p className='text-lg text-center w-2/5 mt-4'>
          With an increasingly complex treatment landscape, how will health systems ensure that the right patient is getting the right medicine?
        </p>
        <Timeline />
      </motion.div>

      <div className="flex justify-center mt-8 w-[90%] z-50">
        <motion.div
          initial="hidden"
          animate="visible"
          custom="left"
          variants={cardVariants}
          transition={{ delay: 2.5, duration: 1, ease: "easeOut" }}
          className="w-1/4 bg-gray-200 rounded-[15%] p-4 m-2"
        >
          <img src="https://continentalhospitals.com/images/specialities/37d80f08e6ff7f95c8b9f41b1b0bc452.webp" alt="" />
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          custom="center"
          variants={cardVariants}
          transition={{ delay: 2, duration: 1, ease: "easeOut" }}
          className="w-1/3 bg-gray-200 rounded-[15%] p-4 m-2"
        >
          {/* {renderChart()} */}
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          custom="right"
          variants={cardVariants}
          transition={{ delay: 2, duration: 1, ease: "easeOut" }}
          className="w-1/3 bg-white rounded-[15%] p-4 m-2 flex flex-col items-start justify-start"
          style={{ 
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
            border: '1px solid #e0e0e0',
            padding: '20px',
            borderRadius: '10px',
            background: '#f9f9f9'
          }}
        >

          <div className="flex flex-col items-center justify-center w-full">
            <div className="text-sm text-gray-500">Your earnings</div>
            <div className="text-4xl font-bold text-gray-800">$30.00</div>
            <div className="text-sm text-gray-500">Next payout in:</div>
            <div className="text-xl font-bold text-gray-800">10,550 pts</div>
          </div>
          <div className='absolute top-0 translate-x-12'>
            <LineChart
              width={400}
              height={200}
              data={dataArray}
              className="absolute bottom-0 right-0"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
