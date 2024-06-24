
// TODO: make only the search bar client side

'use client';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { TiTick } from "react-icons/ti";
import { Button } from '@/components/ui/button';
import { stages } from "../data";


function Page({ params }: { params: { cancer: string } }) {
  console.log({ params })

  const { cancer } = params;

  const cancerText = cancer.split('-').map((c) => c.charAt(0).toUpperCase() + c.slice(1)).join(' ');

  const [stage, setStage] = useState(0);



  return (
    <div className="px-32 pt-4 h-[calc(100vh-5rem)]">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/discover/">{cancerText}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Cancer Stage</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className=' py-20 flex flex-col'>
        <h1 className='text-6xl font-normal text-center'>What is your stage of {cancerText}?</h1>
        <div className="flex flex-1 flex-col w-full overflow-hidden justify-center gap-32">
          <section className='mt-16 gap-16 flex justify-between mx-auto w-full'>
            {stages.map((s, index) => (
              <div onClick={() => setStage(index)} key={index} className={`relative cursor-pointer flex-1 gap-4 aspect-square w-96 flex items-center justify-center transition-all duration-300 ${stage !== index ? "border-4 border-gray-400" : "border-4 border-gray-700"}  rounded-xl`}>
                <h2 className=' font-semibold text-3xl shadow'>Stage {s.stage}</h2>
                <p className='hidden'>{s.description}</p>
                {stage === index &&
                  <div className="absolute w-8 h-8 top-0 left-[50%] translate-y-[-50%] translate-x-[-50%] rounded-full bg-gray-700 text-white text-2xl flex justify-center items-center tick-animation">
                    <TiTick />
                  </div>
                }
              </div>
            ))}
          </section>
          <div className="flex justify-center gap-2 ">
            <Button className='px-16 rounded-full' variant={'outline'} asChild>
              <Link href={`/discover/${cancer}/${stage}`}>I Don't Know</Link>
            </Button>
            <Button className='px-16 rounded-full' asChild>
              <Link href={`/discover/${cancer}/${stage}`}>Continue</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page;