import { useState } from "react";
//import { dataNameVal, dataNameVal2 } from '../res/data';
import { BarPlot } from "./BarPlot";

const BUTTONS_HEIGHT = 50;

type DataPoint = { name: string; value: number };
type BarplotDatasetTransitionProps = {
  width: number;
  height: number;
  data1: DataPoint[];
  data2: DataPoint[];
};

const buttonStyle = {
  border: "1px solid #9a6fb0",
  borderRadius: "3px",
  padding: "4px 8px",
  margin: "10px 2px",
  fontSize: 14,
  color: "#9a6fb0",
  opacity: 0.7,
};

export const BarPlotDatasetTransition = ({
  width,
  height,
  data1,
  data2,
}: BarplotDatasetTransitionProps) => {
  const [selectedData, setSelectedData] = useState(data1);

  return (
    <div>
      <div style={{ height: BUTTONS_HEIGHT }}>
        <button style={buttonStyle} onClick={() => setSelectedData(data1)}>
          Data 1
        </button>
        <button style={buttonStyle} onClick={() => setSelectedData(data2)}>
          Data 2
        </button>
      </div>

      <BarPlot
        width={width}
        height={height - BUTTONS_HEIGHT}
        data={selectedData}
      />
    </div>
  );
};
