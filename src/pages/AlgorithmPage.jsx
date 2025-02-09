import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Controls from "../components/controls";

const AlgorithmPage = () => {
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

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center">{algorithmsInfo[selectedAlgorithm].title}</h1>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-lg"><Controls algorithm={selectedAlgorithm} /></div>
        <div className="bg-white p-6 rounded-lg shadow-lg">{renderAlgorithmInfo()}</div>
      </div>
    </div>
  );
};

export default AlgorithmPage;