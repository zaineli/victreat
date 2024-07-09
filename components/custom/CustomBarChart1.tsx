'use client';

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { accyearApproved } from '@/app/discover/data';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import useMouseHover from "@/lib/useMouseHover";

function map(n: number, start1: number, stop1: number, start2: number, stop2: number) {
    return (n - start1) / (stop1 - start1) * (stop2 - start2) + start2;
}

type Drug = {
    cancer_type: string;
    date: string;
    drug_name: string;
}

const CustomBarChart1 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [stopped, setStopped] = useState(false);
    const [drugs, setDrugs] = useState<Drug[]>([]);
    const ref = useRef<HTMLDivElement>();
    const isHovered = useMouseHover(ref);
    const intervelRef = useRef();

    useEffect(() => {
        fetch('/drugs.json').then(res => res.text())
            .then(JSON.parse)
            .then(setDrugs)
    }, [])

    function getDrugsByYear(year: number, max: number) {
        return drugs.filter(({ date }) => date.endsWith(year.toString())).slice(0, max);
    }


    useEffect(() => {
        console.log('clearing', stopped, isHovered);
        clearInterval(intervelRef.current);
        if (stopped || isHovered) return;
        console.log('interval');
        intervelRef.current = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % accyearApproved.length);
        }, 1000);

        return () => {console.log('clearing');clearInterval(intervelRef.current)};
    }, [stopped, isHovered]);
    // get only five bars
    const inView = accyearApproved.slice(currentIndex, currentIndex + 3);
    // if (currentIndex + 6 > accyearApproved.length) {

    inView.unshift(...accyearApproved.slice(Math.max(0, currentIndex - 2), currentIndex));
    // }

    function handleClick(i: number) {
        setCurrentIndex(j => j + i);
        setStopped(true);
    }

    if (currentIndex < 2) {
        inView.unshift(...Array.from({ length: Math.max(0, 2 - currentIndex) }, (_, i) => 0));
    }

    if (currentIndex > accyearApproved.length - 3) {
        inView.push(...Array.from({ length: Math.max(0, accyearApproved.length - currentIndex) }, (_, i) => 0));
    }

    const selected = currentIndex + 2006;

    const yearDrugs = getDrugsByYear(selected, 20);

    // console.log(inView);

    return (
        <div className=" flex gap-16 mx-auto overflow-hidden">
            <div ref={ref} className="flex  overflow-hidden relative" >
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
                <motion.div className="flex h-[400px] w-[500px]  bg-gray-400">
                    <AnimatePresence mode="popLayout">
                        {inView.map((d, index) => (
                            <motion.div
                                key={currentIndex + d.toString() + index}
                                className="flex flex-col items-center w-1/4 px-2"
                                initial={{ opacity: index == inView.length - 1 ? 0 : 1, x: "100%" }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: index == 0 ? 0 : 1, x: "-100%" }}
                                transition={{ duration: 0.5 }}
                                style={{ minWidth: '20%' }}
                                onClick={() => handleClick(index - 2)}
                            >
                                {d != 0 &&
                                    <>
                                        <span className=' flex-1 flex flex-col justify-end'>{d}</span>
                                        <motion.div
                                            key={currentIndex + d.toString() + index}
                                            className={cn(` bg-blue-600  transition-all cursor-pointer `)}
                                            style={{ height: map(d, 0, Math.max(...accyearApproved), 0, 85) + "%", width: '100%' }}
                                        ></motion.div>
                                        <span className="mt-2 text-center">{currentIndex + 2006 + index - 2}</span>
                                    </>
                                }
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
            {/* {selectedLabel && ( */}
            <div className="bg-neutral-500 rounded-t-xl ">

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1, transition: {
                            delay: 0.25,
                            duration: 0.5
                        }
                    }}
                    key={selected}
                    className="flex  w-[500px] h-[400px] flex-col p-4 gap-2 overflow-hidden scrollbar-hidden">
                    {yearDrugs.map(({ cancer_type, drug_name, date }) =>
                        <div className=' bg-neutral-300 rounded-xl p-2'>
                            <div className="flex items-center justify-between">
                                <span className='font-bold '>{drug_name}</span> <span className=' text-sm min-w-max font-light'>{date}</span>
                            </div>
                            <div>{cancer_type}</div>
                        </div>)}

                </motion.div>
            </div>
            {/* )} */}
        </div>
    );
};

export default CustomBarChart1;
