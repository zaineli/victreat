"use client";
import { GiSelfLove } from "react-icons/gi";
import React, { useState, useEffect, useRef } from "react";

const cancers = [
  {
    id: 1,
    stage: 1,
    mutation: 1,
    name: "Lung Cancer",
    img:"https://picsum.photos/200/300",
    "success rate": 0.5,
    cost: 1000,
    "2nd mutations": [
      {
        mutation: 2,
        "success rate": 0.3,
        cost: 2000,
      },
      {
        mutation: 3,
        "success rate": 0.2,
        cost: 3000,
      },
    ],
  },
  {
    id: 2,
    stage: 2,
    mutation: 4,
    name: "Breast Cancer",
    img: "https://picsum.photos/200/300",
    "success rate": 0.6,
    cost: 1500,
    "2nd mutations": [
      {
        mutation: 5,
        "success rate": 0.4,
        cost: 2500,
      },
      {
        mutation: 6,
        "success rate": 0.25,
        cost: 3500,
      },
    ],
  },
  {
    id: 3,
    stage: 1,
    mutation: 7,
    name: "Prostate Cancer",
    "success rate": 0.55,
    img: "https://picsum.photos/200/300",
    cost: 1200,
    "2nd mutations": [
      {
        mutation: 8,
        "success rate": 0.35,
        cost: 2200,
      },
      {
        mutation: 9,
        "success rate": 0.15,
        cost: 3200,
      },
    ],
  },
  {
    id: 4,
    stage: 3,
    mutation: 10,
    name: "Colon Cancer",
    "success rate": 0.45,
    img: "https://picsum.photos/200/300",

    cost: 1800,
    "2nd mutations": [
      {
        mutation: 11,
        "success rate": 0.25,
        cost: 2800,
      },
      {
        mutation: 12,
        "success rate": 0.1,
        cost: 3800,
      },
    ],
  },
  {
    id: 5,
    stage: 2,
    mutation: 13,
    name: "Skin Cancer",
    img: "https://picsum.photos/200/300",
    "success rate": 0.65,
    cost: 1100,
    "2nd mutations": [
      {
        mutation: 14,
        "success rate": 0.45,
        cost: 2100,
      },
      {
        mutation: 15,
        "success rate": 0.2,
        cost: 3100,
      },
    ],
  },
  {
    id: 6,
    stage: 1,
    mutation: 16,
    name: "Ovarian Cancer",
    img: "https://picsum.photos/200/300",
    "success rate": 0.5,
    cost: 1400,
    "2nd mutations": [
      {
        mutation: 17,
        "success rate": 0.3,
        cost: 2400,
      },
      {
        mutation: 18,
        "success rate": 0.2,
        cost: 3400,
      },
    ],
  },
  {
    id: 7,
    stage: 3,
    mutation: 19,
    name: "Pancreatic Cancer",
    "success rate": 0.4,
    img:"https://baconmockup.com/200/300",
    cost: 1600,
    "2nd mutations": [
      {
        mutation: 20,
        "success rate": 0.2,
        cost: 2600,
      },
      {
        mutation: 21,
        "success rate": 0.1,
        cost: 3600,
      },
    ],
  },
];

function NestedCarousel({ secondMutations }) {
  const [index, setIndex] = useState(0);
  const scrollableDivRef = useRef(null);
  const intervalRef = useRef(null);
  const [stopped, setStopped] = useState(false);

  useEffect(() => {
    if (!intervalRef.current && !stopped) {
      intervalRef.current = setInterval(() => {
        setIndex((i) => (i + 1) % secondMutations.length);
      }, 3000);
    }

    if (stopped && intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    if (scrollableDivRef.current) {
      const parent = scrollableDivRef.current;
      const parentLeft = parent.getBoundingClientRect().width;
      parent.style.translate = `${-parentLeft * index}px`;
    }

    return () => {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    };
  }, [index, stopped, secondMutations.length]);

  return (
    <div className="overflow-hidden h-full  flex-1  rounded-r-xl ">
<div className="w-full h-full flex transition-all duration-900" ref={scrollableDivRef}>
  {secondMutations.map((mutation, i) => (
    <div key={i} className="w-full flex-none relative  bg-gray-100 rounded-r-xl p-4">
      <div
        onMouseEnter={() => setStopped(true)}
        onMouseLeave={() => setStopped(false)}
        className="hover:opacity-70 transition-opacity"
      >
        <div className="flex flex-col items-start justify-between gap-4">
        <GiSelfLove />
          <h1 className="font-semibold text-md md:text-xs">Mutation: {mutation.mutation}</h1>
        </div>  
        <div className="flex flex-col items-start justify-between">
          <div className=" text-black text-lg font-normal  ">
            ${mutation.cost}
          </div>
          <p className="text-3xl md:text-lg text-black font-normal rounded">{(mutation["success rate"] * 100)}%</p>
            </div>
      </div>
    </div>
  ))}
</div>


    </div>
  );
}

function Carousel() {
  const scrollableDivRef = useRef(null);
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);
  const [stopped, setStopped] = useState(false);

  useEffect(() => {
    if (!intervalRef.current && !stopped) {
      intervalRef.current = setInterval(() => {
        setIndex((i) => (i + 1) % cancers.length);
      }, 3000);
    }

    if (stopped && intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    if (scrollableDivRef.current) {
      const parent = scrollableDivRef.current;
      const parentLeft = parent.getBoundingClientRect().width;
      parent.style.translate = `${-parentLeft * index}px`;
    }

    return () => {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    };
  }, [index, stopped]);

  const currentCancer = cancers[index];

  return (
    <div className="flex rounded-lg h-full gap-1  ">
      <div className="flex-[3_3_0] max-h-full overflow-hidden rounded-l-xl overflow-hidden ">
      <div className="flex w-full transition-all duration-900" ref={scrollableDivRef}>
  {cancers.map((cancer, i) => (
    <div key={cancer.id} className="w-full flex-none relative bg-white rounded-l-lg shadow-md p-4">
      <div
        onMouseEnter={() => setStopped(true)}
        onMouseLeave={() => setStopped(false)}
        className="hover:opacity-70 transition-opacity"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src={cancer.img} alt="Cancer" className="w-12 h-12 rounded-full mr-3" />
            <div>
              <h1 className="font-bold text-md md:text-xl">{cancer.name}</h1>
              <p className="text-sm md:text-base">Stage: {cancer.stage}</p>
              <p className="text-sm md:text-base">Mutation: {cancer.mutation}</p>
            </div>
          </div>
          <div className="bg-yellow-300 text-black text-xs font-bold py-1 px-2 rounded">
            Cost: ${cancer.cost}
          </div>
        </div>
        <div className="flex items-center justify-end mt-4">
          <p className="text-lg md:text-3xl font-semibold self-end">{(cancer["success rate"] * 100).toFixed(1)}%</p>
        </div>
        </div>
      </div>
  ))}
</div>

      </div>
      <NestedCarousel secondMutations={currentCancer["2nd mutations"]} />
    </div>
  );
}

export default Carousel;
