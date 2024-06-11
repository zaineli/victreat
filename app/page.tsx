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
import CancerCarousel from "@/components/custom/cancer";
import { useEffect, useState } from "react";
import MutationCarousel from "@/components/custom/MutationCarousel";
import Head from "next/head";
import Carousel from "@/components/custom/carousell";

import { IoNewspaperOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { RiTeamLine } from "react-icons/ri";
import ScrollButton from "@/components/custom/scroll-button";
import Newss from "@/components/custom/news-auto";





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

  const [data, setData] = useState([]);
  const [selectedCancerIndex, setSelectedCancerIndex] = useState(0);

  useEffect(() => {
    fetch("/cancer_data.json")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error("Error fetching JSON data:", error));
  }, []);

  const handleCancerSelect = (index) => {
    if (index < data.length) {
      setSelectedCancerIndex(index);
    }
  };

  const selectedCancer = data[selectedCancerIndex];

  return (
    <div className=" ">
      <ScrollButton />
      <section className="relative">

        <section ref={ref} className="h-screen flex items-center flex-col justify-center gap-8">
          <h1 className="text-6xl text-center">Treat you Cancer <br /> with Victreat</h1>
          <ul className="flex gap-4 text-2xl w-48 text-center">
            <li className="rounded-full bg-white aspect-square flex-1 text-grey-500 flex justify-center items-center">
              <a href="#news">
                <IoNewspaperOutline />
              </a>
            </li>
            <li className="rounded-full bg-white aspect-square flex-1 text-grey-500 flex justify-center items-center"><IoMailOutline /></li>
            <li className="rounded-full bg-white aspect-square flex-1 text-grey-500 flex justify-center items-center"><RiTeamLine /></li>
            <li className="rounded-full bg-white aspect-square flex-1 text-grey-500 flex justify-center items-center">d</li>
          </ul>
          <div className=" w-[40rem] rounded-lg text-2xl">
            <Carousel />
          </div>
          <div className="w-[36rem] bg-white rounded-full flex p-1">
            <input type="text" name="" className=" flex-1 bg-transparent text-white py-2 px-4 placeholder:text-grey" id="" placeholder="Search Cancer ..." />
            <button className="px-4 bg-[#DBE2EC] text-white rounded-full">Search</button>
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
              src="https://imgs.search.brave.com/g3rChyKsltNYFPFk7CIOEGlPK8BZi3n70WOahxXGoUc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM2/NzEyNDc5NS9waG90/by9ncmVlbi1kbmEu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PVlvTHJ1c29kUnlH/Q00yajRpOV9EUnNu/MEFyZFNVaE1uYTB2/VmRHYW0zNzQ9"
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
            src="https://imgs.search.brave.com/S2kErgUGJFU7htcIAGksfd8Zhix60AgOMizyFu0kjQA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9ibG9n/Lmh1YnNwb3QuY29t/L2hzLWZzL2h1YmZz/L0dvb2dsZSUyMERy/aXZlJTIwSW50ZWdy/YXRpb24vdHlwZXMl/MjBvZiUyMGNoYXJ0/c18zMjAyMy1NYXkt/MjItMjAyMy0xMC0x/Ny0yNi0yOTk0LVBN/LnBuZz93aWR0aD02/MDAmaGVpZ2h0PTQ1/MSZuYW1lPXR5cGVz/JTIwb2YlMjBjaGFy/dHNfMzIwMjMtTWF5/LTIyLTIwMjMtMTAt/MTctMjYtMjk5NC1Q/TS5wbmc"
            alt="hero"
            containerVariants={containerVariantsA}
          />
        </div>
      </section>

      <CallToAction />

      <Newss />
      <Footer />
    </div>
  );
}
