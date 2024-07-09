// components/AnimatedSVG.js
'use client';


import Image from 'next/image'
import { motion } from 'framer-motion';

const pathVariants = {
  hidden: {                                                         
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
      // repeat: Infinity,
      // repeatType: "reverse",
    },
  },
};

const AnimatedSVG = () => {
  return (
    // <motion.svg
    //   id="Layer_1"
    //   data-name="Layer 1"
    //   xmlns="http://www.w3.org/2000/svg"
    //   xmlnsXlink="http://www.w3.org/1999/xlink"
    //   viewBox="0 0 216 216"
    //   width="200"
    //   height="200"
    // >
    //   <motion.g>
    //     <motion.path
    //       fill="none"
    //       stroke="#2e3135"
    //       strokeWidth="2"
    //       d="M112.73,78.96c.41-.44.29-1.02-.24-1.29-.32-.16-.7-.09-.97.18-.52.53-1.04,1.06-1.55,1.59-.43.44-.86.89-1.3,1.33-.27.27-.4.57-.38.96.03,1,.03,2.01.05,3.01.02.99.03,1.98.05,2.97,0,.5.17,3.82.56,3.93.28.08.72-.03.78-.38.04-.22.09-3.5.1-3.73.03-.53.03-1.05.04-1.58.02-1.31.04-2.61.06-3.92,0-.09.02-.2.07-.26.35-.37.71-.73,1.06-1.09.56-.57,1.12-1.14,1.67-1.72Z"
    //       variants={pathVariants}
    //       initial="hidden"
    //       animate="visible"
    //     />
    //     <motion.path
    //       fill="none"
    //       stroke="#2e3135"
    //       strokeWidth="2"
    //       d="M107.49,80.94c-.64-.66-1.29-1.31-1.94-1.95-.35-.35-.7-.69-1.05-1.04-.09-.09-.2-.18-.3-.26-.38-.16-.83.06-1.01.28-.24.31-.26.69.04.99.31.33.63.66.94.98.61.62,1.22,1.23,1.82,1.85.05.05.08.14.08.21.02.85.03,1.7.06,2.55.04,1.19.1,5.43.15,6.62,0,.06.01.13.04.17.19.27.46.41.76.33.3-.08.51-3.41.51-3.74.03-1.64.06-3.28.08-4.92,0-.57,0-1.14-.01-1.71,0-.13-.08-.27-.18-.37Z"
    //       variants={pathVariants}
    //       initial="hidden"
    //       animate="visible"
    //     />
    //     <motion.path
    //       fill="none"
    //       stroke="#2e3135"
    //       strokeWidth="2"
    //       d="M104.39,80.97c-.44-.46-.87-.93-1.31-1.39-.08-.08-.17-.14-.26-.21-.33-.19-.86-.03-1.09.33-.18.29-.19.69.17,1.03.21.2.41.4.62.59.3.28.61.57.91.85.3.28.63.53.95.79.32.27.84.08,1-.29.16-.36,0-.65-.23-.91-.24-.27-.5-.52-.74-.78Z"
    //       variants={pathVariants}
    //       initial="hidden"
    //       animate="visible"
    //     />
    //     <motion.path
    //       fill="none"
    //       stroke="#2e3135"
    //       strokeWidth="2"
    //       d="M114.22,79.58c-.31-.4-.73-.44-1.1-.2-.22.14-.39.35-.57.54-.45.46-.89.93-1.33,1.41-.18.19-.36.4-.56.63,0,.15-.03.33,0,.5.05.24.24.4.42.52.2.13.47.1.66-.06.3-.24.6-.5.88-.76.51-.49,1.01-.99,1.52-1.49.31-.31.33-.74.07-1.07Z"
    //       variants={pathVariants}
    //       initial="hidden"
    //       animate="visible"
    //     />
    //   </motion.g>
    //   <motion.g>
    //     <motion.path
    //       fill="none"
    //       stroke="#2e3135"
    //       strokeWidth="2"
    //       d="M112.73,113.79c.41.44.29,1.02-.24,1.29-.32.16-.7.09-.97-.18-.52-.53-1.04-1.06-1.55-1.59-.43-.44-.86-.89-1.3-1.33-.27-.27-.4-.57-.38-.96.03-1,.03-2.01.05-3.01.02-.99.03-1.98.05-2.97,0-.5.17-3.82.56-3.93.28-.08.72.03.78.38.04.22.09,3.5.1,3.73.03.53.03,1.05.04,1.58.02,1.31.04,2.61.06,3.92,0,.09.02.2.07.26.35.37.71.73,1.06,1.09.56.57,1.12,1.14,1.67,1.72Z"
    //       variants={pathVariants}
    //       initial="hidden"
    //       animate="visible"
    //     />
    //     <motion.path
    //       fill="none"
    //       stroke="#2e3135"
    //       strokeWidth="2"
    //       d="M107.49,111.81c-.64.66-1.29,1.31-1.94,1.95-.35.35-.7.69-1.05,1.04-.09.09-.2.18-.3.26-.38.16-.83-.06-1.01-.28-.24-.31-.26-.69.04-.99.31-.33.63-.66.94-.98.61-.62,1.22-1.23,1.82-1.85.05-.05.08-.14.08-.21.02-.85.03-1.7.06-2.55.04-1.19.1-5.43.15-6.62,0-.06.01-.13.04-.17.19-.27.46-.41.76-.33.3.08.51,3.41.51,3.74.03,1.64.06,3.28.08,4.92,0,.57,0,1.14-.01,1.71,0,.13-.08.27-.18.37Z"
    //       variants={pathVariants}
    //       initial="hidden"
    //       animate="visible"
    //     />
    //     <motion.path
    //       fill="none"
    //       stroke="#2e3135"
    //       strokeWidth="2"
    //       d="M104.39,111.78c-.44.46-.87.93-1.31,1.39-.08.08-.17.14-.26.21-.33.19-.86.03-1.09-.33-.18-.29-.19-.69.17-1.03.21-.2.41-.4.62-.59.3-.28.61-.57.91-.85.3-.28.63-.53.95-.79.32-.27.84-.08,1-.29.16-.36,0-.65-.23-.91-.24-.27-.5-.52-.74-.78Z"
    //       variants={pathVariants}
    //       initial="hidden"
    //       animate="visible"
    //     />
    //     <motion.path
    //       fill="none"
    //       stroke="#2e3135"
    //       strokeWidth="2"
    //       d="M114.22,113.17c-.31.4-.73.44-1.1.2-.22-.14-.39-.35-.57-.54-.45-.46-.89-.93-1.33-1.41-.18-.19-.36-.4-.56-.63,0-.15-.03-.33,0-.5.05-.24.24-.4.42-.52.2-.13.47-.1.66.06.3.24.6.5.88.76.51.49,1.01.99,1.52,1.49.31.31.33.74.07,1.07Z"
    //       variants={pathVariants}
    //       initial="hidden"
    //       animate="visible"
    //     />
    //   </motion.g>
    // </motion.svg>

    

<div className="flex justify-center items-center h-screen overflow-hidden">
  <div className="w-1/3 bg-slate-500 flex justify-center items-center">
    <div className="w-full">
      <img
        src="/images/logo.svg"
        // className="transform scale-150"
        alt="My SVG"
        className='w-full h-full scale-200'
        style={{scale: 4.0}}
      />
    </div>
  </div>
</div>



  );
};

export default AnimatedSVG;
