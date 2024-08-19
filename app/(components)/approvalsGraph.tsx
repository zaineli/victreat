'use client';

import { FaChevronLeft, FaChevronRight, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import useMouseHover from "@/lib/useMouseHover";
import { Button } from "@/components/ui/button";
import { map } from "@/lib/utils";

const yearApproved = [22, 14, 12, 11, 16, 19, 23, 19, 19, 33, 22, 31, 33, 49, 108, 58, 41, 45, 31]; // start 2006 end 2024
export const accyearApproved = yearApproved.map((d, i) => yearApproved.slice(0, i + 1).reduce((a, b) => a + b, 0));



type Drug = {
    cancer_type: string;
    date: string;
    drug_name: string;
}

const Approvals = () => {
    const [currentIndex, setCurrentIndex] = useState(4);
    const [stopped, setStopped] = useState(false);
    const [drugs, setDrugs] = useState<Drug[]>([]);
    const ref = useRef<HTMLDivElement>(null);
    const isHovered = true;
    // const isHovered = useMouseHover(ref);
    const intervelRef = useRef<NodeJS.Timeout>();
    const scrollXRef = useRef<HTMLDivElement>(null);
    const scrollYRef = useRef<HTMLDivElement>(null);
    // const scrollRef = useRef<HTMLDivElement>(null);
    const [showScrollBottom, setShowScrollBottom] = useState(true);
    const [scrollTop, setScrollTop] = useState(0);
    const stoppedTimeout = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        fetch('/drugs.json').then(res => res.text())
            .then(JSON.parse)
            .then(setDrugs)
    }, [])

    useEffect(() => {
        console.log('clearing', stopped, isHovered);
        clearInterval(intervelRef.current);
        if (stopped || isHovered) return;
        console.log('interval');
        intervelRef.current = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 2) % (accyearApproved.length + 2) - 1);
            console.log('interval', currentIndex);
        }, 2000);

        return () => clearInterval(intervelRef.current);
    }, [stopped, isHovered]);


    function scrollDown() {
        if (!scrollYRef.current) return;
        const height = scrollYRef.current.getBoundingClientRect().height;
        scrollYRef.current?.scrollBy({ top: height, behavior: 'smooth' })
        setShowScrollBottom(true);
        setScrollTop(scrollYRef.current.scrollTop + height);
        console.log(scrollYRef.current.scrollTop, height)
    }

    function scrollUp() {
        if (!scrollYRef.current) return;
        const height = scrollYRef.current.getBoundingClientRect().height;
        scrollYRef.current?.scrollBy({ top: -height, behavior: 'smooth' },)
        setShowScrollBottom(true);
        setScrollTop(scrollYRef.current.scrollTop - height);
        console.log(scrollYRef.current.scrollTop, height)
    }

    function scrollLeft() {
        if (!scrollXRef.current) return;

        const width = scrollXRef.current.getBoundingClientRect().width;
        console.log("moving!", scrollXRef.current, width)
        scrollXRef.current?.scrollBy({ left: -width + 72, behavior: 'smooth' })
                // scrollRef.current?.scrollBy({ left: -width + 24, behavior: 'smooth' })
    }

    function scrollRight() {
        console.log(scrollXRef.current)

        if (!scrollXRef.current) return;

        const width = scrollXRef.current.getBoundingClientRect().width;
        console.log("moving!", scrollXRef.current, width)
        scrollXRef.current?.scrollBy({ left: width - 72, behavior: 'smooth' },)
                // scrollRef.current?.scrollBy({ left: width - 24, behavior: 'smooth' },)
    }


    function getDrugsByYear(year: number, max: number) {
        return drugs.filter(({ date }) => date.endsWith(year.toString())).slice(0, max);
    }



    function stop(ms: number) {
        clearTimeout(stoppedTimeout.current || undefined);
        setStopped(true);
        stoppedTimeout.current = setTimeout(() => setStopped(false), ms);
    }

    function handleClick(fn: (i: number) => number) {
        // console.log(i % (accyearApproved.length + 2) - 1);
        setCurrentIndex(fn);
        stop(3000);
        // setCurrentIndex(i => {
        //     i == 0 || i == accyearApproved.length ? 0 : i
        // })
    }


    const selected = currentIndex + 2006;

    const heights = [0, 0, ...accyearApproved, 0, 0]

    const yearDrugs = getDrugsByYear(selected, 20);


    return (
        <div className=" lg:my-48 my-20 lg:px-32 md:px-16 px-4">
            <h1 className="lg:text-4xl md:text-2xl text-md text-center mx-auto mb-8 lg:mb-20 lg:leading-normal md:leading-normal leading-normal  ">
                <span className="font-bold text-green-500 lg:text-6xl md:text-5xl text-2xl">Cancer medications approved by the&nbsp;FDA</span> are continually increasing every year.
            </h1>
            <div ref={ref} className="flex flex-col  items-stretch lg:flex-row gap-16 justify-between">
                <div className="flex lg:flex-[3_3_0]   overflow-hidden  relative" >
                    <span
                        onClick={() => { handleClick(i => (i + accyearApproved.length + 2) % (accyearApproved.length + 2) - 1) }}
                        className='absolute bg-[#eef5ee] cursor-pointer text-[#aade8d] p-2 text-lg flex justify-center items-center z-50 box-content rounded-full top-[50%] left-4 translate-y-[-50%]]'>
                        <FaChevronLeft />
                    </span>
                    <span
                        onClick={() => { handleClick(i => (i + 2) % (accyearApproved.length + 2) - 1) }}
                        className='absolute bg-[#eef5ee] cursor-pointer text-[#aade8d] p-2 text-lg flex justify-center items-center z-50 box-content rounded-full top-[50%] right-4 translate-y-[-50%]]'>
                        <FaChevronRight />
                    </span>
                    <div className={cn("flex w-full lg:w-[unset] h-[400px] relative transition-all ease-in-out duration-1000    pb-5  rounded-2xl", {
                        // 'opacity-0': currentIndex == 0,
                        
                    })}
                    
                        style={{
                            translate: `${(currentIndex+2) * -100}px 0`,
                            left: `50%`
                        }}
                    >
                        {heights.map((d, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center px-2"
                                // className="flex flex-col items-center w-1/4 px-2"
                                // initial={{ opacity: index == inView.length - 1 ? 0 : 1, x: "100%" }}
                                // animate={{ opacity: 1, x: 0 }}
                                // exit={{ opacity: index == 0 ? 0 : 1, x: "-100%" }}
                                style={{
                                    minWidth: '100px',
                                    transition: 'all 1s ease-in-out',
                                    // transition: currentIndex == 0 ? 'opacity 1s ease-in-out' : 'all 1s ease-in-out',
                                    // transform: `translateX(${-currentIndex * 100}%) `,
                                    transform: `translateX(-50%) `,
                                    opacity: currentIndex == accyearApproved.length || currentIndex == -1 ? 0 : 1
                                }}
                                onClick={() => { handleClick(_ => (index - 1) % (accyearApproved.length + 2) - 1); }}
                            >
                                {d != 0 &&
                                    <>
                                        <span className=' flex-1 flex flex-col justify-end'>{d}</span>
                                        <div
                                            key={currentIndex + d.toString() + index}
                                            className={cn(` bg-[#DEF5D2]  transition-all cursor-pointer  rounded-t-2xl `, {
                                                'bg-[#aade8d]': selected == index + 2004
                                            })}
                                            style={{ height: map(d, 0, Math.max(...accyearApproved), 0, 85) + "%", width: '100%' }}
                                        ></div>
                                        <span className="mt-2 text-center">{index + 2004}</span>
                                    </>
                                }
                            </div>
                        ))}
                    </div>
                </div>
                <div className="lg:flex-[2_2_0]  rounded-xl overflow-hidden relative ">
                    <div
                        // initial={{ opacity: 0 }}
                        // animate={{
                        //     opacity: 1, transition: {
                        //         delay: 0.25,
                        //         duration: 0.5
                        //     }
                        // }}
                        key={selected}
                        ref={scrollXRef}
                        onScroll={() => stop(5000) }
                        className="flex  z-10 md:h-[400px] px-10 md:px-0 flex-col md:mx-0 gap-2 overflow-x-auto ">
                        <div
                            ref={scrollYRef}
                            className="flex  md:flex-col gap-2 md:overflow-x-hidden">
                            {yearDrugs.map(({ cancer_type, drug_name, date, id }) =>
                                <motion.div
                                key = {cancer_type}
                                initial={{ x: 25, opacity: 0 }}
                                animate={{ x: 0, opacity: 100, transition: { duration: 1, ease: 'easeInOut' } }}
                            
                            className=' border-2 rounded-2xl py-2 px-4 mb-1 w-full min-w-full h-full'>
                                    <div className='font-bold truncate overflow-ellipsis capitalize'>{drug_name}</div> <div className='  overflow-ellipsis  text-xs min-w-max font-light'>{date}</div>
                                    <div className=" truncate overflow-ellipsis capitalize">{cancer_type}</div>
                                </motion.div>)
                            }
                        </div>
                    </div>
                    <div
                        className={cn(" z-40 hidden md:flex justify-center items-start absolute inset-x-0 left-0 w-full h-1/4 top-0    ",
                            {
                                'opacity-0': scrollTop < 1,
                                'opacity-100': scrollTop >= 1
                            }
                        )}>
                        <button
                            onClick={scrollUp}
                            className=" absolute bg-[#eef5ee] p-2 mt-4 text-[#aade8d] rounded-full z-40">
                            <FaChevronUp />
                        </button>
                    </div>
                    <div
                        className={cn(" z-40 hidden md:flex justify-center items-end absolute inset-x-0 left-0 w-full h-1/4 bottom-0 ",
                            {
                                'opacity-0': !showScrollBottom,
                                'opacity-100': showScrollBottom
                            }
                        )}>
                        <button
                            onClick={scrollDown}
                            className=" absolute mb-4 bg-[#eef5ee] p-2 text-[#aade8d] rounded-full z-40">
                            <FaChevronDown />
                        </button>
                    </div>
                    <button
                        onClick={scrollRight}
                        className="   md:hidden bg-[#eef5ee] p-2 text-[#aade8d] absolute mb-4 right-1 top-[50%] translate-y-[-50%] rounded-full  aspect-square  z-40">
                        <FaChevronRight />
                    </button>
                    <button
                        onClick={scrollLeft}
                        className="   md:hidden bg-[#eef5ee] p-2 text-[#aade8d] absolute mb-4 left-1 top-[50%] translate-y-[-50%] rounded-full  aspect-square  z-40">
                        <FaChevronLeft />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Approvals;
