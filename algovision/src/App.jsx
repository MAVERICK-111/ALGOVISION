import { useState } from "react";
import {
  bubbleSort,
  heapSort,
  insertionSort,
  selectionSort,
  mergeSort,
} from "./algorithms";
import "./index.css";

function App() {
  const [input, setInput] = useState("");
  const [array, setArray] = useState([]);
  const [delay, setDelay] = useState(500);
  const [sorting, setSorting] = useState(false);
  const [algorithm, setAlgorithm] = useState("bubbleSort");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleGenerateArray = () => {
    const numbers = input
      .split(",")
      .map(Number)
      .filter((num) => !isNaN(num));
    setArray(numbers);
  };

  const handleSort = () => {
    if (!sorting) {
      setSorting(true);
      const completeSort = () => setSorting(false);
      if (algorithm === "bubbleSort") {
        bubbleSort(array, setArray, delay, completeSort);
      } else if (algorithm === "selectionSort") {
        selectionSort(array, setArray, delay, completeSort);
      } else if (algorithm === "insertionSort") {
        insertionSort(array, setArray, delay, completeSort);
      } else if (algorithm === "mergeSort") {
        mergeSort(array, setArray, delay, completeSort);
      } else if (algorithm === "quickSort") {
        quickSort(array, setArray, delay, completeSort);
      } else if (algorithm === "heapsort") {
        heapSort(array, setArray, delay, completeSort);
      }
    }
  };

  const getMaxValue = () => Math.max(...array, 0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-3xl font-bold mb-4">Sorting Visualizer</h1>

        <div className="mb-4">
          <label htmlFor="arrayInput" className="block text-xl mb-2">
            Enter numbers (comma-separated):
          </label>
          <input
            id="arrayInput"
            type="text"
            value={input}
            onChange={handleInputChange}
            className="p-2 border rounded-md w-full"
            placeholder="e.g., 12, 8, 5, 7"
          />
        </div>

        <div className="mb-4 flex space-x-4">
          <button
            onClick={handleGenerateArray}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Generate Array
          </button>
          <button
            onClick={handleSort}
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
            className="p-2 border rounded-md"
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
            onChange={(e) => setDelay(Number(e.target.value))}
            className="w-16 p-2 border rounded-md"
          />
        </div>

        <div className="flex justify-center mb-4 space-x-2">
          {array.map((value, index) => (
            <div
              key={index}
              className="relative"
              style={{
                height: `${value * 10}px`,
                width: "30px",
                marginRight: "2px",
                backgroundColor: "#4B9CD3", // default color
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
      </div>
    </div>
  );
}
export default App;