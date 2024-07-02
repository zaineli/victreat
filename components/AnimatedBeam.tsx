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
        "z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function AnimatedBeamMultipleOutputDemo({
  className,
  cancer,
  nextCancer,
  prevCancer,
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
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mainCircleRef = useRef<HTMLDivElement>(null);
  const refs = useRef(cancer.mutations.map(() => React.createRef<HTMLDivElement>()));

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div
        className={cn(
          "relative flex w-full items-center justify-center overflow-hidden rounded-lg border  p-10 md:shadow-xl",
          className
        )}
        ref={containerRef}
      >
        <div className="flex h-full w-full flex-row items-stretch justify-between gap-10">
          <div className="flex flex-col justify-center">
            {/* <Circle ref={mainCircleRef}>
              {cancer.name}
            </Circle> */}
            <div ref={mainCircleRef} className="z-10 flex h-12 w-max items-center justify-center rounded-full border-2 p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]" >
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
          <div className="flex flex-col justify-center gap-2">
            {cancer.mutations.map((item, index) => (
              <Circle className={cn(index % 2 == 0 ? 'translate-x-[-100%]' : "")} ref={refs.current[index]} key={index}>
                {item}
              </Circle>
            ))}
          </div>
        </div>

        {cancer.mutations.map((_, index) => (
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
