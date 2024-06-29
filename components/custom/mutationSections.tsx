'use client';

import React, { useEffect, useRef, useState } from 'react'
import WheelCarousel from './wheelCarousel'
import { AnimatedBeamMultipleOutputDemo } from '../AnimatedBeam'
import useMouseHover from '@/lib/useMouseHover';
import { motion } from 'framer-motion';



function MutationSection() {
    const interval = useRef<NodeJS.Timeout | null>(null);
    const ref = useRef<HTMLDivElement>(null);
    const isHovered = useMouseHover(ref);
    const [index, setIndex] = useState(0);
    const max = 3;

    useEffect(() => {
        if (interval.current) {
            clearInterval(interval.current)
        }
        if (!isHovered) {
            interval.current = setInterval(() => {
                setIndex((prev) => (prev + 1) % max)
            }, 1000)
        }
        return () => {
            if (interval.current) {
                clearInterval(interval.current)
            }
        }
    }, [])

    return (
        <div ref={ref} className='flex gap-16 p-16 rounded-2xl bg-neutral-500  text-white'>
            <WheelCarousel className=' w-1/3' />
            <div className=" w-2/3 flex flex-col overflow-hidden">
                <AnimatedBeamMultipleOutputDemo />
            </div>
        </div>
    )
}

export default MutationSection