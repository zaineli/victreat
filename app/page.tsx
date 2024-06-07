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

export default function Home() {
  const purposeLines = [
    "Our purpose is to revolutionize cancer treatment",
    "with innovative therapies,",
    "ensuring personalized and effective care",
    "for every patient.",
  ];

  const technologyLines = [
    "Our technology harnesses cutting-edge innovations",
    "to deliver precise and personalized cancer treatments,",
    "improving patient outcomes.",
    "We integrate advanced research with state-of-the-art tools",
    "to lead the future of oncology care.",
  ];

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
    <div className="bg-customGray ">
      <section className="h-screen flex items-center flex-col justify-center gap-24">
        <HeroText />
        <SearchBar />
      </section>
      <section className="bg-white h-screen flex flex-col md:flex-row items-center justify-between gap-8 md:gap-24 px-4 md:px-12 lg:px-40">
        <AnimatedText title="/ Purpose" textLines={purposeLines} />
        <AnimatedImage
          src="https://images.unsplash.com/photo-1581360742512-021d5b2157d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvc3BpdGFsfGVufDB8fDB8fHww"
          alt="hero"
          containerVariants={containerVariantsA}
        />
      </section>
      <section className="bg-white h-screen flex flex-col md:flex-row items-center justify-between gap-8 md:gap-24 px-4 md:px-12 lg:px-40">
        <AnimatedImage
          src="https://images.unsplash.com/photo-1581360742512-021d5b2157d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvc3BpdGFsfGVufDB8fDB8fHww"
          alt="hero"
          containerVariants={containerVariantsB}
        />
        <AnimatedText title="/ Technology" textLines={technologyLines} />
      </section>
      <CallToAction />
      <News />
      <Footer />
    </div>
  );
}
