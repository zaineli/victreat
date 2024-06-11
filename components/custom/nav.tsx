import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import ButtonWrapper from './ButtonWrapper'



function Nav() {
    return (
        <nav id="nav" className="bg-white  w-[65%] min-w-max mx-auto rounded-full mt-4 max-w-5xl px-4 py-2 flex gap-8 items-center justify-between ">
        {/* <nav className="bg-white fixed top-2 w-[65%] min-w-max left-[50%] z-[100] translate-x-[-50%] rounded-full mx-auto mt-4 max-w-5xl px-4 py-2 flex gap-8 items-center justify-between"> */}
        <div className="flex items-center">
          <span className="text-xl font-bold">Victreat</span>
        </div>
        <div className="flex items-center space-x-6">
          <Link href="/">
            <div className="text-gray-700 hover:text-black">Home</div>
          </Link>
          <Link href="/vision">
            <div className="text-gray-700 hover:text-black">Vision</div>
          </Link>
          <Link href="/discover">
            <div className="text-gray-700 hover:text-black">Discover</div>
          </Link>
          <Link href="/news">
            <div className="text-gray-700 hover:text-black">News</div>
          </Link>
          <Link href="/careers">
            <div className="text-gray-700 hover:text-black">Careers</div>
          </Link>
          <Link href="/about">
            <div className="text-gray-700 hover:text-black">About</div>
          </Link>
        </div>
        <div>
        <ButtonWrapper text="Sign Up" />
        </div>
      </nav>
    )
}

export default Nav