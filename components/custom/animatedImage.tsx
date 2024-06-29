"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { RefObject, useEffect, useId, useState } from "react";

export interface AnimatedBeamProps {
  className?: string;
  containerRef: RefObject<HTMLElement>;
  fromRef: RefObject<HTMLElement>;
  toRef: RefObject<HTMLElement>;
  curvature?: number;
  reverse?: boolean;
  pathColor?: string;
  pathWidth?: number;
  pathOpacity?: number;
  gradientStartColor?: string;
  gradientStopColor?: string;
  delay?: number;
  duration?: number;
  startXOffset?: number;
  startYOffset?: number;
  endXOffset?: number;
  endYOffset?: number;
}

export const AnimatedBeam: React.FC<AnimatedBeamProps> = ({
  className,
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false,
  duration = Math.random() * 3 + 4,
  delay = 0,
  pathColor = "gray",
  pathWidth = 2,
  pathOpacity = 0.2,
  gradientStartColor = "#ffaa40",
  gradientStopColor = "#9c40ff",
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
}) => {
  const id = useId();
  const [pathD, setPathD] = useState("");
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });

  const gradientCoordinates = reverse
    ? {
        x1: ["90%", "-10%"],
        x2: ["100%", "0%"],
        y1: ["0%", "0%"],
        y2: ["0%", "0%"],
      }
    : {
        x1: ["10%", "110%"],
        x2: ["0%", "100%"],
        y1: ["0%", "0%"],
        y2: ["0%", "0%"],
      };

  useEffect(() => {
    const updatePath = () => {
      if (containerRef.current && fromRef.current && toRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const rectA = fromRef.current.getBoundingClientRect();
        const rectB = toRef.current.getBoundingClientRect();

        const svgWidth = containerRect.width;
        const svgHeight = containerRect.height;
        setSvgDimensions({ width: svgWidth, height: svgHeight });

        const startX =
          rectA.left - containerRect.left + rectA.width / 2 + startXOffset;
        const startY =
          rectA.top - containerRect.top + rectA.height / 2 + startYOffset;
        const endX =
          rectB.left - containerRect.left + rectB.width / 2 + endXOffset;
        const endY =
          rectB.top - containerRect.top + rectB.height / 2 + endYOffset;

        const controlY = startY - curvature;
        const d = `M ${startX},${startY} Q ${
          (startX + endX) / 2
        },${controlY} ${endX},${endY}`;
        setPathD(d);
      }
    };

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        updatePath();
      }
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    updatePath();

    return () => {
      resizeObserver.disconnect();
    };
  }, [
    containerRef,
    fromRef,
    toRef,
    curvature,
    startXOffset,
    startYOffset,
    endXOffset,
    endYOffset,
  ]);

  const createHexagonNodes = (x: number, y: number, size: number) => {
    const angle = Math.PI / 3;
    let nodes = [];
    for (let i = 0; i < 6; i++) {
      const xPoint = x + size * Math.cos(angle * i);
      const yPoint = y + size * Math.sin(angle * i);
      nodes.push(<circle key={i} cx={xPoint} cy={yPoint} r={size / 3} fill={gradientStartColor} />);
      nodes.push(
        <line
          key={`line-${i}`}
          x1={x}
          y1={y}
          x2={xPoint}
          y2={yPoint}
          stroke={pathColor}
          strokeWidth={pathWidth}
          strokeOpacity={pathOpacity}
        />
      );
    }
    return nodes;
  };

  const hexagonSize = 20;

  return (
    <svg
      fill="none"
      width={svgDimensions.width}
      height={svgDimensions.height}
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "pointer-events-none absolute left-0 top-0 transform-gpu stroke-2",
        className,
      )}
      viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
    >
      <circle
        cx={
          fromRef.current?.getBoundingClientRect().left -
          containerRef.current?.getBoundingClientRect().left +
          fromRef.current?.getBoundingClientRect().width / 2 +
          startXOffset
        }
        cy={
          fromRef.current?.getBoundingClientRect().top -
          containerRef.current?.getBoundingClientRect().top +
          fromRef.current?.getBoundingClientRect().height / 2 +
          startYOffset
        }
        r={hexagonSize / 3}
        fill={gradientStartColor}
      />
      {createHexagonNodes(
        fromRef.current?.getBoundingClientRect().left -
          containerRef.current?.getBoundingClientRect().left +
          fromRef.current?.getBoundingClientRect().width / 2 +
          startXOffset,
        fromRef.current?.getBoundingClientRect().top -
          containerRef.current?.getBoundingClientRect().top +
          fromRef.current?.getBoundingClientRect().height / 2 +
          startYOffset,
        hexagonSize
      )}
      <circle
        cx={
          toRef.current?.getBoundingClientRect().left -
          containerRef.current?.getBoundingClientRect().left +
          toRef.current?.getBoundingClientRect().width / 2 +
          endXOffset
        }
        cy={
          toRef.current?.getBoundingClientRect().top -
          containerRef.current?.getBoundingClientRect().top +
          toRef.current?.getBoundingClientRect().height / 2 +
          endYOffset
        }
        r={hexagonSize / 3}
        fill={gradientStopColor}
      />
      {createHexagonNodes(
        toRef.current?.getBoundingClientRect().left -
          containerRef.current?.getBoundingClientRect().left +
          toRef.current?.getBoundingClientRect().width / 2 +
          endXOffset,
        toRef.current?.getBoundingClientRect().top -
          containerRef.current?.getBoundingClientRect().top +
          toRef.current?.getBoundingClientRect().height / 2 +
          endYOffset,
        hexagonSize
      )}
      <path
        d={pathD}
        stroke={pathColor}
        strokeWidth={pathWidth}
        strokeOpacity={pathOpacity}
        strokeLinecap="round"
      />
      <path
        d={pathD}
        strokeWidth={pathWidth}
        stroke={`url(#${id})`}
        strokeOpacity="1"
        strokeLinecap="round"
      />
      <defs>
        <motion.linearGradient
          className="transform-gpu"
          id={id}
          gradientUnits={"userSpaceOnUse"}
          initial={{
            x1: "0%",
            x2: "0%",
            y1: "0%",
            y2: "0%",
          }}
          animate={{
            x1: gradientCoordinates.x1,
            x2: gradientCoordinates.x2,
            y1: gradientCoordinates.y1,
            y2: gradientCoordinates.y2,
          }}
          transition={{
            delay,
            duration,
            ease: [0.16, 1, 0.3, 1],
            repeat: Infinity,
            repeatDelay: 0,
          }}
        >
          <stop stopColor={gradientStartColor} stopOpacity="0"></stop>
          <stop stopColor={gradientStartColor}></stop>
          <stop offset="32.5%" stopColor={gradientStopColor}></stop>
          <stop
            offset="100%"
            stopColor={gradientStopColor}
            stopOpacity="0"
          ></stop>
        </motion.linearGradient>
      </defs>
    </svg>
  );
};
