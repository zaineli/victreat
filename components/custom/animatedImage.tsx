"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import useSectionInView from "../../lib/useSectionInView";

type AnimatedImageProps = {
  src: string;
  alt: string;
  containerVariants: Variants;
};

const AnimatedImage: React.FC<AnimatedImageProps> = ({
  src,
  alt,
  containerVariants,
}) => {

    const [sectionRef, inView] = useSectionInView({ threshold: 0.1 });
  return (
    <motion.div
      ref={sectionRef}
      initial="hidden"
      animate={inView ? "animate" : "hidden"}
      variants={containerVariants}
      className="w-full md:w-1/2 lg:w-1/2"
    >
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-auto rounded-lg shadow-lg"
      />
    </motion.div>
  );
};

export default AnimatedImage;
