'use client';
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import useMouseHover from '@/lib/useMouseHover';

type WheelCarouselProps = {
    className?: string
}

function WheelCarousel({ className }: WheelCarouselProps) {
    const data = [
        "Lungs Cancer",
        "Breast Cancer",
        "Prostate Cancer",
        "Colon Cancer",
        "Bladder Cancer",
        "Melanoma",
        "Leukemia",
        "Lymphoma",
    ]

    const [index, setIndex] = useState(0);
    const interval = useRef<NodeJS.Timeout | null>(null);
    const ref = useRef<HTMLDivElement>(null);
    const isHovered = useMouseHover(ref);

    useEffect(() => {
        if (interval.current) {
            clearInterval(interval.current)
        }
        if (!isHovered) {
            interval.current = setInterval(() => {
                setIndex((prev) => (prev + 1) % data.length)
            }, 1000)
        }
        return () => {
            if (interval.current) {
                clearInterval(interval.current)
            }
        }
    }, [isHovered])


    const show = 7;
    const remaining = (index + show) - data.length;
    let slice = data.slice(index, index + show)
    if (remaining > 0) {
        slice = slice.concat(data.slice(0, remaining))
    }
    console.log(slice);
    // const slice = data.slice(index, index + 5).concat(data.slice(0, index))

    return (
        <div ref={ref} className={cn('flex flex-col', className)}>
            {slice.map((item, i) => (
                <motion.div
                    className=' origin-left text-2xl font-bold pl-2'
                    initial={{
                        transform: `translateY(100%) scale(${1 - Math.abs(i - 1) / 2})`,
                        opacity: 1 - Math.abs(i - 1) / 2
                    }}
                    animate={{
                        transform: `translateY(0%) scale(${1 - Math.abs(i - 2) / 2})`,
                        opacity: 1 - Math.abs(i - 2) / 2,

                        transition: { duration: 0.5, ease: 'easeInOut', }
                    }}
                    key={item + i}
                >
                    {item}
                </motion.div>
            ))}

        </div>
    )
}

function getTransform(index: number, show: number) {
    return `translateY(100%)`
}

export default WheelCarousel