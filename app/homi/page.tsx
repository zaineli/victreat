'use client'
import AnimatedLogo from '@/components/custom/AnimatedLogo'
// import DockDemo from '@/components/custom/dock-demo'
import React from 'react'
import ProgressTracker from '@/components/custom/ProgressTracker'; // Import the ProgressTracker component

type Props = {}

const sections = ['1', '2', '3'];

const Page = (props: Props) => {
    return (
        <div>
            <ProgressTracker sections={sections} />
            <section id='1' className=''>
                <div className='bg-[#FFEDED] min-h-screen relative flex justify-start md:items-center items-start font-sans'>
                    <div className='pl-4 md:pl-20 z-[999] w-full md:w-1/3 pt-32 text-center md:pt-0'>
                        <h1 className='text-7xl md:text-9xl'>
                            Victreat
                        </h1>
                        <p className='text-base md:text-xl pl-2 md:pl-4 mt-4'>With an increasingly complex treatment landscape, how can you ensure that you're getting the right drug for YOU?</p>
                    </div>
                    <div className='absolute w-full md:h-full md:w-1/2 top-0 left-0 bg-[#fee0dde0] h-0 z-50'>
                    </div>
                    <AnimatedLogo className='absolute left-1/2 transform -translate-x-1/2 top-1/2 transform -translate-y-1/2 md:mt-0 mt-32' />
                    <button className='absolute bottom-8 md:bottom-16 rounded-full bg-[#FFEDED] border-none left-1/2 transform -translate-x-1/2 z-50 px-4 md:px-5 py-2 gradient-glow'>
                        Treatment Navigator
                    </button>
                </div>
            </section>
            <section id='2'>
                <div className='bg-[#fee0dde0] min-h-screen flex justify-center items-center font-sans'>
                    <div className='w-11/12 md:w-1/2 text-center md:text-left'>
                        <h1 className='text-5xl md:text-9xl'>
                            Victreat
                        </h1>
                        <p className='text-base md:text-xl pl-2 md:pl-4 mt-4'>With an increasingly complex treatment landscape, how can you ensure that you're getting the right drug for YOU?</p>
                    </div>
                </div>
            </section>
            <section id='3'>
                <div className='bg-[#FFEDED] min-h-screen flex justify-center items-center font-sans'>
                    <div className='w-11/12 md:w-1/2 text-center md:text-left'>
                        <h1 className='text-5xl md:text-9xl'>
                            Victreat
                        </h1>
                        <p className='text-base md:text-xl pl-2 md:pl-4 mt-4'>With an increasingly complex treatment landscape, how can you ensure that you're getting the right drug for YOU?</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Page;
