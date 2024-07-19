'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { IoMdGlobe } from "react-icons/io";
import { BsClockFill } from "react-icons/bs";
import { GiUmbrella } from "react-icons/gi";
import { GiPawHeart } from "react-icons/gi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    hidden: { opacity: 0, y: '-100%' },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: '-100%', transition: { duration: 0.5 } }
  };

  // return <div></div>;

  return (
    <nav className={cn('absolute top-0 py-4 px-8 flex justify-between text-black  lg:mx-auto right-0 z-[1500]', {"h-screen": isOpen})}>
      {/* <div className='text-xl font-semibold mr-24'>Victreat</div> */}
      <div className='hidden md:flex gap-8'>
        <Link href='/'><div className='text-lg'>Home</div></Link>
        <Link href='/careers'><div className='text-lg'>Careers</div></Link>
        <Link href='/about'><div className='text-lg'>About</div></Link>
      </div>
      <div className='md:hidden'>
        <AiOutlineMenu className='text-2xl' onClick={toggleMenu} />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className='fixed top-0 left-0 right-0 bottom-0 bg-white z-[1500] flex flex-col p-4' 
            variants={menuVariants} 
            initial='hidden' 
            animate='visible' 
            exit='exit'
          >
            <div className='flex justify-between items-center'>
              <div className='text-xl font-semibold'>Victreat</div>
              <AiOutlineClose className='text-2xl' onClick={toggleMenu} />
            </div>
            <div className='flex flex-col justify-center flex-1 gap-4 items-center bg-white text-gray-700 text-3xl font-semibold'>
              <Link href='/'><div className='text-4xl hover:text-5xl transition-all ease-in hover:text-green-500' onClick={toggleMenu}>Home</div></Link>
              <Link href='/careers'><div className='text-4xl hover:text-5xl transition-all ease-in hover:text-green-500' onClick={toggleMenu}>Careers</div></Link>
              <Link href='/about'><div className='text-4xl hover:text-5xl transition-all ease-in hover:text-green-500' onClick={toggleMenu}>About</div></Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
