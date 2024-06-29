'use client'
import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

type Data = {
  year: number;
  cancer: number;
};

const dataArray: Data[] = [
  { year: 1990, cancer: 33 },
  { year: 1991, cancer: 47 },
  { year: 1992, cancer: 55 },
  { year: 1993, cancer: 110 },
  { year: 1994, cancer: 123 },
  { year: 1995, cancer: 201 },
  { year: 1996, cancer: 316 },
  { year: 1997, cancer: 416 },
  { year: 1998, cancer: 635 },
  { year: 1999, cancer: 806 },
  { year: 2000, cancer: 1006 },
  { year: 2001, cancer: 1047 },
  { year: 2002, cancer: 1298 },
  { year: 2003, cancer: 1608 },
  { year: 2004, cancer: 2025 },
  { year: 2005, cancer: 2372 },
  { year: 2006, cancer: 2808 },
  { year: 2007, cancer: 3090 },
  { year: 2008, cancer: 3318 },
  { year: 2009, cancer: 3536 },
  { year: 2010, cancer: 3606 },
  { year: 2011, cancer: 3772 },
  { year: 2012, cancer: 3876 },
  { year: 2013, cancer: 3917 },
  { year: 2014, cancer: 4417 },
  { year: 2015, cancer: 4876 },
  { year: 2016, cancer: 5328 },
  { year: 2017, cancer: 5630 },
  { year: 2018, cancer: 5983 },
  { year: 2019, cancer: 6214 },
  { year: 2020, cancer: 6439 },
  { year: 2021, cancer: 7427 },
  { year: 2022, cancer: 7117 },
  { year: 2023, cancer: 7155 },
];

const Histogram: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    const width = 800;
    const height = 400;
    const margin = { top: 20, right: 30, bottom: 40, left: 40 };

    // Clear previous content
    svg.selectAll('*').remove();

    // Set up scales
    const x = d3.scaleBand()
      .domain(dataArray.map(d => d.year.toString()))
      .range([margin.left, width - margin.right])
      .padding(0.1);

    const y = d3.scaleLinear()
      .domain([0, d3.max(dataArray, d => d.cancer) as number])
      .nice()
      .range([height - margin.bottom, margin.top]);

    // Create a container for the bars
    const barContainer = svg.append('g');

    barContainer.selectAll('rect')
      .data(dataArray)
      .join('rect')
      .attr('x', d => x(d.year.toString())!)
      .attr('width', x.bandwidth())
      .attr('fill', 'steelblue')
      .attr('y', height - margin.bottom)  // Start from the bottom
      .attr('height', 0)  // Initial height of 0
      .transition()
      .delay((d, i) => i * 100)  // Staggered delay
      .duration(1000)
      .attr('y', d => y(d.cancer))
      .attr('height', d => y(0) - y(d.cancer));

    const line = d3.line<Data>()
      .x(d => x(d.year.toString())! + x.bandwidth() / 2)
      .y(d => y(d.cancer));

    svg.append('path')
      .datum(dataArray)
      .attr('fill', 'none')
      .attr('stroke', 'red')
      .attr('stroke-width', 4)
      .attr('d', line)
      .attr('stroke-dasharray', function () { return this.getTotalLength() })
      .attr('stroke-dashoffset', function () { return this.getTotalLength() })
      .transition()
      .delay(1000 + 100 * dataArray.length)
      .duration(2000)
      .attr('stroke-dashoffset', 0);

    // Add the x-axis
    svg.append('g')
      .attr('transform', `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x).tickFormat(d3.format('d')))
      .selectAll('text')
      .attr('transform', 'rotate(-45)')
      .style('text-anchor', 'end');

    // Add the y-axis
    svg.append('g')
      .attr('transform', `translate(${margin.left},0)`)
      .call(d3.axisLeft(y));

  }, []);

  return <svg ref={svgRef} width={800} height={400}></svg>;
}

function Trials() {
  
  return (
    <Histogram />
  );
}

export default Trials;
