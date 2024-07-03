import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';
import ButtonWrapper from './ButtonWrapper';
import Example from './DrawOutlineButton';

function Nav() {
  return (
    <nav id="nav" className="bg-white fixed top-0 left-1/2 transform -translate-x-1/2 w-1/2 z-50 px-2 border-b-2 flex gap-8 items-center justify-between text-[#23333E]">
      <div className='text-2xl'>Victreat</div>
      <div className="flex items-center space-x-6">
        <Link href="/">
          <div className="text-gray-700 hover:text-black">Home</div>
        </Link>
        <Link href="/vision">
          <div className="text-gray-700 hover:text-black">Vision</div>
        </Link>
        <Link href="/careers">
          <div className="text-gray-700 hover:text-black">Careers</div>
        </Link>
        <Link href="/about">
          <div className="text-gray-700 hover:text-black">About</div>
        </Link>
      </div>
      <div>
        <Example />
      </div>
    </nav>
  );
}

export default Nav;
