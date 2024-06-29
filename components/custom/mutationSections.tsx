'use client';

import React, { useEffect, useRef, useState } from 'react'
import WheelCarousel from './wheelCarousel'
import { AnimatedBeamMultipleOutputDemo } from '../AnimatedBeam'
import useMouseHover from '@/lib/useMouseHover';
import { AnimatePresence, motion } from 'framer-motion';
import { a } from 'react-spring';



function MutationSection() {
    const interval = useRef<NodeJS.Timeout | null>(null);
    const ref = useRef<HTMLDivElement>(null);
    const isHovered = useMouseHover(ref);

    const array = [
        <AnimatedBeamMultipleOutputDemo />,
        <AnimatedBeamMultipleOutputDemo />,
        <AnimatedBeamMultipleOutputDemo />,
        <AnimatedBeamMultipleOutputDemo />,
        <AnimatedBeamMultipleOutputDemo />,
        <AnimatedBeamMultipleOutputDemo />,
        <AnimatedBeamMultipleOutputDemo />,
    ]

    const [index, setIndex] = useState(0);
    useEffect(() => {
        if (interval.current) {
            clearInterval(interval.current)
        }
        if (!isHovered) {
            interval.current = setInterval(() => {
                setIndex((prev) => (prev + 1) % array.length)
            }, 1000)
        }
        return () => {
            if (interval.current) {
                clearInterval(interval.current)
            }
        }
    }, [])

    const next = (index + 1) % array.length;

    console.log({ next, index })

    return (
        <div ref={ref} className='flex gap-16 p-16 rounded-2xl bg-neutral-500 overflow-hidden  text-white'>
            <WheelCarousel className=' w-1/3' />
            <div className=" w-2/3 flex flex-col relative overflow-hidden">
                <AnimatePresence mode='popLayout'>
                    <motion.div
                        key={index}
                        initial={{
                            transform: 'translateY(100%)'
                        }}
                        animate={{
                            transform: 'translateY(0%)',
                        }}
                        exit={{
                            transform: 'translateY(-100%)',
                        }}
                        className=" ">
                        {array[index]}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    )
}

export default MutationSection