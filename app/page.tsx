"use client";
import Footer from "@/components/custom/footer";
import CallToAction from "@/components/custom/callToAction";
import { motion, Variants } from "framer-motion";
import useSectionInView from "@/lib/useSectionInView";
import { useEffect, useRef, useState } from "react";
import Carousel from "@/components/custom/carousell";
import Team from "@/components/custom/Team";
import { IoNewspaperOutline } from "react-icons/io5";
import { RiTeamLine } from "react-icons/ri";
import ScrollButton from "@/components/custom/scroll-button";
import Newss from "@/components/custom/news-auto";
import { SiTarget } from "react-icons/si";
import { GrTechnology } from "react-icons/gr";
import Section from "@/components/custom/Section";
import Globe from "@/components/magicui/globe";
import useOnFocus from "@/lib/useOnFocus";
import { queryData } from "@/components/custom/universal-search";
import SearchBar from "@/components/custom/searchBar";

export default function Home() {
  const { ref: searchRef, isFocused } = useOnFocus();
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState({ cancer: true, mutation: true, treatment: true });
  // const filteredCancerTypes = cancerTypes.filter((cancer) => cancer.name.toLowerCase().includes(query.toLowerCase())).slice(0, 6);
  // const filteredTreatmentTypes = treatments.filter((treatment) => treatment.name.toLowerCase().includes(query.toLowerCase())).slice(0, 6);
  // const filteredMutationTypes = mutations.filter((mutation) => mutation.name.toLowerCase().includes(query.toLowerCase())).slice(0, 6);
  const items = queryData(query, filters);

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

  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
  };

  const staggeredIcons = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delayChildren: 0.3, // Delay each icon animation by 0.3 seconds
        staggerChildren: 0.2 // Stagger icon animations by 0.2 seconds
      }
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <ScrollButton />
      <section className="relative mb-48">
        <section className="h-screen flex items-center flex-col justify-center gap-8">
          <motion.h1
            className="text-6xl text-center"
            initial="hidden"
            animate="visible"
            variants={textVariant}
          >
            Treat your Cancer <br /> with Victreat
          </motion.h1>
          <motion.ul
            className="flex gap-4 text-2xl w-48 text-center"
            initial="hidden"
            animate="visible"
            variants={staggeredIcons}
          >
            <motion.li variants={staggeredIcons}>
              <motion.a
                href="#purpose"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <SiTarget />
              </motion.a>
            </motion.li>
            <motion.li variants={staggeredIcons}>
              <motion.a
                href="#technology"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <GrTechnology />
              </motion.a>
            </motion.li>
            <motion.li variants={staggeredIcons}>
              <motion.a
                href="#news"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <IoNewspaperOutline />
              </motion.a>
            </motion.li>
            <motion.li variants={staggeredIcons}>
              <motion.a
                href="#team"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <RiTeamLine />
              </motion.a>
            </motion.li>
          </motion.ul>
          <motion.div
            className="w-[40rem] rounded-lg text-2xl"
            initial="hidden"
            animate="visible"
            variants={textVariant}
          >
            <Carousel />
          </motion.div>
          <SearchBar
            query={query}
            setQuery={setQuery}
            isFocused={isFocused}
            searchRef={searchRef}
            filters={filters}
            setFilters={setFilters}
            items={items}
          />
        </section>

        <div className="absolute scale-[1.9] bottom-[-250px] -z-[99] w-screen h-[80%] overflow-hidden">
          <Globe />
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

      <Section
        id="technology"
        title="Technology"
        text1="Advancements in technology are revolutionizing the field of cancer research."
        text2="With the integration of AI and big data analytics, new breakthroughs are within reach."
        imageUrl="https://imgs.search.brave.com/S2kErgUGJFU7htcIAGksfd8Zhix60AgOMizyFu0kjQA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9ibG9n/Lmh1YnNwb3QuY29t/L2hzLWZzL2h1YmZz/L0dvb2dsZSUyMERy/aXZlJTIwSW50ZWdy/YXRpb24vdHlwZXMl/MjBvZiUyMGNoYXJ0/c18zMjAyMy1NYXkt/MjItMjAyMy0xMC0x/Ny0yNi0yOTk0LVBN/LnBuZz93aWR0aD02/MDAmaGVpZ2h0PTQ1/MSZuYW1lPXR5cGVz/JTIwb2YlMjBjaGFy/dHNfMzIwMjMtTWF5/LTIyLTIwMjMtMTAt/MTctMjYtMjk5NC1Q/TS5wbmc"
        containerVariants={containerVariantsB}
        reverse={true}
      />

      <CallToAction />
      {/* <Newss /> */}
      <section className="flex-1 flex items-start justify-center">
        <Team />
      </section>
      <Footer />
    </div>
  );
}
