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
        "z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
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
  dataPoints,
}: {
  className?: string;
  dataPoints: string[];
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mainCircleRef = useRef<HTMLDivElement>(null);
  const refs = useRef(dataPoints.map(() => React.createRef<HTMLDivElement>()));

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div
        className={cn(
          "relative flex w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-10 md:shadow-xl",
          className
        )}
        ref={containerRef}
      >
        <div className="flex h-full w-full flex-row items-stretch justify-between gap-10">
          <div className="flex flex-col justify-center">
            <Circle ref={mainCircleRef}>Main</Circle>
          </div>
          <div className="flex flex-col justify-center gap-2">
            {dataPoints.map((item, index) => (
              <Circle ref={refs.current[index]} key={index}>
                {item}
              </Circle>
            ))}
          </div>
        </div>

        {dataPoints.map((_, index) => (
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
