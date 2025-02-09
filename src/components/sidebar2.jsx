import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ show }) => {
  const navigate = useNavigate();

  const handleAlgorithmSelect = (algorithm) => {
    navigate(`/${algorithm}`);
  };

  return (
    <div
      className={`fixed left-0 top-0 h-full bg-gray-800 text-white transition-transform transform w-64 ${
        show ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="p-4 pt-20">
        <div className="space-y-4">
          <button
            onClick={() => handleAlgorithmSelect("bubbleSort")}
            className="px-4 py-2 bg-transparent text-white rounded-lg w-full"
          >
            Bubble Sort
          </button>
          <button
            onClick={() => handleAlgorithmSelect("selectionSort")}
            className="px-4 py-2 bg-transparent text-white rounded-lg w-full"
          >
            Selection Sort
          </button>
          <button
            onClick={() => handleAlgorithmSelect("insertionSort")}
            className="px-4 py-2 bg-transparent text-white rounded-lg w-full"
          >
            Insertion Sort
          </button>
          <button
            onClick={() => handleAlgorithmSelect("mergeSort")}
            className="px-4 py-2 bg-transparent text-white rounded-lg w-full"
          >
            Merge Sort
          </button>
          <button
            onClick={() => handleAlgorithmSelect("quickSort")}
            className="px-4 py-2 bg-transparent text-white rounded-lg w-full"
          >
            Quick Sort
          </button>
          <button
            onClick={() => handleAlgorithmSelect("heapSort")}
            className="px-4 py-2 bg-transparent text-white rounded-lg w-full"
          >
            Heap Sort
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
