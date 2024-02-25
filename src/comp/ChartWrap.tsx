import React, {useState} from 'react';
import { LineChart } from '../comp/LineChart';

type ChartWrapProps = {  
  data: DataPoint[];
};

const maxWidthAttr='600px';
const dispAttr='flex';

export const ChartWrap: React.FC = ({data}: ChartWrapProps) => {  
  return (
    /* style margin : 0 auto to centre the content */
    <div style={{'width': '100%','max-width' : maxWidthAttr, 'margin' : '0 auto' }}>
    {/*<div style={{ display: dispAttr }}>*/}
        <LineChart data={data} width={200} height={200} />
        <LineChart data={data} width={200} height={200} />
    </div>  
  )
};