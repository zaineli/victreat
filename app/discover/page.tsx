"use client";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import React, { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import Link from 'next/link';
import { CancerType, cancerTypes } from "./data";
import { useRouter } from "next/navigation";


const highlightKeyword = (text: string, keyword: string) => {
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

function DiscoverPage() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const top = 5;
  const router = useRouter();

  const filterCancerTypes = (cancer: CancerType) => {
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
  }, {} as { [key: string]: CancerType[] });

  const matchingCancerTypes =
    query === "" ? [] : cancerTypes.filter(filterCancerTypes).slice(0, top);

  function clear() {
    setQuery("");
  }

  return (
    <div className="px-32 py-16 gap-20 dark flex flex-col h-[calc(100vh-5rem)]">
      <div className="font text-center">
        <div className="font-thin text-4xl">
          Find Your
        </div >
        <span className='font-light text-7xl text-slate-500'>Cancer Treatment</span>
      </div>

      {/* <section className="mt-16 w-[75%] border-2 border-gray-400 bg-slate-500 text-white rounded-lg overflow-hidden mx-auto">
        <div className="flex text-2xl items-center px-4 py-4 gap-4">
          <IoSearchOutline />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 outline-none bg-transparent"
            placeholder="Search your cancer type ..."
          />
          {query !== "" && (
            <div className="text-sm hover:cursor-pointer" onClick={clear}>
              Clear
            </div>
          )}
        </div>
        <div className="flex justify-between px-4 py-4">
          <div
            className={`self-center hover:cursor-pointer ${filter === "all" ? "font-bold text-gray-800" : ""
              }`}
            onClick={() => setFilter("all")}
          >
            All
          </div>
          <div
            className={`self-center hover:cursor-pointer ${filter === "name" ? "font-bold text-gray-800" : ""
              }`}
            onClick={() => setFilter("name")}
          >
            Name
          </div>
          <div
            className={`self-center hover:cursor-pointer ${filter === "organ" ? "font-bold text-gray-800" : ""
              }`}
            onClick={() => setFilter("organ")}
          >
            Organs
          </div>
        </div>
        <Suggestions {...{ matchingCancerTypes, query, filter }} />
      </section> */}

      <Command className="rounded-lg border shadow-md h-min">
        <CommandInput placeholder="Search Mutations..." />
        <CommandList className="max-h-[unset]">
          <CommandEmpty>No results found.</CommandEmpty>
          {Object.entries(groups).map(([group, types]) =>
            <>
              <CommandGroup heading={group}>
                {
                  types.map(({ name, image }) =>
                    <CommandItem onSelect={() => {
                      router.push(`/discover/${name.toLowerCase().replace(/\s/g, "-")}`);
                    }}>
                      <img src={image} alt="" className="w-4 h-4 rounded-full" />
                      <span className="ml-2">{name}</span>
                      {/* only for searching and not displying */}
                      <span className="sr-only">{group}</span>
                    </CommandItem>
                    )
                }
              </CommandGroup>
              <CommandSeparator />
            </>
          )}
        </CommandList>
      </Command>
    </div>
  );
}

function Suggestions({
  matchingCancerTypes,
  query,
  filter,
}: {
  matchingCancerTypes: CancerType[];
  query: string;
  filter: string;
}) {
  const contentRef = React.useRef<HTMLUListElement>(null);
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const [previousHeight, setPreviousHeight] = React.useState(0);

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
                  {filter === "organ"
                    ? highlightKeyword(cancer.name, query)
                    : filter === "name"
                      ? highlightKeyword(cancer.name, query)
                      : cancer.name.toLowerCase().includes(query.toLowerCase())
                        ? highlightKeyword(cancer.name, query)
                        : cancer.name}
                </h2>
                <p className="text-sm">
                  {filter === "organ"
                    ? highlightKeyword(cancer.organ, query)
                    : filter === "all" &&
                      cancer.organ.toLowerCase().includes(query.toLowerCase())
                      ? highlightKeyword(cancer.organ, query)
                      : cancer.organ}
                </p>
              </div>
            </div>
            <FaArrowRight className="arrow-icon justify-end group-hover:-rotate-45 transition-all duration-300" />
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default DiscoverPage;
