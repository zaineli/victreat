"use client";

import React, { useEffect, useRef, useState } from "react";
import { MutationsGraph } from "./AnimatedBeam";
import useMouseHover from "@/lib/useMouseHover";
import { AnimatePresence, motion } from "framer-motion";
import { useMediaQuery } from "@/lib/useMediaQuery";
import { cn } from "@/lib/utils";

function MutationSection({ small = true }) {
    const interval = useRef<NodeJS.Timeout | null>(null);
    const ref = useRef<HTMLDivElement>(null);
    const isHovered = false;
    // const isHovered = useMouseHover(ref);
    const cancers = [
        { name: "Lung Cancer", mutations: ["EGFR", "KRAS", "ALK"] },
        { name: "Breast Cancer", mutations: ["BRCA1", "BRCA2", "HER2", "TP53"] },
        { name: "Prostate Cancer", mutations: ["BRCA2", "HOXB13", "TP53", "RB1", "PIK3CA", "RB1"] },
        { name: "Colon Cancer", mutations: ["APC", "KRAS", "TP53", "PIK3CA"] },
        { name: "Bladder Cancer", mutations: ["FGFR3", "TP53", "RB1", "PIK3CA", "RB1", "PIK3CA"] },
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
            }, 3000);
        }
        return () => {
            if (interval.current) {
                clearInterval(interval.current);
            }
        };
    }, [isHovered, large]);

    const cancer = cancers[index];
    const near = [];
    if (!small)
        near.push(cancers[(index - 1 + cancers.length) % cancers.length]);
    near.push(cancer);
    if (!small)
        near.push(cancers[(index + 1 + cancers.length) % cancers.length]);


    const center = small ? 0 : 1;

    return (
        <div
            ref={ref}
            className="flex gap-16 w-full md:h-[500px] flex-col justify-center lg:items-center lg:flex-row items-stretch rounded-2xl overflow-hidden"
        // className="flex gap-16 w-full h-[500px] flex-col justify-center lg:items-center lg:flex-row items-stretch rounded-2xl bg-neutral-200 overflow-hidden"
        >
            <AnimatePresence mode="popLayout">
                <div className=" w-full lg:self-stretch  justify-center flex flex-col relative overflow-hidden lg:origin-left origin-top">

                    {near.map((cancer, i) => (
                        (<motion.div
                            className={cn("lg:origin-left origin-top sm:visible", { "visible z-50": i === center })}
                            initial={{
                                transform: `translate(${!large ? (i - center - 1) / 2 * 55 : 0}%, ${!large ? 0 : (i - center + 1) / 2 * 55}%) scale(${Math.pow(1 - Math.abs(i - center + (large ? +1 : -1)) / 2, 0.5)})`,
                                // transform: `translate(0, ${(i - center + 1) / 2 * 55}%) scale(${Math.pow(1 - Math.abs(i - center + 1) / 2, 0.5)})`,
                                opacity: Math.pow(1 - Math.abs(i - center + 1) / 2, 1.5),
                                position: i == center ? "static" : 'absolute',
                                z: i == center ? 1 : 0,
                                inset: 0
                            }}
                            animate={{
                                transform: `translate(${!large ? (i - center) / 2 * 55 : 0}%, ${!large ? 0 : (i - center) / 2 * 55}%) scale(${Math.pow(1 - Math.abs(i - center) / 2, 0.5)})`,
                                // transform: `translate(${(i - center) / 2 * 55}%, 0%) scale(${Math.pow(1 - Math.abs(i - center) / 2, 0.5)})`,
                                // transform: `translate(0%, ${(i - center) / 2 * 55}%) scale(${Math.pow(1 - Math.abs(i - center) / 2, 0.5)})`,
                                opacity: Math.pow(1 - Math.abs(i - center) / 2, 1.5),
                                position: i == center ? "static" : 'absolute',
                                z: i == center ? 1 : 0,
                                transition: { duration: 0.5, ease: 'easeInOut', }
                            }}
                            exit={{
                                z: i == center ? 1 : 0,
                                transform: `translate(${!large ? (i - center + 1) / 2 * 55 : 0}%, ${!large ? 0 : (i - center - 1) / 2 * 55}%) scale(${Math.pow(1 - Math.abs(i - center - (large ? +1 : -1)) / 2, 0.5)})`,
                                opacity: Math.pow(1 - Math.abs(i - center - 1) / 2, 1),
                                transition: { duration: 0.5, ease: 'easeInOut', }
                            }}
                            key={cancer.name + i}
                        >
                            <MutationsGraph
                                cancer={!small ? cancer : { name: cancer.name, mutations: cancer.mutations.slice(0, 3) }}
                                showLines={i === center}
                                className="w-full h-full" />
                        </motion.div>)
                    ))}
                </div>
            </AnimatePresence>
        </div>
    );
}

export default MutationSection;
