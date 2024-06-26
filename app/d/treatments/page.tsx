'use client';

import React, { useState, useEffect } from 'react';
import { CiSearch } from 'react-icons/ci';
import { treatments } from '@/app/discover/data';
import { Badge } from '@/components/ui/badge';
import { Card, CardDescription, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

function TreatmentsPage({ searchParams }) {
  const [filters, setFilters] = useState({
    preferred: true,
    alternative: true,
    experimental: true,
    query: ''
  });


  const toggleFilter = (filter: "preferred" | "alternative" | "experimental" | "query") => {
    setFilters({ ...filters, [filter]: !filters[filter] });
  };

  const handleInputChange = (e) => {
    setFilters({ ...filters, query: e.target.value });
  };

  const filteredTreatments = treatments.filter((treatment) => {
    // Check if treatment matches any active filter or search query
    if (
      (filters.preferred && treatment.type === "Preffered") ||
      (filters.alternative && treatment.type === 'Alternative') ||
      (filters.experimental && treatment.type === "Experimental")
    ) {
      if (filters.query && !treatment.name.toLowerCase().includes(filters.query.toLowerCase())) {
        return false; // Filter by search query
      }
      return true; // Include treatment
    }
    return false; // Exclude treatment if no filters match
  });

  console.log(filteredTreatments, filters, treatments)

  return (
    <div className="px-32 py-20">
      <h1 className="text-4xl font-bold text-center my-8">Treatments</h1>

      {/* Breadcrumbs */}
      <nav className="text-gray-600 mb-4 ml-4">
        <ol className="list-none p-0 inline-flex">
          <li className="flex items-center">
            <span className="text-sm font-bold">Stage:</span>
            <span className="ml-2">{searchParams.stage}</span>
          </li>
          <li className="flex items-center ml-4">
            <span className="text-sm font-bold">Cancer:</span>
            <span className="ml-2">{searchParams.cancer}</span>
          </li>
          <li className="flex items-center ml-4">
            <span className="text-sm font-bold">Mutation:</span>
            <span className="ml-2">{searchParams.mutation}</span>
          </li>
        </ol>
      </nav>

      {/* Filter and Search */}
      <div className="flex items-center border-2 border-neutral-600 px-4 py-2 rounded-xl transition-all mt-4">
        <CiSearch className="text-2xl" />
        <input
          placeholder="Search treatments"
          className="flex-1 outline-none px-4"
          value={filters.query}
          onChange={handleInputChange}
        />
        <div className="flex gap-2">
          <Badge
            className={`cursor-pointer ${filters.preferred ? '' : ''}`}
            variant={cn(!filters.preferred ? 'outline' : "")}
            onClick={() => toggleFilter('preferred')}
          >
            Preferred
          </Badge>
          <Badge
            className={`cursor-pointer ${filters.alternative ? '' : ''}`}
            variant={cn(!filters.alternative ? 'outline' : "")}
            onClick={() => toggleFilter('alternative')}
          >
            Alternative
          </Badge>
          <Badge
            className={`cursor-pointer ${filters.experimental ? '' : ''}`}
            variant={cn(!filters.experimental ? 'outline' : "")}
            onClick={() => toggleFilter('experimental')}
          >
            Experimental
          </Badge>
        </div>
      </div>

      {/* Treatment Cards */}
      <div className="grid grid-cols-2  my-16 gap-16">
        {filteredTreatments.length > 0 ? (
          filteredTreatments.map((treatment) => (
            <Card key={treatment.id}>
              <CardHeader>
                <div className="flex justify-between items-center">
                  {treatment.name}
                  <Badge
                    className={cn(
                      {
                        'bg-green-400': treatment.type === "Preffered",
                        'bg-blue-400': treatment.type === "Alternative",
                        'bg-red-400': treatment.type === "Experimental"
                      }
                    )}
                  >
                    {treatment.type}
                  </Badge>
                </div>
                <CardDescription>{treatment.description}</CardDescription>
              </CardHeader>
              <CardFooter className="flex justify-end">
                <Button size={'sm'} variant={'secondary'}>Learn More</Button>
              </CardFooter>
            </Card>
          ))
        ) : (
          <p className="text-center italic col-span-2">No treatments found</p>
        )}
      </div>
    </div>
  );
}

export default TreatmentsPage;