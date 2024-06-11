'use client'
import React, { useEffect, useRef, useState } from "react";
import useSectionInView from "../../lib/useSectionInView";
import { motion, useInView, Variants } from "framer-motion";


const TextSplitter = ({ text }: { text: string }) => {
  // const containerRef = useRef<HTMLDivElement>(null);
  const [lines, setLines] = useState<string[]>([]);
  const [containerRef, inView] = useSectionInView({ threshold: 0.95 });

  const containerVariants: Variants = {
    hidden: { opacity: 1 },
    animate: {
      transition: {
        staggerChildren: 0.075,
        // delayChildren: 0.2,
      },
    },
  };

  const childVariants: Variants = {
    hidden: { opacity: 0, y: 100 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        // delay: 0.1,
      },
    },
  };


  useEffect(() => {
    const container = containerRef.current;
    if (container && lines.length === 0) {
      // Clear existing spans
      // container.innerHTML = "";
      // Create a temporary span to measure text width
      const tempSpan = document.createElement("span");
      tempSpan.style.visibility = "hidden";
      tempSpan.style.whiteSpace = "nowrap";
      tempSpan.style.fontWeight = "300";
      tempSpan.style.fontSize = "2.25rem";
      tempSpan.style.lineHeight = "3rem";
      tempSpan.style.lineHeight = "1";
      tempSpan.style.fontFamily = "var(--font-sans)";
      // tempSpan.style.display = "block";
      container.appendChild(tempSpan);
      const words = text.split(" ");
      let currentLine = "";
      let lines: string[] = [];
      setLines([]);
      words.forEach((word) => {
        tempSpan.innerText = "";
        const widthBefore = container.offsetWidth - 1;
        tempSpan.innerText = currentLine + word + " ";
        if (tempSpan.offsetWidth >= widthBefore) {
          lines = [...lines, currentLine.trim()];
          // setLines(prevLines => [...prevLines, currentLine.trim()]);
          tempSpan.innerText = currentLine  + " ";
          currentLine = word + " ";
          // tempSpan.innerText = currentLine;
        } else {
          currentLine += word + " ";
        }
      });
      if (currentLine) {
        // setLines(prevLines => [...prevLines, currentLine.trim()]);
        lines = [...lines, currentLine.trim()];
      }
      setLines(lines);
      container.removeChild(tempSpan);
    }
  }, [text, lines, containerRef.current?.offsetWidth]);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "animate" : "hidden"}
      ref={containerRef}
      className="w-full  box-border "
      // className="w-full  box-border border-2 border-black"
    >
      <div
        className="text-gray-800 w-full overflow-hidden ">
        {lines.map((line, index) => (

          <div className="overflow-hidden">
            <motion.div
              key={index}
              variants={childVariants}
              style={{
                lineHeight: "3rem",
                fontSize: "2.25rem",
                fontWeight: 300,
                fontFamily: "var(--font-sans)",
              }}
              // className="text-black text-4xl font-light [line-height:3rem]"
            >
              {line}
            </motion.div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default TextSplitter;
