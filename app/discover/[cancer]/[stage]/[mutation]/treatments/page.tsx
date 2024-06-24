'use client';

import { IoChevronUp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { LuFilter } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { mutations, stages, treatments } from '@/app/discover/data';
import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

function TreatmentsPage({ params }: { params: { cancer: string, stage: string, mutation: string } }) {
  const [filtersOpen, setFiltersOpen] = React.useState(true);

  const cancerText = params.cancer.split('-').map((c) => c.charAt(0).toUpperCase() + c.slice(1)).join(' ');
  const stageText = "Stage " + stages[parseInt(params.stage)].stage;
  const mutationText = mutations[parseInt(params.mutation)].name;


  const [filters, setFilters] = React.useState({
    preffered: true,
    alternative: true,
    experimental: true,
    query: ""
  });

  console.log(filters.query);

  const filteredTreatments = treatments.filter((treatment) => {
    if (!filters.preffered && treatment.type === "Preffered") return false;
    if (!filters.alternative && treatment.type === "Alternative") return false;
    if (!filters.experimental && treatment.type === "Exlperimental") return false;
    if (filters.query && !treatment.name.toLowerCase().includes(filters.query.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="px-32 py-20">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/discover/">{cancerText}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={`/discover/${params.cancer}`}>{stageText}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href={`/discover/${params.cancer}`}>{mutationText}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Treatments</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <h1 className='text-4xl font-bold text-center my-8'>Treatments</h1>
      <p>Following treatments are available for {stageText} {cancerText} with {mutationText}</p>

      <div className={cn("flex items-center border-2 border-neutral-600 px-4 py-2  rounded-t-xl transition-all mt-4",
        filtersOpen ? "rounded-b-none" : "rounded-b-xl"
      )}>
        <CiSearch className="text-2xl" />
        <input placeholder="Search treatments " className="flex-1 outline-none px-4"
          value={filters.query} onChange={(e) => setFilters({ ...filters, query: e.target.value })}
        />
        <Button variant="outline" onClick={() => setFilters({ ...filters, query: "" })} className={cn('opacity-0 text-xl transition-all duration-200 ', filters.query ? "opacity-100" : 'pointer-events-none')}><IoMdClose /></Button>
        {/* <Button variant="outline" className="gap-2 items-center"
          onClick={() => setFiltersOpen(!filtersOpen)}
        ><LuFilter />Filters<IoChevronUp className={cn("transition-all", filtersOpen ? "" : "rotate-180")} /></Button> */}
      </div>
      <div className={
        cn("flex flex-col gap-3 dark bg-black text-white p-4 rounded-b-xl box-border overflow-hidden transition-all", filtersOpen ? "" : "h-0 max-h-0")
      }>
        <div className="flex items-center gap-4"><Switch onCheckedChange={(checked) => setFilters(
          { ...filters, preffered: checked }
        )} checked={filters.preffered} /> Show Preffered Treatments</div>
        <div className="flex items-center gap-4"><Switch onCheckedChange={(checked) => setFilters(
          { ...filters, alternative: checked }
        )} checked={filters.alternative} /> Show Alternative Treatments</div>
        <div className="flex items-center gap-4"><Switch onCheckedChange={(checked) => setFilters(
          { ...filters, experimental: checked }
        )} checked={filters.experimental} /> Show Experimental Treatments</div>
      </div>
      <div className="grid grid-cols-2 dark my-16  gap-16">
        {filteredTreatments.length > 0 ? filteredTreatments.map((treatment) => <Card>
          <CardHeader>
            <CardTitle className="flex justify-between items-center">{treatment.name}<Badge variant={
              ({ "Preffered": 'default', "Alternative": "secondary", "Exlperimental": "destructive" } as const)[treatment.type]
            }>{treatment.type}</Badge></CardTitle>
            <CardDescription>{treatment.description}</CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-end">
            {/* <Button variant="osutline">Cancel</Button> */}
            <Button >Learn More</Button>
          </CardFooter>
        </Card>) : <p className="text-center italic col-span-2">No treatments found</p>}
      </div>

    </div>
  )
}

export default TreatmentsPage