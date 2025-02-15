import React from "react";
import { BarChart as RechartBarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const BarChart = ({ array, delay, highlightedBars }) => {
  if (!Array.isArray(array) || array.length === 0) {
    return null;
  }
  
  const data = array.map((value,index) => ({
    name: value,
    value: value,
  }))

  return (
    <div className="flex justify-center mb-4 "style={{ height: 'auto' }}>
      <ResponsiveContainer width="100%" height={300}>
        <RechartBarChart data={data} margin={{ top: 10, right: 30, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#4B9CD3" animationDuration={delay} />
        </RechartBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChart;