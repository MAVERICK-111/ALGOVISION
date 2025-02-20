import React, { useState, useEffect } from "react";
import { bubbleSort, heapSort, insertionSort, selectionSort, mergeSort, quickSort } from "./algorithms";
import BarChart from "./sortBarchart";

const SortControls = ({algorithm}) => {
  const [input, setInput] = useState("");
  const [array, setArray] = useState([]);
  const [delay, setDelay] = useState(500);
  const [sorting, setSorting] = useState(false);
  const [sorted, setSorted] = useState(false);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleGenerateArray = () => {
    const numbers = input.split(",").map(num => num.trim()).filter(num => num !== "").map(Number).filter((num) => !isNaN(num));
    if (numbers.length === 0) {
      alert("Please enter valid numbers!");
      return;
    }
    setArray(numbers);
    setSorted(false);
  };

  const handleGenerateRandomArray = () => {
    const arrayLength = Math.floor(Math.random() * 6) + 15;
    const randomArray = Array.from({ length: arrayLength }, () => 
      Math.floor(Math.random() * 81) + 20
    );
    const arrayString = randomArray.join(", ");
    setInput(arrayString);
    setArray(randomArray);
    setSorted(false);
  };

  const handleSort = () => {
    if (!sorting && array.length > 0) {
      setSorting(true);
      const completeSort = () => {
        setSorting(false);
        setSorted(true);
      };
        const algorithms = {
        bubbleSort,
        selectionSort,
        insertionSort,
        mergeSort,
        quickSort,
        heapSort,
      };
      const sortAlgorithm = algorithms[algorithm];
      (async () => {
        await sortAlgorithm(array, setArray, delay, completeSort);
        completeSort();
        setSorting(false);
      })();
    }
  };

  useEffect(() => {
    if (algorithm) {
      setArray([]);
      setInput("");
      setSorting(false);
    }
  }, [algorithm]);

  return (
    <div className="mb-4">
      <div className="mb-2">
        <label htmlFor="arrayInput" className="block text-xl mb-4">
          Enter numbers(comma-separated):
        </label>
        <input
          id="arrayInput"
          type="text"
          value={input}
          onChange={handleInputChange}
          className="p-2 border-1 border-gray-300 shadow-lg rounded-md w-full text-black"
          placeholder="whole numbers e.g. 1, 5, 7"
        />
      </div>

      <div className="mt-6 mb-6 flex space-x-6">
          <button
            onClick={handleGenerateArray}
            disabled={sorting}
            className="px-2 py-2 bg-blue-500 shadow-lg text-white rounded-lg transform transition-transform duration-300 hover:scale-105 focus:scale-105"
          >
            Generate Array
          </button>
          <button
            onClick={handleGenerateRandomArray}
            disabled={sorting}
            className="px-2 py-2 bg-purple-500 text-white rounded-lg transform transition-transform duration-300 hover:scale-105 focus:scale-105"
          >
            Random Array
          </button>
          <button
            onClick={handleSort}
            disabled={sorting || array.length === 0}
            className="px-2 py-2 bg-green-500 shadow-lg text-white rounded-lg transform transition-transform duration-300 hover:scale-105 focus:scale-105"
          >
            Start Sorting
          </button>
      </div>

      <div className="space-x-2 flex items-center mb-6">
        <label htmlFor="speed" className="text-lg">
          Sorting Speed (ms):
        </label>
        <input
          id="speed"
          type="number"
          value={delay}
          placeholder="500"
          onChange={(e) => setDelay(Number(e.target.value))}
          className="w-16 p-2 border border-gray-300 shadow-lg rounded-md text-black"
        />
      </div>

      {array.length > 0 && (
        <BarChart array={array} sorted={sorted} />
      )}
    </div>
  );
};

export default SortControls;