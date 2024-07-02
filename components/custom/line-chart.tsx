import React from 'react';
import * as d3 from 'd3';
import { abort } from 'process';
interface Data {
  year: number;
  cancer: number;
}




const LineChart: React.FC<{ data: Data[] }> = ({ data }) => {
    if (!data || data.length === 0) {
      return <div>No data available</div>;
    }
    
    const scale = 0.5;
    const position = 0;

    const width = 800;
    const height = 400;
    const margin = { top: 20, right: 30, bottom: 30, left: 60 };
  
    // Calculate x and y scales
    const xScale = React.useMemo(
      () =>
        d3
          .scaleLinear()
          .domain([d3.min(data, d => d.year)!, d3.max(data, d => d.year)!])
          .range([margin.left, width - margin.right]),
      [data]
    );
  
    const yScale = React.useMemo(
      () =>
        d3
          .scaleLinear()
          .domain([0, d3.max(data, d => d.cancer)!])
          .nice()
          .range([height - margin.bottom, margin.top]),
      [data]
    );
  
    // Generate path data
    const linePath = React.useMemo(() => {
      const lineGenerator = d3
        .line<Data>()
        .x(d => xScale(d.year))
        .y(d => yScale(d.cancer));
  
      return lineGenerator(data)!;
    }, [data, xScale, yScale]);
  
    return (
      <svg width={width} height={height}>
        <g>
          <path
            d={linePath}
            fill="none"
            stroke="steelblue"
            strokeWidth={2}
            strokeLinejoin="round"
            strokeLinecap="round"
            
          />
        </g>
      </svg>
    );
  };
  

export default LineChart;
