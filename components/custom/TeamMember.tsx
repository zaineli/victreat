// components/TeamMember.js
import Image from "next/image";
import AnimatedImage from "./animatedImage";
import { Variants } from "framer-motion";
import TextSplitter from "./textSpiltter";

const TeamMember = ({ name, title, imageSrc, bgColor, index }) => {

  const containerVariantsA: Variants = {
    hidden: { opacity: 0, x: -100 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };

  function currentIndex(index) {
    return (
      <AnimatedImage
        className={`overflow-hidden w-72 h-96 flex items-center justify-center rounded-[3rem] ${bgColor}`}
          src={imageSrc}
          alt={`${name}'s photo`}
          fit="contain"
          containerVariants={containerVariantsA}
        />
    );
  }
  return (
    <div className="flex flex-col items-center">
      {currentIndex(index)}
      <TextSplitter lineHeight="1.125rem" fontSize="1.125rem" className="text-lg font-bold mt-4 text-center" text={name} />
      <TextSplitter fontSize="1.125rem" className="text-sm text-gray-600 text-center" text={title} />
      {/* <h3 className="text-lg font-bold mt-4">{name}</h3>
      <p className="text-sm text-gray-600">{title}</p> */}
    </div>
  );
};

export default TeamMember;
