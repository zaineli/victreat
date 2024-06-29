'use client';

import { motion } from 'framer-motion';
import React from 'react'

type Props = {
  cancer: string,
  mutation: string[],
  // radius: number,
}

const variant = {
  hidden: { transform: 'scale(0)' },
  visible: { transform: 'scale(1)' }
}

function mutationGraphic({ cancer, mutation }: Props) {

  return (
    <motion.div
      initial={{
        y: 130,
        x: 130,
      }}
      animate={{
        y: 140,
        x: 130,
        transition: { duration: 1, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse', repeatDelay: 0.5}
      }}
      className='relative bg-red w-min translate-x-[130px] translate-y-[130px]'>
      <div className='bg-red-500 rounded-full aspect-square w- w-min p-2 z-10 flex items-center text-white'>{cancer}</div>
      {
        mutation.map((m, i) => (
          <>
            <motion.div
              key={i}
              variants={variant}
              initial={{
                transform: `rotate(${i * 360 / mutation.length}deg) translate(0px, 0) rotate(-${i * 360 / mutation.length}deg)`
              }}
              animate={{
                transform: `rotate(${i * 360 / mutation.length}deg) translate(130px, 0) rotate(-${i * 360 / mutation.length}deg)`,
                transition: { duration: 0.5, ease: 'easeInOut', }
              }}
              className='bg-red-700  origin-center rounded-full  -z-10 aspect-square w-min p-2 flex justify-center items-center  text-white absolute inset-0 mutation-bubble'
            >{m}</motion.div>
            <motion.span
              initial={{
                width: '0px'
              }}
              animate={{
                width: '130px',
                transition: { duration: 0.5, ease: 'easeInOut', }
              }}

              className='h-[2px]  origin-left w-[130px] bg-red-600 absolute left-[50%] top-[50%] -z-20'
              style={{
                transform: `rotate(${i * 360 / mutation.length}deg)`
              }}
            ></motion.span>
          </>

        ))
      }
    </motion.div>
  )
}

export default mutationGraphic