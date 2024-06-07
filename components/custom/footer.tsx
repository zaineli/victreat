import Link from 'next/link'
import React from 'react'

function Footer() {
    return (
        <section className=' bg-neutral-900 text-white w-full flex p-16 gap-16 pr-32'>
            <div className="flex-1 mr-auto">
                <h1 className='font-bold text-8xl'>Victreat</h1>
                <p className='text-2xl p-8'>Get Teated with victreat</p>
                {/* <img src="/vic.png" alt="" className='flex-1'/> */}
            </div>
            <div className="">
                <h2 className='font-bold text-xl'>Links</h2>
                <div className="flex flex-col mt-8 text-[#ffffff80] gap-1">
                    <Link href="/contact">Contact</Link>
                    <Link href="/about">About</Link>
                    <Link href="/news">Discover</Link>
                    <Link href="/news">Careers</Link>
                    <Link href="/news">Vision</Link>
                </div>
            </div>
            <div className="">
                <h2 className='font-bold text-xl'>Links</h2>
                <div className="flex flex-col mt-8 text-[#ffffff80] gap-1">
                    <Link href="/contact">Instagram</Link>
                    <Link href="/about">Twitter</Link>
                    <Link href="/news">LinkedIn</Link>
                    <Link href="/news">Mail</Link>
                </div>
            </div>
        </section>
    )
}

export default Footer