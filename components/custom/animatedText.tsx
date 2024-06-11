"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import useSectionInView from "../../lib/useSectionInView";
import TextSplitter from "./textSpiltter";

 
type AnimatedTextProps = {
  title: string;
  textLines: string[];
};

function AnimatedText({ title, textLines }: AnimatedTextProps) {
  const [sectionRef, inView] = useSectionInView({ threshold: 0.1 });

  const text = title + textLines.join(" ");
  return <TextSplitter text={text} />;


  // return (
  //   <motion.div
  //     ref={sectionRef}
  //     initial="hidden"
  //     animate={inView ? "animate" : "hidden"}
  //     variants={containerVariants}
  //     className="text-4xl font-bold text-gray-800 overflow-y-hidden"
  //   >
  //     <motion.div
  //       initial={{ opacity: 0, x: 100 }}
  //       animate={{ opacity: 1, x: 0 }}
  //       transition={{ duration: 0.25, ease: "easeInOut" }}
  //     >
  //       {title}
  //     </motion.div>
  //     {textLines.map((line, index) => (
  //       <div className="overflow-hidden" key={index}>
  //         <motion.p
  //           variants={childVariants}
  //           className="text-black text-4xl font-light my-4 overflow-hidden"
  //         >
  //           {line}
  //         </motion.p>
  //       </div>
  //     ))}
  //   </motion.div>
  // );
}

export default AnimatedText;
