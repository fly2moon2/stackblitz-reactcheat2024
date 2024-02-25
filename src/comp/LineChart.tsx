// react d3.js chart gallery
// https://www.react-graph-gallery.com/line-chart
//

import { useEffect, useMemo, useRef } from 'react';
import * as d3 from 'd3';

const MARGIN = { top: 30, right: 30, bottom: 50, left: 50 };

type DataPoint = { x: number; y: number };
type LineChartProps = {
  width: number;
  height: number;
  data: DataPoint[];
};

export const LineChart = ({ width, height, data }: LineChartProps) => {
  // bounds = area inside the graph axis = calculated by substracting the margins
  const axesRef = useRef(null);
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  // Y axis
  const [min, max] = d3.extent(data, (d) => d.y);
  const yScale = useMemo(() => {
    return (
      d3
        .scaleLinear()
        .domain([0, max || 0])
        //.domain([min||0, max || 0])
        .range([boundsHeight, 0])
    );
  }, [data, height]);

  // X axis
  const [xMin, xMax] = d3.extent(data, (d) => d.x);
  const xScale = useMemo(() => {
    return (
      d3
        .scaleLinear()
        .domain([0, xMax || 0])
        //.domain([xMin||0, xMax || 0])
        .range([0, boundsWidth])
    );
  }, [data, width]);

  // Render the X and Y axis using d3.js, not react
  useEffect(() => {
    const svgElement = d3.select(axesRef.current);
    svgElement.selectAll('*').remove();
    const xAxisGenerator = d3.axisBottom(xScale);
    svgElement
      .append('g')
      .attr('transform', 'translate(0,' + boundsHeight + ')')
      .call(xAxisGenerator);

    const yAxisGenerator = d3.axisLeft(yScale);
    svgElement.append('g').call(yAxisGenerator);
  }, [xScale, yScale, boundsHeight]);

  // Build the line
  const lineBuilder = d3
    .line<DataPoint>()
    .x((d) => xScale(d.x))
    .y((d) => yScale(d.y));
  const linePath = lineBuilder(data);
  if (!linePath) {
    return null;
  }

  //const viewBoxClause = '0  0 ' + {width} + ' ' + {height};
  //const viewBoxClause = '0 0 400 300';
  //var viewBoxClause = '0 0 400 '
  //viewBoxClause +={height}.toString();
  //const viewBoxClause = '0  0 ' + {width}.toString() + ' ' + {height}.toString();

  return (
    <div>
      {/* responsive with viewBox - keeping aspect ratio */}
      {/*<svg width={width} height={height}>*/}
      {/*<svg viewBox="0 0 {width} {height}">*/}
      <svg viewBox={'0 0 ' + width.toString() + ' ' + height.toString()}>
        {/*<svg viewBox={viewBoxClause}>*/}
        <g
          width={boundsWidth}
          height={boundsHeight}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(',')})`}
        >
          <path
            d={linePath}
            opacity={1}
            stroke="#9a6fb0"
            fill="none"
            strokeWidth={2}
          />
        </g>
        <g
          width={boundsWidth}
          height={boundsHeight}
          ref={axesRef}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(',')})`}
        />
        {/*<g fill="#636466" style={{'font-size':'16px', 'font-family':'monospace'}}>
          <text x="10" y="20">line</text>
          <text x="50" y="15" style={{'text-anchor':'middle'}}>circle</text>
        </g>*/}
      </svg>
    </div>
  );
};
