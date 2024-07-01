"use client";

import React, { useEffect, useRef, useState } from "react";
import WheelCarousel from "@/components/custom/wheelCarousel";
import { AnimatedBeamMultipleOutputDemo } from "../AnimatedBeam";
import useMouseHover from "@/lib/useMouseHover";
import { AnimatePresence, motion } from "framer-motion";

function MutationSection() {
  const interval = useRef<NodeJS.Timeout | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isHovered = useMouseHover(ref);
  const cancers = [
    {
      name: "Lung Cancer",
      dataPoints: [
        "PDL1",
        "EGFR",
        "KRAS",
        "ALK",
        "ERBB2",
        "BRAF",
        "PIK3CA",
        "MET",
      ],
    },
    {
      name: "Breast Cancer",
      dataPoints: [
        "BRCA1",
        "BRCA2",
        "HER2",
        "PIK3CA",
        "TP53",
        "ESR1",
        "AKT1",
        "GATA3",
      ],
    },
    {
      name: "Colorectal Cancer",
      dataPoints: [
        "KRAS",
        "NRAS",
        "BRAF",
        "PIK3CA",
        "TP53",
        "APC",
        "SMAD4",
        "FBXW7",
      ],
    },
    {
      name: "Prostate Cancer",
      dataPoints: [
        "AR",
        "TP53",
        "PTEN",
        "RB1",
        "SPOP",
        "FOXA1",
        "NKX3-1",
        "ATM",
      ],
    },
    {
      name: "Pancreatic Cancer",
      dataPoints: [
        "KRAS",
        "TP53",
        "CDKN2A",
        "SMAD4",
        "BRCA2",
        "PALB2",
        "ATM",
        "ARID1A",
      ],
    },
    {
      name: "Melanoma",
      dataPoints: [
        "BRAF",
        "NRAS",
        "KIT",
        "TP53",
        "PTEN",
        "CDKN2A",
        "GNAQ",
        "GNA11",
      ],
    },
    {
      name: "Ovarian Cancer",
      dataPoints: [
        "BRCA1",
        "BRCA2",
        "TP53",
        "PIK3CA",
        "KRAS",
        "NRAS",
        "BRAF",
        "ERBB2",
      ],
    },
    {
      name: "Bladder Cancer",
      dataPoints: [
        "FGFR3",
        "TP53",
        "RB1",
        "PIK3CA",
        "ERBB2",
        "KRAS",
        "NRAS",
        "ARID1A",
      ],
    },
    {
      name: "Liver Cancer",
      dataPoints: [
        "TP53",
        "CTNNB1",
        "AXIN1",
        "TERT",
        "ARID1A",
        "RB1",
        "PIK3CA",
        "CDKN2A",
      ],
    },
    {
      name: "Esophageal Cancer",
      dataPoints: [
        "TP53",
        "KRAS",
        "PIK3CA",
        "NRAS",
        "APC",
        "ERBB2",
        "SMAD4",
        "NOTCH1",
      ],
    },
  ];

  const [selectedCancer, setSelectedCancer] = useState(0);
  const { name, dataPoints } = cancers[selectedCancer];

  useEffect(() => {
    if (interval.current) {
      clearInterval(interval.current);
    }
    if (!isHovered) {
      interval.current = setInterval(() => {
        setSelectedCancer((prev) => (prev + 1) % cancers.length);
      }, 1000);
    }
    return () => {
      if (interval.current) {
        clearInterval(interval.current);
      }
    };
  }, [isHovered]);

  return (
    <div
      ref={ref}
      className="flex gap-16 p-16 flex-col lg:flex-row items-stretch rounded-2xl bg-neutral-500 overflow-hidden"
    >
      <WheelCarousel
        className="lg:justify-between lg:w-1/3 w-full"
        selectedCancer={name}
        setSelectedCancer={(cancer) => {
          const index = cancers.findIndex((c) => c.name === cancer);
          if (index !== -1) {
            setSelectedCancer(index);
          }
        }}
      />
      <div className=" lg:w-2/3 w-full lg:self-stretch flex flex-col relative overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={selectedCancer}
            initial={{
              transform: "translateY(100%)",
            }}
            animate={{
              transform: "translateY(0%)",
            }}
            exit={{
              transform: "translateY(-100%)",
            }}
            className=""
          >
            <AnimatedBeamMultipleOutputDemo className="" dataPoints={dataPoints} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default MutationSection;
