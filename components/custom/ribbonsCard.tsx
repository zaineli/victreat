
import { motion } from 'framer-motion'
import { IoArrowDownOutline } from "react-icons/io5";
import React from 'react'
import { cn } from "@/lib/utils";

function Ribbon({ className, style }: { className?: string, style?: React.CSSProperties }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      fill="currentColor"
      viewBox="0 0 448 512">
      <path d="M333.2 322.8l0 0-133.9-146 0 0L146 118.6c7.8-5.1 37-22.6 78-22.6s70.2 17.4 78 22.6L245.7 180l85.6 93.4 27.4-29.8c16.3-17.7 25.3-40.9 25.3-65V149.1c0-19-5.6-37.5-16.1-53.3L327.8 35.6C312.9 13.4 287.9 0 261.2 0h-76c-25.8 0-50.1 12.5-65.1 33.5L81.9 87C70.3 103.2 64 122.8 64 142.8V164c0 23.2 8.4 45.6 23.6 63.1l56 64.2 0 0 83.3 95.6 0 0 91.8 105.3c10 11.5 26.8 14.3 40 6.8l54.5-31.1c17.8-10.2 21.6-34.3 7.7-49.4l-87.7-95.7zM205.2 410.6l-83.3-95.6L27.1 418.5c-13.9 15.1-10.1 39.2 7.7 49.4l55.1 31.5c13 7.4 29.3 4.9 39.4-6.1l75.9-82.6z" />
    </svg>
  )
}

function RibbonsCard() {
  const ribbonColors = [
    'text-red-500',
    'text-yellow-500',
    'text-green-500',
    'text-blue-500',
    'text-indigo-500',
    'text-purple-500',
    'text-pink-500',
    'text-gray-500'
  ]

  return (
    <div className='w-full h-full flex flex-col  justify-end overflow-hidden'>
      <div className=" flex  justify-center items-center relative">

        {ribbonColors.map((_, i) => (
          <motion.div
            // initial={{ scale: 0 }}
            // animate={{ scale: 1 }}
            // transition={{ delay: i * 0.1 }}
            key={i}
            className={cn("absolute bg-white p-2 box-content rounded-full inset-0 left-[50%] top-[50%] w-8 h-8", ribbonColors[i])}
            initial={{ transform: `translate(-50%, -50%) rotate(${i * 45 + 0}deg) translate(-300%, -300%) rotate(-${i * 45}deg)` }}
            animate={{
              transform: `translate(-50%, -50%) rotate(${i * 45 + 360}deg) translate(-300%, -300%) rotate(-${i * 45 + 360}deg)`,
              transition: {
                duration: 10,
                ease: 'linear',
                repeat: Infinity,
                repeatType: 'loop',
                // repeatDelay: 0.5 * i
              }
            }}

          >
            <Ribbon />
          </motion.div>
        ))}

        {ribbonColors.map((_, i) => (
          <motion.div
            // initial={{ scale: 0 }}
            // animate={{ scale: 1 }}
            // transition={{ delay: i * 0.1 }}
            key={i}
            className={cn("absolute bg-white p-2 box-content rounded-full inset-0 left-[50%] top-[50%] w-8 h-8", ribbonColors[i])}
            initial={{ transform: `translate(-50%, -50%) rotate(${i * 45 + 360}deg) translate(-180%, -180%) rotate(-${i * 45 + 360}deg)` }}
            animate={{
              transform: `translate(-50%, -50%) rotate(${i * 45 + 0}deg) translate(-180%, -180%) rotate(-${i * 45 + 0}deg)`,
              transition: {
                duration: 15,
                ease: 'linear',
                repeat: Infinity,
                repeatType: 'loop',
                // repeatDelay: 0.5 * i
              }
            }}

          >
            <Ribbon />
          </motion.div>
        ))}

        <IoArrowDownOutline className='text-8xl text-center bg-slate-200 rounded-full p-4' />
      </div>
    </div >
  )
}

export default RibbonsCard