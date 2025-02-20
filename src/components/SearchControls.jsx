import React, { useState, useEffect } from "react";
import BarChart from "./searchBarchart";
import { linearSearch, binarySearch, jumpSearch } from "./algorithms";

const SearchControls = ({ algorithm }) => {
  const [input, setInput] = useState("");
  const [target, setTarget] = useState("");
  const [array, setArray] = useState([]);
  const [delay, setDelay] = useState(500);
  const [searching, setSearching] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [foundIndex, setFoundIndex] = useState(null);
  const [leftIndex, setLeftIndex] = useState(null);
  const [rightIndex, setrightIndex] = useState(null);
  const [middleIndex, setmiddleIndex] = useState(null);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleTargetChange = (e) => {
    setTarget(e.target.value);
  };

  const handleGenerateArray = () => {
    const numbers = input.split(",").map(num => num.trim()).filter(num => num !== "").map(Number).filter((num) => !isNaN(num));
    if (numbers.length === 0) {
      alert("Please enter valid numbers!");
      return;
    }
    setArray(numbers);
    setCurrentIndex(null);
    setFoundIndex(null);
    setLeftIndex(null);
    setrightIndex(null);
    setmiddleIndex(null);
  };

  const handleGenerateRandomArray = () => {
    const arrayLength = Math.floor(Math.random() * 6) + 15;
    const randomArray = Array.from({ length: arrayLength }, () => 
      Math.floor(Math.random() * 81) + 20
    );
    const arrayString = randomArray.join(", ");
    setInput(arrayString);
    setArray(randomArray);
    setCurrentIndex(null);
    setFoundIndex(null);
    setLeftIndex(null);
    setrightIndex(null);
    setmiddleIndex(null);
  };

  const handleSearch = () => {
    if (!searching && array.length > 0 && target !== "") {
      setSearching(true);
      setFoundIndex(null);
      const targetNumber = Number(target);
      
      if(isNaN(targetNumber)) {
        alert("Please enter a valid target number!");
        setSearching(false);
        return;
      }

      try {
        let searchArray = [...array];
        if(algorithm !== 'linearSearch') {
          searchArray = [...array].sort((a, b) => a - b);
          setArray(searchArray);
        }
        else searchArray = [...array];

        const updateVisualization = (arr, index, found, left, right, middle) => {
          setCurrentIndex(index);
          setLeftIndex(left);
          setrightIndex(right);
          setmiddleIndex(middle);
          if(found) setFoundIndex(index);
        };

        const completeSearch = () => {
          setSearching(false);
        };

        const algorithms = {
          linearSearch,
          binarySearch,
          jumpSearch
        };

        if (algorithms[algorithm]) {
          algorithms[algorithm](searchArray, updateVisualization, delay, completeSearch, targetNumber);
        }
      } catch (error) {
        console.error("Search error:", error);
        setSearching(false);
      }
    }
  };

  useEffect(() => {
    if (algorithm) {
      setArray([]);
      setInput("");
      setTarget("");
      setCurrentIndex(null);
      setFoundIndex(null);
    }
  }, [algorithm]);

  return (
    <div>
      <div>
        <label htmlFor="arrayInput" className="block text-xl mt-[-10px] mb-2">
          Enter numbers (comma-separated):
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

      <div className="mb-3 mt-2">
        <label htmlFor="targetInput" className="block text-xl mb-2">
          Enter Target Value:
        </label>
        <input
          id="targetInput"
          type="text"
          value={target}
          onChange={handleTargetChange}
          className="p-2 border-1 border-gray-300 shadow-lg rounded-md w-full text-black"
          placeholder="e.g. 7"
        />
      </div>
      <div className="mt-2 mb-3 flex space-x-3">
        <button
          onClick={handleGenerateArray}
          disabled={searching}
          className="px-2 py-2 bg-blue-500 text-white rounded-lg transform transition-transform duration-300 hover:scale-105 focus:scale-105"
        >
          Generate Array
        </button>
        <button
          onClick={handleGenerateRandomArray}
          disabled={searching}
          className="px-2 py-2 bg-purple-500 text-white rounded-lg transform transition-transform duration-300 hover:scale-105 focus:scale-105"
        >
          Random Array
        </button>
        <button
          onClick={handleSearch}
          disabled={searching || array.length === 0}
          className="px-2 py-2 bg-green-500 text-white rounded-lg transform transition-transform duration-300 hover:scale-105 focus:scale-105"
        >
          Start Search
        </button>
      </div>

      <div className="space-x-2 flex items-center mb-2">
        <label htmlFor="speed" className="text-lg">
          Searching Speed(ms)
        </label>
        <input
          id="speed"
          type="number"
          value={delay}
          placeholder="500"
          onChange={(e) => setDelay(Number(e.target.value))}
          className="inline-block w-20 items-center p-2 border rounded-md text-black"
        />
      </div>

      {array.length > 0 && (
        <BarChart array={array} currentIndex={currentIndex} foundIndex={foundIndex} leftIndex={leftIndex} rightIndex={rightIndex} middleIndex={middleIndex}/>
      )}
    </div>
  );
};

export default SearchControls;
