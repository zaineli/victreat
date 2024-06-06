import Link from 'next/link'
import React from 'react'

function Nav() {
    return (
        <div className='flex justify-between items-center p-4  bg-black text-xl text-white'>
            <Link href='/' className='text-2xl '>Victreat</Link>
            <div className='flex space-x-4'>
                <Link href='/' className=''>Home</Link>
                <Link href='/about' className=''>About</Link>
                <Link href='/discover' className=''>Discover</Link>
                <Link href='/careers' className=''>Careers</Link>
            </div>
            <div>
                <Link href='/api' className=''>Logout</Link>
            </div>
        </div>
    )
}

export default Nav