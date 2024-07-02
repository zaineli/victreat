'use client';
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import useMouseHover from '@/lib/useMouseHover';
import { AnimatedBeamMultipleOutputDemo } from '../AnimatedBeam';
import { useMediaQuery } from '@/lib/useMediaQuery';
import { index } from 'd3';

type WheelCarouselProps = {
    cancers: { name: string, mutations: string[] }[]
    className?: string
}

function WheelCarousel({ cancers, className }: WheelCarouselProps) {
    const large = useMediaQuery('(min-width: 1024px)');
    const center = Math.floor((cancers.length - 1) / 2);
    return (
        <div className={cn(' flex lg:flex-col justify-center', className)}>
            {cancers.map((cancer, i) => (
                <motion.div
                    className={cn('lg:h-min lg:origin-left origin-top  text-center w-full min-w-full sm:min-w-[33%]  text-3xl flex-1  flex  items-center justify-center lg:text-[3.24vw] font-bold lg:w-max lg:min-w-max lg:pl-2',
                        // i == 0 ? 'flex' : '',
                    )}
                    initial={{
                        transform: `translate(${large ? "0" : "-100%"}, ${!large ? "0" : "100%"}) scale(${Math.pow(1 - Math.abs(i - center + (large ? 1 : -1)) / (cancers.length - 1), 1)})`,
                        opacity: Math.pow(1 - Math.abs(i - center + (large ? 1 : -1)) / (cancers.length - 1), 1)
                    }}
                    animate={{
                        transform: `translate(0%, 0%) scale(${Math.pow(1 - Math.abs(i - center) / (cancers.length - 1),1)})`,
                        opacity: Math.pow(1 - Math.abs(i - center) / (cancers.length - 1),1),
                        transition: { duration: 0.5, ease: 'easeInOut', }
                    }}
                    key={cancer.name + i}
                >
                    {cancer.name}
                </motion.div>
            ))}

        </div>
    )
}


export default WheelCarousel