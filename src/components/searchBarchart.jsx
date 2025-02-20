import React from "react";
import { BarChart as RechartBarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const BarChart = ({ array, currentIndex, foundIndex, leftIndex, rightIndex, middleIndex }) => {
  if (!Array.isArray(array) || array.length === 0) {
    return null;
  }

  const data = array.map((value, index) => ({
    name: value,
    value: value,
    index: index,
    fill: index === foundIndex ? "#32CD32" : //green
          index === middleIndex ? "#8A2BE2": //purple
          index === currentIndex ? "#FF6347" : //red
          (index === rightIndex || index === leftIndex) ? "#FF4500": //orange
          "#4B9CD3"
  }));

  const maxValue = Math.ceil(Math.max(...array) / 10) * 10;
  
  let xAxisClass = "block";
  if(array.length > 15) xAxisClass = "hidden";
  else if (window.innerWidth >= 768) xAxisClass = "block md:block";
  else if (array.length > 7) xAxisClass = "hidden md:hidden";

  return (
    <div className="flex justify-center items-center mb-4 " style={{ height: 'calc(50vh - 4.5rem)' }}>
      <ResponsiveContainer width="95%">
        <RechartBarChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tickCount={array.length} interval={0} className={xAxisClass}/>
          <YAxis
            width={40}
            domain={[0, maxValue]}
            tickCount={maxValue / 10 + 1}
            tickFormatter={(value) => (value === 0 || value === maxValue ? value.toString() : '')}
          />
          <Tooltip
            formatter={(value, name, props) => [
              `Value: ${value}`,
            ]}
            labelFormatter={(index) => `Index: ${index}`}
          />
          <Bar dataKey="value" fill={(entry) => entry.fill} />
        </RechartBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChart;