"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import useMouseHover from "@/lib/useMouseHover";
import { useMediaQuery } from "@/lib/useMediaQuery";

type WheelCarouselProps = {
  className?: string;
  selectedCancer: string;
  setSelectedCancer: (cancer: string) => void;
};

function WheelCarousel({
  className,
  selectedCancer,
  setSelectedCancer,
}: WheelCarouselProps) {
  const data = [
    "Lung Cancer",
    "Breast Cancer",
    "Prostate Cancer",
    "Colon Cancer",
    "Bladder Cancer",
    "Melanoma",
    "Leukemia",
    "Lymphoma",
  ];

  const large = useMediaQuery("(min-width: 1024px)");
  const [index, setIndex] = useState(0);
  const interval = useRef<NodeJS.Timeout | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isHovered = useMouseHover(ref);

  useEffect(() => {
    if (interval.current) {
      clearInterval(interval.current);
    }
    if (!isHovered) {
      interval.current = setInterval(() => {
        setIndex(
          (prev) => (prev + (large ? +1 : -1) + data.length * 2) % data.length
        );
      }, 1000);
    }
    return () => {
      if (interval.current) {
        clearInterval(interval.current);
      }
    };
  }, [isHovered, large]);

  useEffect(() => {
    setSelectedCancer(data[index]);
  }, [index, data, setSelectedCancer]);

  const show = 5;
  const remaining = index + show - data.length;
  let slice = data.slice(index, index + show);
  if (remaining > 0) {
    slice = slice.concat(data.slice(0, remaining));
  }

  return (
    <div ref={ref} className={cn("flex lg:flex-col justify-center", className)}>
      {slice.map((item, i) => (
        <motion.div
          className="lg:origin-left origin-top text-center text-3xl flex-1 flex items-center justify-center lg:text-[3.24vw] font-bold pl-2 w-max min-w-max"
          initial={{
            transform: `translate(${large ? "0" : "-100"}%, ${
              !large ? "0" : "100"
            }%) scale(${
              1 - Math.abs(i - 2 + (large ? 1 : -1)) / 2
            })`,
            opacity: 1 - Math.abs(i - 2 + (large ? 1 : -1)) / 2,
          }}
          animate={{
            transform: "translate(0%, 0%)",
            opacity: 1 - Math.abs(i - 2) / 2,
            transition: { duration: 0.5, ease: "easeInOut" },
          }}
          key={i + item}
        >
          {item}
        </motion.div>
      ))}
    </div>
  );
}

export default WheelCarousel;
