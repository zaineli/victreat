"use client";

import React, { useState, useEffect, useRef } from "react";

const cancers = [
  {
    id: 1,
    stage: 1,
    mutation: 1,
    name: "Lung Cancer",
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
    <div className="overflow-hidden flex-1 max-h-[400px] rounded-lg mt-4">
      <div
        className="w-full flex transition-all duration-900"
        ref={scrollableDivRef}
      >
        {secondMutations.map((mutation, i) => (
          <div
            key={i}
            className="w-full flex-none relative p-4 bg-white rounded-lg shadow-md"
          >
            <h1 className="text-center font-bold text-md md:text-xl">
              Mutation: {mutation.mutation}
            </h1>
            <p className="mt-4 text-sm md:text-base">
              Success Rate: {mutation["success rate"] * 100}%
            </p>
            <p className="text-sm md:text-base">Cost: ${mutation.cost}</p>
          </div>
        ))}
      </div>
      <div className="flex gap-4 justify-center mt-4">
        {secondMutations.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`bg-white transition-all duration-500 h-1 md:h-2 rounded-full cursor-pointer ${
              i === index && !stopped ? "scale-[1.20] carousel-button-load" : ""
            } ${stopped ? "w-1 md:w-2" : "w-8 md:w-16"}`}
          ></button>
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
    <div className="flex w-screen rounded-lg bg-gray-100 p-4">
      <div className="flex-[3_3_0] overflow-hidden ">
        <div
          className=" flex transition-all duration-900"
          ref={scrollableDivRef}
        >
          {cancers.map((cancer, i) => (
            <div
              key={cancer.id}
              className="w-full flex-none relative p-4 bg-white rounded-lg shadow-md m-2"
            >
              <div
                onMouseEnter={() => setStopped(true)}
                onMouseLeave={() => setStopped(false)}
                className=" hover:opacity-70  bg-blacks transition-opacity p-8 md:px-16 py-8"
              >
                <h1 className="text-center font-bold text-md md:text-xl">
                  {cancer.name}
                </h1>
                <p className="mt-4 text-sm md:text-base">
                  Stage: {cancer.stage}
                </p>
                <p className="text-sm md:text-base">
                  Mutation: {cancer.mutation}
                </p>
                <p className="text-sm md:text-base">
                  Success Rate: {cancer["success rate"] * 100}%
                </p>
                <p className="text-sm md:text-base">Cost: ${cancer.cost}</p>
              </div>
              <img
                src={cancer.image}
                alt={cancer.name}
                className="object-cover max-h-[300px] w-full rounded-md"
              />
            </div>
          ))}
        </div>
        <div className="flex gap-4 justify-center mt-4">
          {cancers.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`bg-white transition-all duration-500 h-1 md:h-2 rounded-full cursor-pointer ${
                i === index && !stopped
                  ? "scale-[1.20] carousel-button-load"
                  : ""
              } ${stopped ? "w-1 md:w-2" : "w-8 md:w-16"}`}
            ></button>
          ))}
        </div>
      </div>
      <NestedCarousel secondMutations={currentCancer["2nd mutations"]} />
    </div>
  );
}

export default Carousel;
