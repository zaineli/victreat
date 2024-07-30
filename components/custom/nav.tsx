'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { cn } from '@/lib/utils';
import AnimatedLogo from './AnimatedLogo';
import { useScrollLock } from '@/lib/useScrollLock';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { lock, unlock } = useScrollLock({
    autoLock: false,
    lockTarget: ':root',
  })


  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      lock();
    } else {
      unlock();
    }
  };

  const menuVariants = {
    hidden: { opacity: 0, y: '-100%' },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: '-100%', transition: { duration: 0.5 } }
  };

  return (
    <nav className={cn(' antipasto absolute top-0 py-4 px-8 flex justify-between text-black  lg:mx-auto right-0 z-[1500]', { "h-screen": isOpen })}>
      {/* <div className='text-xl font-semibold mr-24'>Victreat</div> */}
      <div className='hidden md:flex gap-8 px-24'>
        <Link href='/'><div className='text-lg after:absolute after:bg-gray-500 after:bottom-0 after:left-0 relative w-min hover:after:scale-x-100 after:w-full  after:h-[2px] after:scale-x-0 after:origin-right duration-1000 hover:after:origin-left after:transition-transform'>Home</div></Link>
        <Link href='/careers'><div className='text-lg after:absolute after:bg-gray-500 after:bottom-0 after:left-0 relative w-min hover:after:scale-x-100 after:w-full  after:h-[2px] after:scale-x-0 after:origin-right duration-1000 hover:after:origin-left after:transition-transform'>Careers</div></Link>
        <Link href='/about'><div className='text-lg after:absolute after:bg-gray-500 after:bottom-0 after:left-0 relative w-min hover:after:scale-x-100 after:w-full  after:h-[2px] after:scale-x-0 after:origin-right duration-1000 hover:after:origin-left after:transition-transform'>About</div></Link>
      </div>
      <div className='md:hidden cursor-pointer'>
        <AiOutlineMenu className='text-2xl' onClick={toggleMenu} />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className='fixed overflow-hidden top-0 left-0 right-0 bottom-0 bg-[#eee] z-[1500] flex flex-col py-4 px-8'
            variants={menuVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
          >
            {/* <AnimatedLogo className="absolute left-1/2 transform -translate-x-1/2 -bottom-1/2 -translate-y-[75%]  w-[400px] aspect-square h-auto mt-0 opacity-10 z-10" />
            <AnimatedLogo className="absolute left-1/2 transform -translate-x-1/2 origin-center -top-1/2 translate-y-[75%] w-[400px] aspect-square h-auto mt-0 opacity-10 z-10" /> */}
            <AnimatedLogo animate={false} className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 box-border w-[90%] opacity-5 aspect-square h-auto mt-0" />
            <div className='flex justify-end items-center z-20'>
              {/* <div className='text-xl font-semibold '>Victreat</div> */}
              <AiOutlineClose className='text-2xl cursor-pointer' onClick={toggleMenu} />
            </div>
            <div className='flex flex-col justify-center flex-1 gap-4 items-center  text-gray-700 drop-shadow-xl text-6xl font-semibold z-20'>
              <Link href='/'>
                <div className=' transition-all ease-in hover:text-green-500' onClick={toggleMenu}>Home</div>
              </Link>
              <Link href='/careers'>
                <div className=' transition-all ease-in hover:text-green-500' onClick={toggleMenu}>Careers</div>
              </Link>
              <Link href='/about'>
                <div className=' transition-all ease-in hover:text-green-500' onClick={toggleMenu}>About</div>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
