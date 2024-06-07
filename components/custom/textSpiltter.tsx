'use client'
import React, { useEffect, useRef, useState } from "react";
import { motion, Variants } from "framer-motion";

const variants: Variants = {
  hidden: { opacity: 0, y: 50 },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: index * 0.1,
    },
  }),
};

const TextSplitter = ({ text }: { text: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lines, setLines] = useState<string[]>([]);
  useEffect(() => {
    const container = containerRef.current;
    if (container && lines.length === 0) {
      // Clear existing spans
      container.innerHTML = "";
      // Create a temporary span to measure text width
      const tempSpan = document.createElement("span");
      tempSpan.style.visibility = "hidden";
      tempSpan.style.whiteSpace = "nowrap";
      tempSpan.style.fontSize = "2rem";
      tempSpan.style.fontWeight = "bold";
      tempSpan.style.fontFamily = "sans-serif";
      container.appendChild(tempSpan);
      const words = text.split(" ");
      let currentLine = "";
      let lines: string[] = [];
      console.log("Starting");
      setLines([]);
      words.forEach((word) => {
        tempSpan.innerText = currentLine + word + " ";
        if (tempSpan.offsetWidth > container.offsetWidth) {
          lines = [...lines, currentLine.trim()];
          // setLines(prevLines => [...prevLines, currentLine.trim()]);
          console.log(currentLine.trim());
          currentLine = word + " ";
        } else {
          currentLine += word + " ";
        }
      });
      if (currentLine) {
        // setLines(prevLines => [...prevLines, currentLine.trim()]);
        lines = [...lines, currentLine.trim()];
      }
      setLines(lines);
      console.log({ lines });
      container.removeChild(tempSpan);
    }
  }, [text, containerRef.current?.offsetWidth]);
  console.log(lines);
  return (
    <div
      ref={containerRef}
      className="w-full  box-border border-2 border-black"
    >
      <motion.div className="text-4xl font-bold text-gray-800">
        Purpose
        {lines.map((line, index) => (
          <motion.div
            initial="hidden"
            animate="animate"
            variants={variants}
            whileInView="animate"
            viewport={{ once: true }}
            key={index}
            custom={index}
            className="text-2xl block wipe"
          >
            {line}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TextSplitter;
