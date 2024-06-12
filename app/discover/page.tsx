"use client";

import React, { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { Suspense } from 'react'

type CancerType = {
  name: string;
  image: string;
  organ: string;
};

const cancerTypes: CancerType[] = [
  {
    name: "Adrenal Cancer",
    image: "https://baconmockup.com/600/400",
    organ: "Adrenal Glands",
  },
  {
    name: "Bile Duct Cancer",
    image: "https://baconmockup.com/601/400",
    organ: "Bile Ducts",
  },
  {
    name: "Bladder Cancer",
    image: "https://baconmockup.com/602/400",
    organ: "Bladder",
  },
  {
    name: "Bone Cancer",
    image: "https://baconmockup.com/603/400",
    organ: "Bones",
  },
  {
    name: "Brain Cancer",
    image: "https://baconmockup.com/604/400",
    organ: "Brain",
  },
  {
    name: "Breast Cancer",
    image: "https://baconmockup.com/605/400",
    organ: "Breast",
  },
  {
    name: "Cervical Cancer",
    image: "https://baconmockup.com/606/400",
    organ: "Cervix",
  },
  {
    name: "Colon Cancer",
    image: "https://baconmockup.com/607/400",
    organ: "Colon",
  },
  {
    name: "Colorectal Cancer",
    image: "https://baconmockup.com/608/400",
    organ: "Colon and Rectum",
  },
  {
    name: "Endometrial Cancer",
    image: "https://baconmockup.com/609/400",
    organ: "Endometrium",
  },
  {
    name: "Esophageal Cancer",
    image: "https://baconmockup.com/610/400",
    organ: "Esophagus",
  },
  {
    name: "Eye Cancer",
    image: "https://baconmockup.com/611/400",
    organ: "Eye",
  },
  {
    name: "Gallbladder Cancer",
    image: "https://baconmockup.com/612/400",
    organ: "Gallbladder",
  },
  {
    name: "Gastric Cancer",
    image: "https://baconmockup.com/613/400",
    organ: "Stomach",
  },
  {
    name: "Head and Neck Cancer",
    image: "https://baconmockup.com/614/400",
    organ: "Head and Neck",
  },
  {
    name: "Hodgkin Lymphoma",
    image: "https://baconmockup.com/615/400",
    organ: "Lymphatic System",
  },
  {
    name: "Kidney Cancer",
    image: "https://baconmockup.com/616/400",
    organ: "Kidneys",
  },
  {
    name: "Laryngeal Cancer",
    image: "https://baconmockup.com/617/400",
    organ: "Larynx",
  },
  {
    name: "Leukemia",
    image: "https://baconmockup.com/618/400",
    organ: "Blood and Bone Marrow",
  },
  {
    name: "Liver Cancer",
    image: "https://baconmockup.com/619/400",
    organ: "Liver",
  },
  {
    name: "Lung Cancer",
    image: "https://baconmockup.com/620/400",
    organ: "Lungs",
  },
  { name: "Melanoma", image: "https://baconmockup.com/621/400", organ: "Skin" },
  {
    name: "Mesothelioma",
    image: "https://baconmockup.com/622/400",
    organ: "Mesothelium",
  },
  {
    name: "Multiple Myeloma",
    image: "https://baconmockup.com/623/400",
    organ: "Bone Marrow",
  },
  {
    name: "Neuroblastoma",
    image: "https://baconmockup.com/624/400",
    organ: "Adrenal Glands",
  },
  {
    name: "Non-Hodgkin Lymphoma",
    image: "https://baconmockup.com/625/400",
    organ: "Lymphatic System",
  },
  {
    name: "Oral Cancer",
    image: "https://baconmockup.com/626/400",
    organ: "Mouth",
  },
  {
    name: "Ovarian Cancer",
    image: "https://baconmockup.com/627/400",
    organ: "Ovaries",
  },
  {
    name: "Pancreatic Cancer",
    image: "https://baconmockup.com/628/400",
    organ: "Pancreas",
  },
  {
    name: "Penile Cancer",
    image: "https://baconmockup.com/629/400",
    organ: "Penis",
  },
  {
    name: "Prostate Cancer",
    image: "https://baconmockup.com/630/400",
    organ: "Prostate",
  },
  {
    name: "Rectal Cancer",
    image: "https://baconmockup.com/631/400",
    organ: "Rectum",
  },
  {
    name: "Sarcoma",
    image: "https://baconmockup.com/632/400",
    organ: "Connective Tissues",
  },
  {
    name: "Skin Cancer",
    image: "https://baconmockup.com/633/400",
    organ: "Skin",
  },
  {
    name: "Small Intestine Cancer",
    image: "https://baconmockup.com/634/400",
    organ: "Small Intestine",
  },
  {
    name: "Soft Tissue Sarcoma",
    image: "https://baconmockup.com/635/400",
    organ: "Soft Tissues",
  },
  {
    name: "Stomach Cancer",
    image: "https://baconmockup.com/636/400",
    organ: "Stomach",
  },
  {
    name: "Testicular Cancer",
    image: "https://baconmockup.com/637/400",
    organ: "Testicles",
  },
  {
    name: "Throat Cancer",
    image: "https://baconmockup.com/638/400",
    organ: "Throat",
  },
  {
    name: "Thyroid Cancer",
    image: "https://baconmockup.com/639/400",
    organ: "Thyroid Gland",
  },
  {
    name: "Uterine Cancer",
    image: "https://baconmockup.com/640/400",
    organ: "Uterus",
  },
  {
    name: "Vaginal Cancer",
    image: "https://baconmockup.com/641/400",
    organ: "Vagina",
  },
  {
    name: "Vulvar Cancer",
    image: "https://baconmockup.com/642/400",
    organ: "Vulva",
  },
];

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

function Page() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all"); 
  const top = 5;

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

  const matchingCancerTypes =
    query === "" ? [] : cancerTypes.filter(filterCancerTypes).slice(0, top);

  function clear() {
    setQuery("");
  }

  return (
    <div className="px-32 pt-16">
      <div className="font text-center">
        <div className="font-thin text-4xl">
          Find Your
        </div >
           <span className='font-light text-7xl text-slate-500'>            Cancer Treatment</span>
      </div>

      <section className="mt-16 w-[75%] border-2 border-gray-400 bg-slate-500 text-white rounded-lg overflow-hidden mx-auto">
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
            className={`self-center hover:cursor-pointer ${
              filter === "all" ? "font-bold text-gray-800" : ""
            }`}
            onClick={() => setFilter("all")}
          >
              All
          </div>
          <div
            className={`self-center hover:cursor-pointer ${
              filter === "name" ? "font-bold text-gray-800" : ""
            }`}
            onClick={() => setFilter("name")}
          >
            Name
          </div>
          <div
            className={`self-center hover:cursor-pointer ${
              filter === "organ" ? "font-bold text-gray-800" : ""
            }`}
            onClick={() => setFilter("organ")}
          >
            Organs
          </div>
        </div>
        <Suggestions {...{ matchingCancerTypes, query, filter }} />
      </section>
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
          <div
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
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Page;
