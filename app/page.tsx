'use client';

import HeroText from "@/components/custom/HeroText";
import News from "@/components/custom/news";
import ScrollText from "@/components/custom/scrollText";
import SearchBar from "@/components/custom/searchBar";

import React, { useEffect, useRef, useState } from 'react';

const TextSplitter = ({ text }: { text: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (container && lines.length === 0) {
      // Clear existing spans
      container.innerHTML = '';

      // Create a temporary span to measure text width
      const tempSpan = document.createElement('span');
      tempSpan.style.visibility = 'hidden';
      tempSpan.style.whiteSpace = 'nowrap';
      tempSpan.style.fontSize = '2rem';
      tempSpan.style.fontWeight = 'bold';
      tempSpan.style.fontFamily = 'sans-serif';

      container.appendChild(tempSpan);

      const words = text.split(' ');
      let currentLine = '';
      let lines: string[] = [];
      console.log("Starting")
      setLines([])
      words.forEach(word => {
        tempSpan.innerText = currentLine + word + ' ';
        if (tempSpan.offsetWidth > container.offsetWidth) {
          lines = [...lines, currentLine.trim()];

          // setLines(prevLines => [...prevLines, currentLine.trim()]);
          console.log(currentLine.trim());
          currentLine = word + ' ';
        } else {
          currentLine += word + ' ';
        }
      });

      if (currentLine) {
        // setLines(prevLines => [...prevLines, currentLine.trim()]);
        lines = [...lines, currentLine.trim()];
      }
      setLines(lines)
      console.log({lines})
      container.removeChild(tempSpan);
    }
  }, [text, containerRef.current?.offsetWidth]);

  console.log(lines)
  return (
    <div ref={containerRef} className="w-full  box-border border-2 border-black">
      {lines.map((line, index) => (
        <span key={index} className="text-2xl block wipe">{line}</span>
      ))}
    </div>
  );
};


export default function Home() {
  const text = `This is an example of text that will be split into lines based on the container's width. It will adjust dynamically as the container resizes.`;
  return (
    <div className="bg-customGray ">
      <section className="h-screen flex items-center flex-col justify-center gap-24">

        <HeroText />
        <SearchBar />
      </section>
      <ScrollText text="Our mission is to empower cancer patients by providing clear, comprehensive information about the treatment options available for their specific diagnosis." />
      {/* <section className="h-screen"></section> */}
      <TextSplitter text={text} />
      <News />
    </div>
  );
}
