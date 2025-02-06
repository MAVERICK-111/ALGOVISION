import React from "react";

const BarChart = ({ array, delay }) => {
  if (!Array.isArray(array) || array.length === 0) {
    return null;
  }

  return (
    <div className="flex justify-center mb-4 space-x-2">
      {array.map((value, index) => (
        <div
          key={index}
          className="relative"
          style={{
            height: `${value * 10}px`,
            width: "30px",
            marginRight: "2px",
            backgroundColor: "#4B9CD3",
            transition: `all ${delay / 1000}s ease-in-out`,
          }}
        >
          <span
            className="absolute inset-0 flex justify-center items-center text-white font-bold"
            style={{ top: "50%", transform: "translateY(-50%)" }}
          >
            {value}
          </span>
        </div>
      ))}
    </div>
  );
};

export default BarChart;
