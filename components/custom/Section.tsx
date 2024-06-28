import React from "react";
import TextSplitter from "./textSpiltter";
import AnimatedImage from "./animatedImage";

type Props = {
  id: string;
  title: string;
  text1: string;
  text2: string;
  component: React.ReactNode;
  containerVariants: any;
  reverse?: boolean;
  className?: string;
};

const Section = ({
  id,
  title,
  text1,
  text2,
  component,
  containerVariants,
  reverse,
  className,
}: Props) => {
  return (
    <section id={id} className={`z-50 relative py-36 flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} md:flex-row items-start justify-between gap-8 md:gap-24 px-4 md:px-12 lg:px-40 ` + className}>
      <div className="flex-1">
        <h1 className="text-3xl font-semibold mb-8 text-slate-600">\ {title}</h1>
        <div className="my-16">
          <TextSplitter text={text1} />

        </div>
        <div className="my-16">
          <TextSplitter text={text2} />
        </div>
      </div>
      <div className="flex-1 max-w-[calc(50%-2rem)] h-full flex items-start justify-center">
        {component}
      </div>
    </section>
  );
};

export default Section;
