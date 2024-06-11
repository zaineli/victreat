'use client'
import React, { useEffect, useRef, useState } from "react";
import useSectionInView from "../../lib/useSectionInView";
import { motion, useInView, Variants } from "framer-motion";

type Props = {
  text: string;
  fontWeight?: string;
  fontSize?: string;
  className?: string;
  lineHeight?: string;
};
const TextSplitter = ({text, fontWeight, fontSize, className, lineHeight}:Props) => {
  const [lines, setLines] = useState<string[]>([]);
  const [containerRef, inView] = useSectionInView({ threshold: 0.95 });

  const containerVariants: Variants = {
    hidden: { opacity: 1 },
    animate: {
      transition: {
        staggerChildren: 0.075,
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
      },
    },
  };


  useEffect(() => {
    const container = containerRef.current;
    if (container && lines.length === 0) {
      const tempSpan = document.createElement("span");
      tempSpan.style.visibility = "hidden";
      tempSpan.style.whiteSpace = "nowrap";
      tempSpan.style.fontWeight = fontWeight || "300"; // default to 300 if not provided
      tempSpan.style.fontSize = fontSize || "2.25rem"; // default to 2.25rem if not provided
      container.appendChild(tempSpan);
      const words = text.split(" ");
      let currentLine = "";
      let lines: string[] = [];
      words.forEach((word) => {
        tempSpan.innerText = "";
        const widthBefore = container.offsetWidth - 1;
        tempSpan.innerText = currentLine + word + " ";
        if (tempSpan.offsetWidth >= widthBefore) {
          lines = [...lines, currentLine.trim()];
          tempSpan.innerText = currentLine  + " ";
          currentLine = word + " ";
        } else {
          currentLine += word + " ";
        }
      });
      if (currentLine) {
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
      className={`w-full box-border ${className}`} // apply custom className
    >
      <div className="text-gray-800 w-full overflow-hidden">
        {lines.map((line, index) => (
          <div className="overflow-hidden" key={index}>
            <motion.div
              variants={childVariants}
              style={{
                lineHeight: lineHeight || "3rem",
                fontSize: fontSize || "2.25rem", // default to 2.25rem if not provided
                fontWeight: fontWeight || "300", // default to 300 if not provided
                fontFamily: "var(--font-sans)",
              }}
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
