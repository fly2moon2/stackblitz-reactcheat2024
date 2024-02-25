import React, { useState } from 'react';
import { BarPlotDatasetTransition } from '../comp/BarPlotDatasetTransition';

type DataPoint = { name: string; value: number };
type BarPlotWrapProps = {
  data1: DataPoint[];
  data2: DataPoint[];
};

const maxWidthAttr = '600px';
const dispAttr = 'flex';

export const BarPlotWrap: React.FC = ({ data1, data2 }: BarPlotWrapProps) => {
  return (
    /* style margin : 0 auto to centre the content */
    <div style={{ width: '100%', 'max-width': maxWidthAttr, margin: '0 auto' }}>
      {/*<div style={{ display: dispAttr }}>*/}
      {/* <BarPlot data1={data1} data2={data1} width={200} height={200} />*/}
      <BarPlotDatasetTransition
        data1={data1}
        data2={data2}
        width={200}
        height={200}
      />
      ;
    </div>
  );
};
