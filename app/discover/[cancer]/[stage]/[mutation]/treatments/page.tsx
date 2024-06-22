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

function TreatmentsPage({ params }: { params: { cancer: string, stage: string, mutation: string } }) {
  const cancerText = params.cancer.split('-').map((c) => c.charAt(0).toUpperCase() + c.slice(1)).join(' ');
  const stageText = "Stage " + stages[parseInt(params.stage)].stage;
  const mutationText = mutations[parseInt(params.mutation)].name;

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


      <div className="grid grid-cols-2 dark my-16  gap-16">
        {treatments.map((treatment) => <Card>
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
        </Card>)}
      </div>

    </div>
  )
}

export default TreatmentsPage