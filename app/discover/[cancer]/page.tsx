
// TODO: make only the search bar client side

'use client';

import React, { useEffect, useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import Link from 'next/link';
import { TiTick } from "react-icons/ti";

function Page({ params }) {
  console.log({ params })

  const stages = [
    {
      stage: 'I',
      description: 'Stage 1 is the earliest stage of cancer. It is usually small and hasn’t spread to other parts of the body. It is often called early-stage cancer.'
    },

    {
      stage: "II",
      description: 'Stage 2 means the cancer has grown, but it is still contained in the organ where it started. It has not spread to other parts of the body.'
    },

    {
      stage: 'III',
      description: 'Stage 3 means the cancer has spread to nearby tissues or lymph nodes. It may have also spread to other parts of the body.'
    },

    {
      stage: "IV",
      description: 'Stage 4 means the cancer has spread to other parts of the body. It is also called advanced or metastatic cancer.'
    }
  ]

  const [stage, setStage] = useState(0);



  return (
    <div className='px-32 py-20 flex h-[calc(100vh-4rem)] flex-col'>
      <h1 className='text-6xl font-normal text-center'>What is your stage of {params.cancer}?</h1>
      <div className="flex flex-1 flex-col w-full overflow-hidden justify-center gap-32">

        <section className='mt-16 gap-16 flex justify-between mx-auto w-full'>
          {stages.map((s, index) => (
            <div onClick={() => setStage(index)} key={index} className={`relative cursor-pointer flex-1 gap-4 aspect-square w-96 flex items-center justify-center ${stage !== index ? "border-4 border-gray-400" : "border-4 border-gray-700"}  rounded-xl`}>
              <h2 className=' font-semibold text-3xl shadow'>Stage {s.stage}</h2>
              <p className='hidden'>{s.description}</p>
              {stage === index &&
                <div className="absolute w-8 h-8 top-0 left-[50%] translate-y-[-50%] translate-x-[-50%] rounded-full bg-gray-700 text-white text-2xl flex justify-center items-center">
                  <TiTick />
                </div>
              }
            </div>
          ))}
        </section>


        <div className="flex justify-center ">
          <button className='bg-gray-700 text-white text-2xl px-8 py-2 rounded-full mx-auto'>
            Continue
          </button>
        </div>
      </div>
    </div>
  )
}

export default Page;