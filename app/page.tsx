"use client";
import Footer from "@/components/custom/footer";
import CallToAction from "@/components/custom/callToAction";
import { motion, Variants } from "framer-motion";
import useSectionInView from "@/lib/useSectionInView";
import News from "@/components/custom/news";
import { useEffect, useState } from "react";
import Carousel from "@/components/custom/carousell";
import Team from "@/components/custom/Team";

import { IoNewspaperOutline } from "react-icons/io5";
import { RiTeamLine } from "react-icons/ri";
import ScrollButton from "@/components/custom/scroll-button";
import Newss from "@/components/custom/news-auto";

import { SiTarget } from "react-icons/si";
import { GrTechnology } from "react-icons/gr";
import Section from "@/components/custom/Section";




export default function Home() {

  const [ref, isInView] = useSectionInView({ threshold: 0.8 });

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


  return (
    <div className=" ">
      
      <ScrollButton />
      <section className="relative">

        <section ref={ref} className="h-screen flex items-center flex-col justify-center gap-8">
          <h1 className="text-6xl text-center">Treat you Cancer <br /> with Victreat</h1>
          <ul className="flex gap-4 text-2xl w-48 text-center">
            <li className="rounded-full bg-white aspect-square flex-1 text-grey-500 flex justify-center items-center"><a href="#purpose"><SiTarget/></a></li>
            <li className="rounded-full bg-white aspect-square flex-1 text-grey-500 flex justify-center items-center"><a href="#technology"><GrTechnology /></a></li>
            <li className="rounded-full bg-white aspect-square flex-1 text-grey-500 flex justify-center items-center">
              <a href="#news">
                <IoNewspaperOutline />
              </a>
            </li>
            <li className="rounded-full bg-white aspect-square flex-1 text-grey-500 flex justify-center items-center"><a href="#team"><RiTeamLine/></a></li>

          </ul>
          <div className=" w-[40rem] rounded-lg text-2xl">
            <Carousel  />
          </div>
          <div className="w-[36rem] bg-white rounded-full flex p-1">
            <input type="text" name="" className=" flex-1 bg-transparent text-white py-2 px-4 placeholder:text-grey" id="" placeholder="Search Cancer ..." />
            <button className="px-4 bg-[#DBE2EC] text-white rounded-full">Search</button>
          </div>
        </section>


        <Section
        id="purpose"
        title="Purpose"
        text1="Cancer Research is growing at a rapid speed and better Treatments are being discovered."
        text2="But the treatment industry is lagging and uses old methods. There is a gap between research and medicine."
        imageUrl="https://imgs.search.brave.com/g3rChyKsltNYFPFk7CIOEGlPK8BZi3n70WOahxXGoUc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM2/NzEyNDc5NS9waG90/by9ncmVlbi1kbmEu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PVlvTHJ1c29kUnlH/Q00yajRpOV9EUnNu/MEFyZFNVaE1uYTB2/VmRHYW0zNzQ9"
        containerVariants={containerVariantsA}
      />
        <div className={`circle-a ${isInView ? '' : 'expand'} `}></div>
        <div className={`circle-b ${isInView ? '' : 'expand'} `}></div>
      </section>
      <Section
        id="technology"
        title="Technology"
        text1="Advancements in technology are revolutionizing the field of cancer research."
        text2="With the integration of AI and big data analytics, new breakthroughs are within reach."
        imageUrl="https://imgs.search.brave.com/S2kErgUGJFU7htcIAGksfd8Zhix60AgOMizyFu0kjQA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9ibG9n/Lmh1YnNwb3QuY29t/L2hzLWZzL2h1YmZz/L0dvb2dsZSUyMERy/aXZlJTIwSW50ZWdy/YXRpb24vdHlwZXMl/MjBvZiUyMGNoYXJ0/c18zMjAyMy1NYXkt/MjItMjAyMy0xMC0x/Ny0yNi0yOTk0LVBN/LnBuZz93aWR0aD02/MDAmaGVpZ2h0PTQ1/MSZuYW1lPXR5cGVz/JTIwb2YlMjBjaGFy/dHNfMzIwMjMtTWF5/LTIyLTIwMjMtMTAt/MTctMjYtMjk5NC1Q/TS5wbmc"
        containerVariants={containerVariantsB}
        reverse={true}
      />
      <Section
        id="technology"
        title="Technology"
        text1="Advancements in technology are revolutionizing the field of cancer research."
        text2="With the integration of AI and big data analytics, new breakthroughs are within reach."
        imageUrl="https://imgs.search.brave.com/S2kErgUGJFU7htcIAGksfd8Zhix60AgOMizyFu0kjQA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9ibG9n/Lmh1YnNwb3QuY29t/L2hzLWZzL2h1YmZz/L0dvb2dsZSUyMERy/aXZlJTIwSW50ZWdy/YXRpb24vdHlwZXMl/MjBvZiUyMGNoYXJ0/c18zMjAyMy1NYXkt/MjItMjAyMy0xMC0x/Ny0yNi0yOTk0LVBN/LnBuZz93aWR0aD02/MDAmaGVpZ2h0PTQ1/MSZuYW1lPXR5cGVz/JTIwb2YlMjBjaGFy/dHNfMzIwMjMtTWF5/LTIyLTIwMjMtMTAt/MTctMjYtMjk5NC1Q/TS5wbmc"
        containerVariants={containerVariantsB}
      />
      <CallToAction />

      <Newss />
      {/* <News /> */}
      <section className="flex-1  flex items-start justify-center">
          <Team />
      </section>      
      <Footer />
    </div>
  );
}
