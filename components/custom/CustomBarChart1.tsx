'use client';

import { FaChevronLeft, FaChevronRight, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { accyearApproved } from '@/app/discover/data';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import useMouseHover from "@/lib/useMouseHover";
import { Button } from "../ui/button";

function map(n: number, start1: number, stop1: number, start2: number, stop2: number) {
    return (n - start1) / (stop1 - start1) * (stop2 - start2) + start2;
}

type Drug = {
    cancer_type: string;
    date: string;
    drug_name: string;
}

const CustomBarChart1 = () => {
    const [currentIndex, setCurrentIndex] = useState(4);
    const [stopped, setStopped] = useState(false);
    const [drugs, setDrugs] = useState<Drug[]>([]);
    const ref = useRef<HTMLDivElement>();
    const isHovered = useMouseHover(ref);
    const intervelRef = useRef<NodeJS.Timeout>();
    const scrollRef = useRef<HTMLDivElement>();
    const [showScrollBottom, setShowScrollBottom] = useState(true);
    const [scrollTop, setScrollTop] = useState(0);

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
            // setCurrentIndex(prevIndex => (prevIndex + 1) % (accyearApproved.length + 1));
        }, 1000);

        return () => { console.log('clearing'); clearInterval(intervelRef.current) };
    }, [stopped, isHovered]);


    function scrollDown() {
        if (!scrollRef.current) return;
        const height = scrollRef.current.getBoundingClientRect().height;
        scrollRef.current?.scrollBy({ top: height, behavior: 'smooth' })
        setShowScrollBottom(true);
        setScrollTop(scrollRef.current.scrollTop + height);
    }

    function scrollUp() {
        if (!scrollRef.current) return;
        const height = scrollRef.current.getBoundingClientRect().height;
        scrollRef.current?.scrollBy({ top: -height, behavior: 'smooth' },)
        setShowScrollBottom(true);
        setScrollTop(scrollRef.current.scrollTop - height);
    }

    function scrollLeft() {
        if (!scrollRef.current) return;

        const width = scrollRef.current.getBoundingClientRect().width;
        console.log("moving!", scrollRef.current, width)
        scrollRef.current?.scrollBy({ left: -width + 24, behavior: 'smooth' })
    }

    function scrollRight() {
        if (!scrollRef.current) return;

        const width = scrollRef.current.getBoundingClientRect().width;
        console.log("moving!", scrollRef.current, width)
        scrollRef.current?.scrollBy({ left: width - 24, behavior: 'smooth' },)
    }


    function getDrugsByYear(year: number, max: number) {
        return drugs.filter(({ date }) => date.endsWith(year.toString())).slice(0, max);
    }



    function handleClick(i: number) {
        setCurrentIndex(j => j + i);
        // setStopped(true);
    }


    const selected = currentIndex + 2006;

    const heights = [0, 0, ...accyearApproved, 0, 0]

    const yearDrugs = getDrugsByYear(selected, 20);

    console.log(scrollTop);


    return (
        <div className="  my-96 bg-[#DBE5EB] py-16 lg:px-32 md:px-16 px-4">
            <h1 className=" lg:text-5xl md:text-3xl text-2xl font-bold text-center mx-auto mb-8 max-w-4xl">Accelerating Approval of new Drugs from 2006 to 2024 </h1>
            <div ref={ref} className="flex flex-col  items-stretch lg:flex-row gap-16 justify-between">
                <div className="flex lg:flex-[3_3_0]   overflow-hidden  relative" >
                    <span
                        onClick={() => setCurrentIndex(i => i - 1)}
                        className='absolute cursor-pointer text-white bg-black bg-opacity-50 p-2 text-lg flex justify-center items-center z-50 box-content rounded-full top-[50%] left-4 translate-y-[-50%]]'>
                        <FaChevronLeft />
                    </span>
                    <span
                        onClick={() => setCurrentIndex(i => i + 1)}
                        className='absolute cursor-pointer text-white bg-black bg-opacity-50 p-2 text-lg flex justify-center items-center z-50 box-content rounded-full top-[50%] right-4 translate-y-[-50%]]'>
                        <FaChevronRight />
                    </span>
                    <div className={cn("flex overflow-hidden w-full lg:w-[unset] h-[400px]  bg-white", {
                        // 'opacity-0': currentIndex == 0,
                    })}>
                        {heights.map((d, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center px-2"
                                // className="flex flex-col items-center w-1/4 px-2"
                                // initial={{ opacity: index == inView.length - 1 ? 0 : 1, x: "100%" }}
                                // animate={{ opacity: 1, x: 0 }}
                                // exit={{ opacity: index == 0 ? 0 : 1, x: "-100%" }}
                                style={{
                                    minWidth: '20%',
                                    transition: currentIndex == 0 ? 'opacity 1s ease-in-out' : 'all 1s ease-in-out',
                                    transform: `translateX(${-currentIndex * 100}%) `,
                                    opacity: currentIndex == accyearApproved.length ? 0 : 1
                                }}
                                onClick={() => handleClick(index - 2)}
                            >
                                {d != 0 &&
                                    <>
                                        <span className=' flex-1 flex flex-col justify-end'>{d}</span>
                                        <div
                                            key={currentIndex + d.toString() + index}
                                            className={cn(` bg-[#A5AFB5]  transition-all cursor-pointer  rounded-t-xl `, {
                                                'bg-[#747b80]': selected == index + 2004
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
                <div className="bg-[#747b80]  lg:flex-[2_2_0] text-white rounded-t-xl overflow-hidden relative ">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1, transition: {
                                delay: 0.25,
                                duration: 0.5
                            }
                        }}
                        key={selected}
                        ref={scrollRef}
                        className="flex  z-10 md:h-[400px] flex-col p-4 gap-2 overflow-hidden  ">
                        <div
                            className="flex  md:flex-col gap-2">
                            {yearDrugs.map(({ cancer_type, drug_name, date }) =>
                                <div className=' bg-[#A5AFB5] w-full min-w-full h-full  rounded-xl p-2 '>
                                    <div className='font-bold truncate'>{drug_name}</div> <div className='  overflow-ellipsis  text-xs min-w-max font-light'>{date}</div>
                                    <div className=" truncate overflow-ellipsis">{cancer_type}</div>
                                </div>)
                            }
                        </div>
                    </motion.div>
                    <div
                        className={cn(" z-40 hidden md:flex justify-center items-start absolute inset-x-0 left-0 w-full h-1/4 top-0 bg-gradient-to-b from-[#ffffff80] dark:from-background",
                            {
                                'opacity-0': scrollTop < 1,
                                'opacity-100': scrollTop >= 1
                            }
                        )}>
                        <Button
                            onClick={scrollUp}
                            className=" absolute mb-4 rounded-full z-40">
                            <FaChevronUp />
                        </Button>
                    </div>
                    <div
                        className={cn(" z-40 hidden md:flex justify-center items-end absolute inset-x-0 left-0 w-full h-1/4 bottom-0 bg-gradient-to-t from-[#ffffff80] dark:from-background",
                            {
                                'opacity-0': !showScrollBottom,
                                'opacity-100': showScrollBottom
                            }
                        )}>
                        <Button
                            onClick={scrollDown}
                            className=" absolute mb-4 rounded-full z-40">
                            <FaChevronDown />
                        </Button>
                    </div>
                    <button
                        onClick={scrollRight}
                        className=" bg-black bg-opacity-40 p-4 md:hidden text-white absolute mb-4 right-1 top-[50%] translate-y-[-50%] rounded-full  aspect-square  z-40">
                        <FaChevronRight />
                    </button>
                    <button
                        onClick={scrollLeft}
                        className=" bg-black bg-opacity-40 p-4 md:hidden text-white absolute mb-4 left-1 top-[50%] translate-y-[-50%] rounded-full  aspect-square  z-40">
                        <FaChevronLeft />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CustomBarChart1;
