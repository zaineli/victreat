"use client";
import HeroText from "@/components/custom/HeroText";
import SearchBar from "@/components/custom/searchBar";
import Footer from "@/components/custom/footer";
import CallToAction from "@/components/custom/callToAction";
import { motion, Variants } from "framer-motion";
import useSectionInView from "@/lib/useSectionInView";
import AnimatedText from "@/components/custom/animatedText";
import AnimatedImage from "@/components/custom/animatedImage";
import News from "@/components/custom/news";
import TextSplitter from "@/components/custom/textSpiltter";


export default function Home() {
  const purposeLines =
    "Our purpose is to revolutionize cancer treatment with innovative therapies ensuring personalized and effective care for every patient.";

  const [ref, isInView] = useSectionInView({ threshold: 0.8 });

  console.log({ isInView })


  const containerVariantsA: Variants = {
    hidden: { opacity: 0, x: 100 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const containerVariantsB: Variants = {
    hidden: { opacity: 0, x: -100 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <div className=" ">
      <section className="relative">

        <section ref={ref} className="h-screen flex items-center flex-col justify-center gap-8">
          <h1 className="text-6xl text-center">Treat you Cancer <br /> with Victreat</h1>
          <ul className="flex gap-4 text-2xl w-48 text-center">
            <li className="rounded-full bg-neutral-500 aspect-square flex-1 block text-white">a</li>
            <li className="rounded-full bg-neutral-500 aspect-square flex-1 block text-white">b</li>
            <li className="rounded-full bg-neutral-500 aspect-square flex-1 block text-white">c</li>
            <li className="rounded-full bg-neutral-500 aspect-square flex-1 block text-white">d</li>
          </ul>
          <div className="h-36 w-[36rem] bg-neutral-500 rounded-lg text-2xl"></div>
          <div className="w-[36rem] bg-neutral-500 rounded-full flex p-1">
            <input type="text" name="" className=" flex-1 bg-transparent text-white py-2 px-4 placeholder:text-grey" id="" placeholder="Search Cancer ..." />
            <button className="px-4 bg-white rounded-full">Search</button>
          </div>
        </section>

        <section className=" z-50 relative flex flex-col md:flex-row items-start justify-between gap-8 md:gap-24 px-4 md:px-12 lg:px-40">
          <div className="flex-1">
            <h1 className="text-3xl font-semibold mb-8">\ Purpose</h1>
            <div className=" my-16">
              <TextSplitter text={"Cancer Research is growing at a rapid speed and better Treatments are being discovered."} />
            </div>
            <div className="my-16">

              <TextSplitter text={"But the treatment industry is lagging and uses old methods. There is a gap between research and medicene"} />
            </div>
          </div>
          <div className="flex-1 max-w-[calc(50%-2rem)] h-full flex items-start justify-center ">
            <AnimatedImage
              src="https://images.unsplash.com/photo-1581360742512-021d5b2157d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvc3BpdGFsfGVufDB8fDB8fHww"
              alt="hero"
              containerVariants={containerVariantsA}
            />
          </div>
        </section>

        <div className={`circle-a ${isInView ? '' : 'expand'}`}></div>
        <div className={`circle-b ${isInView ? '' : 'expand'}`}></div>
      </section>
      <section className=" z-50 relative my-64 flex flex-col md:flex-row-reverse items-start justify-between gap-8 md:gap-24 px-4 md:px-12 lg:px-40">
        <div className="flex-1">
          <h1 className="text-3xl font-semibold mb-8">\ Purpose</h1>
          <div className=" my-16">
            <TextSplitter text={"Cancer Research is growing at a rapid speed and better Treatments are being discovered."} />
          </div>
          <div className="my-16">

            <TextSplitter text={"But the treatment industry is lagging and uses old methods. There is a gap between research and medicene"} />
          </div>
        </div>
        <div className="flex-1 max-w-[calc(50%-2rem)] h-full flex items-start justify-center ">
          <AnimatedImage
            src="https://images.unsplash.com/photo-1581360742512-021d5b2157d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvc3BpdGFsfGVufDB8fDB8fHww"
            alt="hero"
            containerVariants={containerVariantsA}
          />
        </div>
      </section>
      
      <CallToAction />
      <News />
      <Footer />
    </div>
  );
}
