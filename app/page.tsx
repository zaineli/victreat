'use client';

import HeroText from "@/components/custom/HeroText";
import News from "@/components/custom/news";
import Carousel from "@/components/custom/caruosel";
import ScrollText from "@/components/custom/scrollText";
import SearchBar from "@/components/custom/searchBar";
import Footer from "@/components/custom/footer";
import CallToAction from "@/components/custom/callToAction";

export default function Home() {
  const text = `This is an example of text that will be split into lines based on the container's width. It will adjust dynamically as the container resizes.`;
  return (
    <div className="bg-customGray ">
      <section className="h-screen flex items-center flex-col justify-center gap-24">
        <HeroText />
        <SearchBar />
      </section>
      <ScrollText text="Our mission is to empower cancer patients by providing clear, comprehensive information about the treatment options available for their specific diagnosis. We support patients and their families by offering up-to-date resources, expert insights, and personalized guidance. Whether newly diagnosed or exploring new treatments, our platform helps you make informed decisions and navigate your path to recovery with confidence and hope." />
      <News />
      <CallToAction />
      <Footer />
    </div>
  );
}

