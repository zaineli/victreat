"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { IoSearchOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { CancerType, cancerTypes } from "./data";

const highlightKeyword = (text, keyword) => {
  const index = text.toLowerCase().indexOf(keyword.toLowerCase());
  if (index === -1) return text;

  const beforeKeyword = text.slice(0, index);
  const afterKeyword = text.slice(index + keyword.length);
  return (
    <>
      {beforeKeyword}
      <mark>{text.slice(index, index + keyword.length)}</mark>
      {afterKeyword}
    </>
  );
};

const Suggestions = ({ matchingCancerTypes, query, filter }) => {
  const contentRef = useRef(null);
  const wrapperRef = useRef(null);
  const [previousHeight, setPreviousHeight] = useState(0);

  useEffect(() => {
    if (!contentRef.current || !wrapperRef.current) return;
    if (contentRef.current.scrollHeight === previousHeight) return;
    wrapperRef.current?.animate(
      [
        { opacity: 0, height: previousHeight + "px" },
        { opacity: 1, height: contentRef.current?.scrollHeight + "px" },
      ],
      {
        duration: 500,
        easing: "ease-in-out",
      }
    );
    setPreviousHeight(contentRef.current?.scrollHeight || 0);
  }, [matchingCancerTypes, previousHeight]);

  return (
    <div ref={wrapperRef}>
      <ul ref={contentRef} className="border-t-2 border-gray-200">
        {matchingCancerTypes.map((cancer, i) => (
          <Link
            href={`/discover/${cancer.name.toLowerCase().replace(/\s/g, "-")}`}
            key={i}
            className="flex items-center gap-4 justify-between group px-16 py-4 border-b-2 border-gray-200 w-full animate-suggestion hover:bg-gray-700 transition-colors duration-300"
          >
            <div className="flex items-center justify-start gap-4">
              <img
                src={cancer.image}
                alt={cancer.name}
                className="w-12 h-12 object-cover rounded-full bg-gray-700"
              />
              <div className="flex flex-col">
                <h2 className="text-lg font-semibold">
                  {highlightKeyword(cancer.name, query)}
                </h2>
                <p className="text-sm">
                  {highlightKeyword(cancer.organ, query)}
                </p>
              </div>
            </div>
            <FaArrowRight className="arrow-icon justify-end group-hover:-rotate-45 transition-all duration-300" />
          </Link>
        ))}
      </ul>
    </div>
  );
};

function DiscoverPage() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const top = 5;
  const router = useRouter();

  const filterCancerTypes = (cancer) => {
    const lowerQuery = query.toLowerCase();
    if (filter === "name") {
      return cancer.name.toLowerCase().includes(lowerQuery);
    } else if (filter === "organ") {
      return cancer.organ.toLowerCase().startsWith(lowerQuery);
    } else if (filter === "all") {
      return (
        cancer.name.toLowerCase().includes(lowerQuery) ||
        cancer.organ.toLowerCase().includes(lowerQuery)
      );
    }
    return false;
  };

  const groups = cancerTypes.reduce((acc, cancer) => {
    const key = cancer.organ;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(cancer);
    return acc;
  }, {});

  const matchingCancerTypes = query === "" ? [] : cancerTypes.filter(filterCancerTypes).slice(0, top);

  const clear = () => setQuery("");

  return (
    <div className="px-32 py-16 gap-20 dark flex flex-col h-[calc(100vh-5rem)]">
      <div className="font text-center">
        <div className="font-thin text-4xl">Find Your</div>
        <span className='font-light text-7xl text-slate-500'>Cancer Treatment</span>
      </div>

      <Command className="rounded-lg border shadow-md h-min">
        <CommandInput 
          placeholder="Search Mutations..." 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <CommandList className="max-h-[unset]">
          <CommandEmpty>No results found.</CommandEmpty>
          {Object.entries(groups).map(([group, types]) => (
            <React.Fragment key={group}>
              <CommandGroup heading={group}>
                {types.map(({ name, image }) => (
                  <CommandItem
                    key={name}
                    onSelect={() => {
                      router.push(`/discover/${name.toLowerCase().replace(/\s/g, "-")}`);
                    }}
                  >
                    <img src={image} alt="" className="w-4 h-4 rounded-full" />
                    <span className="ml-2">{name}</span>
                    <span className="sr-only">{group}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
              <CommandSeparator />
            </React.Fragment>
          ))}
        </CommandList>
      </Command>

      {matchingCancerTypes.length > 0 && (
        <Suggestions
          matchingCancerTypes={matchingCancerTypes}
          query={query}
          filter={filter}
        />
      )}
    </div>
  );
}

export default DiscoverPage;
