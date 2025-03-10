import React from "react";
import { useNavigate } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area"

const Sidebar = ({showSidebar, setShowSidebar, handleTouchStart, handleTouchEnd, setAlgorithm}) => {
  const navigate = useNavigate();

  const handleAlgorithmSelect = (algorithm,type) => {
    setAlgorithm(algorithm);
    navigate(`/${type}/${algorithm}`);
    setShowSidebar(false);
  };
  const handleHomeClick = () => {
    navigate("/");
    setShowSidebar(false);
  };

  return (
    <div
      className="relative"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {showSidebar && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-50 backdrop-blur-md z-40 sm:hidden"
        ></div>
      )}

      <div
        className={`fixed left-0 top-0 h-full bg-gray-800 text-white transition-transform duration-300 ease-in-out transform w-64 z-50 ${showSidebar ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-4 pt-20">
          <div className="space-y-4">
            <button
              onClick={handleHomeClick}
              className="px-4 py-2 bg-transparent text-white rounded-lg w-full"
            >
              Home
            </button>
            {/*Sorting*/}
            <p className="text-gray-500 text-center mb-4">Sorting Algorithms</p>
            <ScrollArea className="space-y-1 overflow-y-auto xl:flex-1 h-[calc(50vh-7.5rem)]">
              <button
                onClick={() => handleAlgorithmSelect("bubbleSort","sorts")}
                className="px-4 py-2 bg-transparent text-white rounded-lg w-full"
              >
                Bubble Sort
              </button>
              <button
                onClick={() => handleAlgorithmSelect("selectionSort","sorts")}
                className="px-4 py-2 bg-transparent text-white rounded-lg w-full"
              >
                Selection Sort
              </button>
              <button
                onClick={() => handleAlgorithmSelect("insertionSort","sorts")}
                className="px-4 py-2 bg-transparent text-white rounded-lg w-full"
              >
                Insertion Sort
              </button>
              <button
                onClick={() => handleAlgorithmSelect("mergeSort","sorts")}
                className="px-4 py-2 bg-transparent text-white rounded-lg w-full"
              >
                Merge Sort
              </button>
              <button
                onClick={() => handleAlgorithmSelect("quickSort","sorts")}
                className="px-4 py-2 bg-transparent text-white rounded-lg w-full"
              >
                Quick Sort
              </button>
              <button
                onClick={() => handleAlgorithmSelect("heapSort","sorts")}
                className="px-4 py-2 bg-transparent text-white rounded-lg w-full"
              >
                Heap Sort
              </button>
            </ScrollArea>
            
            {/*Searching*/}
            <p className="text-gray-500 text-center mb-2">Search Algorithms</p>
            <ScrollArea className="space-y-1 overflow-y-auto xl:flex-1 h-[calc(50vh-7.5rem)]">
              <button
                onClick={() => handleAlgorithmSelect("binarySearch", "searches")}
                className="px-4 py-2 bg-transparent text-white rounded-lg w-full"
              >
                Binary Search
              </button>
              <button
                onClick={() => handleAlgorithmSelect("linearSearch", "searches")}
                className="px-4 py-2 bg-transparent text-white rounded-lg w-full"
              >
                Linear Search
              </button>
              <button
                onClick={() => handleAlgorithmSelect("jumpSearch", "searches")}
                className="px-4 py-2 bg-transparent text-white rounded-lg w-full"
              >
                Jump Search
              </button>
            </ScrollArea>
          </div>
        </div>
      </div>

      <button
        onClick={() => setShowSidebar(!showSidebar)}
        className="fixed left-0 top-4 bg-blue-500 text-white p-4 rounded-r-full z-50"
      >
        {showSidebar ? "Close Sidebar" : "Open Sidebar"}
      </button>
    </div>
  );
}

export default Sidebar;
