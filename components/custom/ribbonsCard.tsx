
import { AnimatePresence, motion } from 'framer-motion'
import { IoArrowDownOutline } from "react-icons/io5";
import React, { useEffect } from 'react';
import { NodeJS } from 'node';
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
  const intervalRef = React.useRef<NodeJS.Timeout>();
  const [index, setIndex] = React.useState(0);

  const ribbonColors = [
    'text-red-500',
    'text-yellow-500',
    'text-green-500',
    'text-blue-500',
    'text-indigo-500',
    'text-purple-500',
    'text-pink-500',
    'text-gray-500',
    'text-emerald-500',
    'text-cyan-500',
    'text-fuchsia-500',
    'text-rose-500',
    // 'text-purple-500',
    // 'text-pink-500',
    // 'text-gray-500'
  ]
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 4) % ribbonColors.length);
    }, 2000)
    return () => {
      clearInterval(intervalRef.current)
    }
  });



  const smallRibbonA = ribbonColors[index % ribbonColors.length];
  const smallRibbonB = ribbonColors[(index + 2) % ribbonColors.length];

  const largeRibbonA = ribbonColors[(index + 1) % ribbonColors.length];
  const largeRibbonB = ribbonColors[(index + 3) % ribbonColors.length];

  return (
    <div className='w-full h-full flex flex-col  justify-end  relative overflow-hidden'>
      <div className=" flex flex-col  justify-center items-center ">
        {/* <div className="flex gap-12 mb-11">
          <Ribbon className={cn("w-6 h-6 bg-white box-content rounded-full p-2", ribbonColors[0])} />
          <Ribbon className={cn("w-6 h-6 bg-white box-content rounded-full p-2", ribbonColors[0])} />
        </div> */}


        <div className="  left-0 right-0 h-full absolute  justify-center items-center flex -bottom-[70%] ">
          <AnimatePresence mode='sync'>
            <motion.div
              initial={{ transform: 'rotate(-165deg) translateY(-600%) rotate(165deg)' }}
              animate={{
                transform: 'rotate(15deg) translateY(-600%) rotate(-15deg)',
                transition: {
                  duration: 1
                }
              }}
              exit={{
                transform: 'rotate(195deg) translateY(-600%) rotate(-195deg)',
                transition: {
                  duration: 1
                }
              }}
              className={cn("absolute", smallRibbonA)}
              key={smallRibbonA}
            >
              <Ribbon className='p-2 w-6 h-6 bg-white box-content rounded-full ' />
            </motion.div>
            <motion.div
              initial={{ transform: 'rotate(-195deg) translateY(-600%) rotate(195deg)' }}
              animate={{
                transform: 'rotate(-15deg) translateY(-600%) rotate(15deg)',
                transition: {
                  duration: 1
                }
              }}
              exit={{
                transform: 'rotate(165deg) translateY(-600%) rotate(-165deg)',
                transition: {
                  duration: 1
                }
              }}
              className={cn("absolute", smallRibbonB)}
              key={smallRibbonB}
            >
              <Ribbon className='p-2 w-6 h-6 bg-white box-content rounded-full ' />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className='rounded-full border-2 border-gray-100 border-opacity-30 bg-gray-200 backdrop-filter backdrop-blur-sm bg-opacity-10 z-[7] absolute left-0 right-0 h-full -bottom-[70%]' />
        <div className='rounded-full border-2 border-gray-100 border-opacity-30 bg-gray-200 backdrop-filter backdrop-blur-sm bg-opacity-10 z-0 absolute left-0 right-0 h-full scale-[1.20] -bottom-[70%]' />

        <div className="  left-0 right-0 h-full absolute justify-center items-center flex -bottom-[70%] ">
          <AnimatePresence mode='popLayout'>

            <motion.div
              initial={{ transform: 'rotate(-90deg) translateY(-320%) rotate(45deg)' }}
              animate={{
                transform: 'rotate(45deg) translateY(-320%) rotate(-45deg)',
                transition: {
                  duration: 1
                }
              }}
              exit={{
                transform: 'rotate(180deg) translateY(-320%) rotate(-180deg)',
                transition: {
                  duration: 1
                }
              }}
              className={cn("absolute", largeRibbonA)}
              key={largeRibbonA}
            >
              <Ribbon className='p-2 w-12 h-12 bg-white box-content rounded-full' />
            </motion.div>
            <motion.div
              initial={{ transform: 'rotate(-180deg) translateY(-320%) rotate(90deg)' }}
              animate={{
                transform: 'rotate(-45deg) translateY(-320%) rotate(45deg)',
                transition: {
                  duration: 1
                }
              }}
              exit={{
                transform: 'rotate(90deg) translateY(-320%) rotate(-90deg)',
                transition: {
                  duration: 1
                }
              }}
              className={cn("absolute", largeRibbonB)}
              key={largeRibbonB}
            >
              <Ribbon className='p-2 w-12 h-12 bg-white box-content rounded-full' />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* <div className="flex gap-[12rem] h-6 z-[5]"
          style={{
            transformOrigin: '50% calc(50%+12rem)',
          }}
        >
          <Ribbon className={cn("w-12 h-12 bg-white box-content rounded-full p-2", ribbonColors[0])} />
          <Ribbon className={cn("w-12 h-12 bg-white box-content rounded-full p-2", ribbonColors[0])} />
        </div> */}

        <IoArrowDownOutline className='text-8xl z-10 text-center bg-slate-200 rounded-full p-4' />
      </div>
    </div >
  )
}

export default RibbonsCard