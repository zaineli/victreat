"use client";

import React, { useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";

const Circle = React.forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex  aspect-square w-max min-w-max box-border  items-center justify-center rounded-full  bg-[#d5eee6] border-2 border-[#8be0f5] text-[#22c1d6] p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function MutationsGraph({
  className,
  cancer,
  nextCancer,
  prevCancer,
  showLines = true,
}: {
  className?: string;
  cancer: {
    name: string;
    mutations: string[];
  };
  nextCancer?: {
    name: string;
    mutations: string[];
  };
  prevCancer?: {
    name: string;
    mutations: string[];
  };
  showLines?: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mainCircleRef = useRef<HTMLDivElement>(null);
  const refs = useRef(cancer.mutations.map(() => React.createRef<HTMLDivElement>()));

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div
        className={cn(
          "relative flex  w-full items-center justify-center overflow-hidden rounded-lg   p-2 ",
          className
        )}
        ref={containerRef}
      >
        <div className="flex lg:flex-row flex-col h-full w-full items-stretch justify-between lg:gap-10 gap-32">
        {/* <div className="flex lg:flex-row lg:h-[400px] flex-col h-full w-full items-stretch justify-between lg:gap-10 gap-32"> */}
          <div className="flex lg:flex-col justify-center">
            {/* <Circle ref={mainCircleRef}>
              {cancer.name}
            </Circle> */}
            <div ref={mainCircleRef} className="bg-[#d5eee6] text-[#22c1d6] border-[#8be0f5] border-2 text-2xl px-4 z-10 flex h-12 w-max items-center justify-center rounded-full  p-3 " >
              {cancer.name}
            </div>
          </div>
          {/* <div className="flex flex-col justify-center gap-2 absolute opacity-25 inset-0">
            {cancer.mutations.map((item, index) => (
              <Circle className={cn(index % 2 == 0 ? 'translate-x-[-100%]' : "")} ref={refs.current[index]} key={index}>
                {item}
              </Circle>
            ))}
          </div>
          <div className="flex flex-col justify-center gap-2  absolute opacity-25 inset-0">
            {cancer.mutations.map((item, index) => (
              <Circle className={cn(index % 2 == 0 ? 'translate-x-[-100%]' : "")} ref={refs.current[index]} key={index}>
                {item}
              </Circle>
            ))}
          </div> */}
          <div className="flex lg:flex-col justify-center gap-2">
            {cancer.mutations.map((item, index) => (
              <Circle className={cn(index % 2 == 0 ? 'lg:translate-x-[-100%] translate-y-[-100%] lg:translate-y-0' : "")} ref={refs.current[index]} key={index}>
                {item}
              </Circle>
            ))}
          </div>
        </div>

        {showLines && cancer.mutations.map((_, index) => (
          <AnimatedBeam
            key={index}
            containerRef={containerRef}
            fromRef={mainCircleRef}
            toRef={refs.current[index]}
            duration={3}
          />
        ))}
      </div>
    </div>
  );
}
