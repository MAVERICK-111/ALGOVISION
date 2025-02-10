import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Controls from "../components/controls";
import { motion } from "motion/react";

const AlgorithmPage = ({ showSidebar }) => {
  const { algorithm } = useParams();
  const [selectedAlgorithm, setSelectedAlgorithm] = useState(algorithm || 'bubbleSort');

  useEffect(() => {
    setSelectedAlgorithm(algorithm);
  }, [algorithm]);

  const algorithmsInfo = {
    bubbleSort: {
      title: "Bubble Sort",
      description: "Bubble Sort is a simple sorting algorithm...",
    },
    selectionSort: {
      title: "Selection Sort",
      description: "Selection Sort is an in-place comparison sorting algorithm...",
    },
    insertionSort: {
      title: "Insertion Sort",
      description: "Insertion Sort builds the sorted array one element at a time...",
    },
    mergeSort: {
      title: "Merge Sort",
      description: "Merge Sort is a divide and conquer algorithm...",
    },
    quickSort: {
      title: "Quick Sort",
      description: "Quick Sort works by partitioning the array...",
    },
    heapSort: {
      title: "Heap Sort",
      description: "Heap Sort uses a binary heap data structure...",
    },
  };
  
  const renderAlgorithmInfo = () => {
    const algorithmData = algorithmsInfo[selectedAlgorithm];
    if(algorithmData) {
      return (
        <div>
          <p className="mt-2">{algorithmData.description}</p>
        </div>
      );
    }
    return <p>Algorithm not found.</p>;
  };

  const contentClass = showSidebar
    ? "transition-all duration-300 ease-in-out transform md:ml-64 md:max-w-[calc(100%-16rem)]"
    : "transition-all duration-300 ease-in-out md:max-w-full";

  return (
    <div className={`p-4 mt-3 ${contentClass}`}>
      <motion.h1
        className="mt-16 sm:mt-2 text-3xl font-bold text-center"
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 25 }}
      >
        {algorithmsInfo[selectedAlgorithm].title}
      </motion.h1>
      <div className="mt-4 sm`:mt-7 grid grid-cols-1 md:grid-cols-2 gap-4">
        <motion.div 
          className="bg-white p-6 rounded-lg shadow-lg"
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 25 }}
        >
          <Controls algorithm={selectedAlgorithm} />
        </motion.div>
        <motion.div 
          className="bg-white p-6 rounded-lg shadow-lg"
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 25 }}
        >
          {renderAlgorithmInfo()}
        </motion.div>
      </div>
    </div>
  );
};

export default AlgorithmPage;