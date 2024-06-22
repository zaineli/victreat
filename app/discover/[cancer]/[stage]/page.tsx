// TODO: make only the search bar client side
'use client';

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
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import React, { useEffect, useState } from 'react'
import { TiTick } from "react-icons/ti";
import { Button } from '@/components/ui/button';
import { mutations, stages } from "../../data";
import Link from "next/link";


function MutationPage({ params }: { params: { cancer: string, stage: string } }) {
  const { cancer, stage } = params;
  const cancerText = cancer.split('-').map((c) => c.charAt(0).toUpperCase() + c.slice(1)).join(' ');
  const stageText = "Stage " + stages[parseInt(stage)].stage;

  return (
    <div className="px-32 pt-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/discover/">{cancerText}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={`/discover/${cancer}`}>{stageText}</BreadcrumbLink>
            <BreadcrumbPage>{ }</BreadcrumbPage>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Select Mutation</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className=' py-20 flex h-[calc(100vh-4rem)] flex-col'>
        <h1 className='text-6xl font-normal text-center'>What is your mutation of {cancerText}?</h1>
        <div className="flex flex-1 flex-col w-full overflow-hidden justify-center gap-32">
          <section className='mt-16 gap-16 flex justify-between mx-auto w-full'>
            <Command className="rounded-lg border shadow-md">
              <CommandInput placeholder="Search Mutations..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Mutations">
                  {
                    mutations.map((mutation) =>
                      <CommandItem>
                        <span className="ml-2">{mutation.name}</span>
                      </CommandItem>)
                  }

                </CommandGroup>
              </CommandList>
            </Command>
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

export default MutationPage;