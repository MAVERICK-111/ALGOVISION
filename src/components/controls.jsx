import React, { useState } from "react";
import { bubbleSort, heapSort, insertionSort, selectionSort, mergeSort, quickSort } from "./algorithms";
import BarChart from "./barchart";

const Controls = () => {
  const [input, setInput] = useState("");
  const [array, setArray] = useState([]);
  const [delay, setDelay] = useState(500);
  const [sorting, setSorting] = useState(false);
  const [algorithm, setAlgorithm] = useState("bubbleSort");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleGenerateArray = () => {
    const numbers = input.split(",").map(Number).filter((num) => !isNaN(num));
    if (numbers.length === 0) {
      alert("Please enter valid numbers!");
      return;
    }
    setArray(numbers);
  };

  const handleSort = () => {
    if (!sorting && array.length > 0) {
      setSorting(true);
      const completeSort = () => setSorting(false);
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
    })();
    }
  };

  return (
    <div className="mb-4">
      <div className="mb-4">
        <label htmlFor="arrayInput" className="block text-xl mb-2">
          Enter numbers (comma-separated):
        </label>
        <input
          id="arrayInput"
          type="text"
          value={input}
          onChange={handleInputChange}
          className="p-2 border rounded-md w-full text-black"
          placeholder="e.g., 12, 8, 5, 7"
        />
      </div>

      <div className="mb-4 flex space-x-4">
        <button
          onClick={handleGenerateArray}
          disabled={sorting}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Generate Array
        </button>
        <button
          onClick={handleSort}
          disabled={sorting || array.length === 0}
          className="px-4 py-2 bg-green-500 text-white rounded-lg"
        >
          Start Sorting
        </button>
      </div>

      <div className="mb-4 flex space-x-2">
        <label htmlFor="algorithm" className="text-xl">
          Choose Algorithm:
        </label>
        <select
          id="algorithm"
          value={algorithm}
          onChange={(e) => setAlgorithm(e.target.value)}
          className="p-2 border rounded-md text-black"
        >
          <option value="bubbleSort">Bubble Sort</option>
          <option value="selectionSort">Selection Sort</option>
          <option value="insertionSort">Insertion Sort</option>
          <option value="mergeSort">Merge Sort</option>
          <option value="quickSort">Quick Sort</option>
          <option value="heapsort">Heap Sort</option>
        </select>
      </div>

      <div className="space-x-2 flex items-center mb-4">
        <label htmlFor="speed" className="text-lg">
          Sorting Speed (ms):
        </label>
        <input
          id="speed"
          type="number"
          value={delay}
          placeholder="500"
          onChange={(e) => setDelay(Number(e.target.value))}
          className="w-16 p-2 border rounded-md text-black"
        />
      </div>

      {array.length > 0 && <BarChart array={array} delay={delay} />}
    </div>
  );
};

export default Controls;