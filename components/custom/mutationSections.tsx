"use client";

import React, { useEffect, useRef, useState } from "react";
import WheelCarousel from "@/components/custom/wheelCarousel";
import { AnimatedBeamMultipleOutputDemo } from "../AnimatedBeam";
import useMouseHover from "@/lib/useMouseHover";
import { AnimatePresence, motion } from "framer-motion";
import { useMediaQuery } from "@/lib/useMediaQuery";

function MutationSection() {
    const interval = useRef<NodeJS.Timeout | null>(null);
    const ref = useRef<HTMLDivElement>(null);
    const isHovered = useMouseHover(ref);
    const cancers = [
        { name: "Lung Cancer", mutations: ["EGFR", "KRAS", "ALK", "ROS1"] },
        { name: "Breast Cancer", mutations: ["BRCA1", "BRCA2", "HER2", "TP53"] },
        { name: "Prostate Cancer", mutations: ["BRCA2", "HOXB13", "TP53", "PTEN"] },
        { name: "Colon Cancer", mutations: ["APC", "KRAS", "TP53", "PIK3CA"] },
        { name: "Bladder Cancer", mutations: ["FGFR3", "TP53", "RB1", "PIK3CA"] },
        { name: "Melanoma", mutations: ["BRAF", "NRAS", "KIT", "GNAQ"] },
        { name: "Leukemia", mutations: ["BCR-ABL1", "FLT3", "NPM1", "CEBPA"] },
        { name: "Lymphoma", mutations: ["MYC", "BCL2", "BCL6", "EZH2"] },
    ];

    const large = useMediaQuery("(min-width: 1024px)");
    const [index, setIndex] = useState(0);
    useEffect(() => {
        if (interval.current) {
            clearInterval(interval.current);
        }
        if (!isHovered) {
            interval.current = setInterval(() => {
                setIndex(
                    (prev) => (prev + (large ? +1 : -1) + cancers.length * 2) % cancers.length
                );
            }, 1000);
        }
        return () => {
            if (interval.current) {
                clearInterval(interval.current);
            }
        };
    }, [isHovered, large]);

    const cancer = cancers[index];
    const near = [];
    near.push(cancers[(index - 1 + cancers.length) % cancers.length]);
    near.push(cancer);
    near.push(cancers[(index + 1 + cancers.length) % cancers.length]);


    return (
        <div
            ref={ref}
            className="flex gap-16 p-16 flex-col lg:flex-row items-stretch rounded-2xl bg-neutral-500 overflow-hidden"
        >
            <WheelCarousel
                cancers={near}
                className=" lg:w-1/3 w-full"
            />
            <div className=" lg:w-2/3 w-full lg:self-stretch flex flex-col relative overflow-hidden">
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={cancer.name}
                        initial={{
                            transform: `translate(${large ? "0" : "-100"}%, ${!large ? "0" : "100"}%)`,
                        }}
                        animate={{
                            transform: "translate(0%, 0%)",
                            transition: { duration: 0.5, ease: 'easeInOut', }
                        }}
                        exit={{
                            transform: `translate(${large ? "0" : "100"}%, ${!large ? "0" : "-100"}%)`,
                        }}
                        className=""
                    >
                        <div className="">

                            <AnimatedBeamMultipleOutputDemo className="" cancer={cancer} />
                            <AnimatedBeamMultipleOutputDemo className="absolute inset-0 z-10 translate-x-[-10%] scale-[0.8] translate-y-[-20%] opacity-70" cancer={cancer} />
                            <AnimatedBeamMultipleOutputDemo className="absolute inset-0 z-10 translate-x-[-10%] scale-[0.8] translate-y-[20%] opacity-70 " cancer={cancer} />
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}

export default MutationSection;
