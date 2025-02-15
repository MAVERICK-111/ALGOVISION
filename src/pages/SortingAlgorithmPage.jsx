import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SortControls from "../components/SortControls";
import { motion } from "motion/react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import {SiJavascript, SiPython, SiC} from "react-icons/si";
import { FiCopy, FiCheck } from "react-icons/fi";

const SortingAlgorithmPage = ({ showSidebar, setAlgorithm }) => {
  const { algorithm: paramAlgorithm } = useParams();
  const [language, setLanguage] = useState("javascript");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setAlgorithm(paramAlgorithm);
  }, [paramAlgorithm, setAlgorithm]);

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  const algorithmsInfo = {
    bubbleSort: {
      title: "Bubble Sort",
      description:
        "Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.",
      timeComplexity:
        "Time Complexity: O(n²) (Worst case, Average case), O(n) (Best case)",
      code: {
        javascript: `function bubbleSort(arr) { 
  let n = arr.length; 
  for (let i = 0; i < n - 1; i++) { 
    for (let j = 0; j < n - i - 1; j++) { 
      if (arr[j] > arr[j + 1]) { 
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; 
      } 
    } 
  } 
  return arr; 
}`,
        python: `def bubble_sort(arr): 
  n = len(arr) 
  for i in range(n - 1): 
    for j in range(n - i - 1): 
      if arr[j] > arr[j + 1]: 
        arr[j], arr[j + 1] = arr[j + 1], arr[j] 
  return arr`,
        c: `void bubbleSort(int arr[], int n) { 
  for (int i = 0; i < n - 1; i++) { 
    for (int j = 0; j < n - i - 1; j++) { 
      if (arr[j] > arr[j + 1]) { 
        int temp = arr[j]; 
        arr[j] = arr[j + 1]; 
        arr[j + 1] = temp; 
      } 
    } 
  } 
}`,
      },
    },
    selectionSort: {
      title: "Selection Sort",
      description:
        "Selection Sort is a comparison-based sorting algorithm that divides the input into two parts: a sorted part and an unsorted part. It repeatedly selects the smallest element from the unsorted part and swaps it with the leftmost unsorted element.",
      timeComplexity:
        "Time Complexity: O(n²) (Worst case, Average case), O(n²) (Best case)",
      code: {
        javascript: `function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  }
  return arr;
}`,
        python: `def selection_sort(arr):
  n = len(arr)
  for i in range(n - 1):
    min_idx = i
    for j in range(i + 1, n):
      if arr[j] < arr[min_idx]:
        min_idx = j
    arr[i], arr[min_idx] = arr[min_idx], arr[i]
  return arr`,
        c: `void selectionSort(int arr[], int n) { 
  for (int i = 0; i < n - 1; i++) { 
    int minIdx = i; 
    for (int j = i + 1; j < n; j++) { 
      if (arr[j] < arr[minIdx]) { 
        minIdx = j; 
      } 
    } 
    int temp = arr[i]; 
    arr[i] = arr[minIdx]; 
    arr[minIdx] = temp; 
  } 
}`,
      },
    },
    insertionSort: {
      title: "Insertion Sort",
      description:
        "Insertion Sort is a simple sorting algorithm that builds the final sorted array one item at a time. It is much like sorting playing cards in your hands.",
      timeComplexity:
        "Time Complexity: O(n²) (Worst case, Average case), O(n) (Best case)",
      code: {
        javascript: `function insertionSort(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}`,
        python: `def insertion_sort(arr):
  n = len(arr)
  for i in range(1, n):
    current = arr[i]
    j = i - 1
    while j >= 0 and arr[j] > current:
      arr[j + 1] = arr[j]
      j -= 1
    arr[j + 1] = current
  return arr`,
        c: `void insertionSort(int arr[], int n) { 
  for (int i = 1; i < n; i++) { 
    int current = arr[i]; 
    int j = i - 1; 
    while (j >= 0 && arr[j] > current) { 
      arr[j + 1] = arr[j]; 
      j--; 
    } 
    arr[j + 1] = current; 
  } 
}`,
      },
    },
    mergeSort: {
      title: "Merge Sort",
      description:
        "Merge Sort is a divide-and-conquer algorithm that splits the array into halves, recursively sorts each half, and then merges them back together in sorted order.",
      timeComplexity:
        "Time Complexity: O(n log n) (Worst case, Average case), O(n log n) (Best case)",
      code: {
        javascript: `function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid)); 
  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  return result.concat(left.slice(i), right.slice(j));
}`,
        python: `def merge_sort(arr):
  if len(arr) <= 1:
    return arr
  mid = len(arr) // 2
  left = merge_sort(arr[:mid])
  right = merge_sort(arr[mid:])
  
  return merge(left, right)
  
def merge(left, right):
  result = []
  i = 0
  j = 0
  while i < len(left) and j < len(right):
    if left[i] < right[j]:
      result.append(left[i])
      i += 1
    else:
      result.append(right[j])
      j += 1
  return result + left[i:] + right[j:]`,
        c: `void merge(int arr[], int left, int right) {
  if (left < right) {
    int mid = left + (right - left) / 2;
    merge(arr, left, mid);
    merge(arr, mid + 1, right);
    mergeHelper(arr, left, mid, right);
  }
}
  
void mergeHelper(int arr[], int left, int mid, int right) {
  int n1 = mid - left + 1;
  int n2 = right - mid;
  int leftArr[n1], rightArr[n2];
    
  for (int i = 0; i < n1; i++) {
    leftArr[i] = arr[left + i];
  }
  for (int i = 0; i < n2; i++) {
    rightArr[i] = arr[mid + 1 + i];
  }
    
  int i = 0, j = 0, k = left;
  while (i < n1 && j < n2) {
    if (leftArr[i] <= rightArr[j]) {
      arr[k] = leftArr[i];
      i++;
    } else {
      arr[k] = rightArr[j];
      j++;
    }
    k++;
  }
    
  while (i < n1) {
    arr[k] = leftArr[i];
    i++;
    k++;
  }
  while (j < n2) {
    arr[k] = rightArr[j];
    j++;
    k++;
  }
}`,
      },
    },
    quickSort: {
      title: "Quick Sort",
      description:
        "Quick Sort is a divide-and-conquer algorithm that selects a pivot element, partitions the array around the pivot, and recursively sorts the subarrays.",
      timeComplexity:
        "Time Complexity: O(n log n) (Worst case: O(n²), Average case: O(n log n))",
      code: {
        javascript: `function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}`,
        python: `def quick_sort(arr):
  if len(arr) <= 1:
    return arr
  pivot = arr[-1]
  left = [x for x in arr[:-1] if x < pivot]
  right = [x for x in arr[:-1] if x >= pivot]
  return quick_sort(left) + [pivot] + quick_sort(right)`,
        c: `void quickSort(int arr[], int low, int high) {
  if (low < high) {
    int pi = partition(arr, low, high);
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
}
  
int partition(int arr[], int low, int high) {
  int pivot = arr[high];
  int i = (low - 1);
  for (int j = low; j <= high - 1; j++) {
    if (arr[j] < pivot) {
      i++;
      int temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  int temp = arr[i + 1];
  arr[i + 1] = arr[high];
  arr[high] = temp;
  return (i + 1);
}`,
      },
    },
    heapSort: {
      title: "Heap Sort",
      description:
        "Heap Sort is a comparison-based sorting algorithm that uses a binary heap data structure. It first builds a max heap and then repeatedly extracts the maximum element to sort the array.",
      timeComplexity:
        "Time Complexity: O(n log n) (Worst case, Average case), O(n log n) (Best case)",
      code: {
        javascript: `function heapSort(arr) {
  let n = arr.length;

  function heapify(arr, n, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;
 
    if (left < n && arr[left] > arr[largest]) {
      largest = left;
    }
    if (right < n && arr[right] > arr[largest]) {
      largest = right;
    }
    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      heapify(arr, n, largest);
    }
  }
  
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }
  
  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, i, 0);
  }
  
  return arr;
}`,
        python: `def heapify(arr, n, i):
  largest = i
  left = 2 * i + 1
  right = 2 * i + 2
 
  if left < n and arr[left] > arr[largest]:
    largest = left
  if right < n and arr[right] > arr[largest]:
    largest = right
  if largest != i:
    arr[i], arr[largest] = arr[largest], arr[i]
    heapify(arr, n, largest)

def heap_sort(arr):
  n = len(arr)
  
  for i in range(n // 2 - 1, -1, -1):
    heapify(arr, n, i)

  for i in range(n - 1, 0, -1):
    arr[0], arr[i] = arr[i], arr[0]
    heapify(arr, i, 0)
  
  return arr`,
        c: `void heapify(int arr[], int n, int i) {
  int largest = i;
  int left = 2 * i + 1;
  int right = 2 * i + 2;
  
  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }
  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }
  if (largest != i) {
    int temp = arr[i];
    arr[i] = arr[largest];
    arr[largest] = temp;
    heapify(arr, n, largest);
  }
}
  
void heapSort(int arr[], int n) {
  for (int i = n / 2 - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }
 
  for (int i = n - 1; i > 0; i--) {
    int temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;
    heapify(arr, i, 0);
  }
}`,
      },
    },
  };

  const renderAlgorithmInfo = () => {
    const algorithmData = algorithmsInfo[paramAlgorithm];
    if (algorithmData) {
      return (
        <div>
          <p className="mt-2">{algorithmData.description}</p>
          <p className="mt-4">{algorithmData.timeComplexity}</p>
        </div>
      );
    }
    return <p>Algorithm not found.</p>;
  };

  const renderCodeSection = () => {
    const algorithmData = algorithmsInfo[paramAlgorithm];
    if (algorithmData) {
      return (
        <div className="mt-2">
          <div
            style={{
              width: `100%`,
              overflowX: `auto`,
              whiteSpace: `nowrap`,
              fontFamily: `Fira Code`,
            }}
          >
            <SyntaxHighlighter
              language={language}
              style={docco}
              showLineNumbers={true}
              customStyle={{
                padding: "1em",
                borderRadius: "8px",
              }}
            >
              {algorithmData.code[language]}
            </SyntaxHighlighter>
          </div>
        </div>
      );
    }
    return <p>Code not available for this algorithm.</p>;
  };

  const contentClass = showSidebar
    ? "transition-all duration-300 ease-in-out transform md:ml-64 md:max-w-[calc(100%-16rem)]"
    : "transition-all duration-300 ease-in-out md:max-w-full";

  return (
    <div className={`p-4 mt-3 min-h-screen flex flex-col ${contentClass} `}>
      <motion.h1
        className="mt-16 sm:mt-2 text-3xl font-bold text-center"
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 25 }}
      >
        {algorithmsInfo[paramAlgorithm]?.title || "Algorithm"}
      </motion.h1>
      <div className="mt-4 mb-3 sm:mt-7 grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow">
        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg flex-1"
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 25 }}
        >
          <SortControls algorithm={paramAlgorithm} />
        </motion.div>
        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg flex-1"
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 25 }}
        >
          <div className="mt-2 mb-2">{renderAlgorithmInfo()}</div>
          <div className="mt-6 mb-4 bg-blue-500 text-white rounded-lg shadow-md flex items-center justify-between">
            <div className="flex space-x-2">
              <button
                onClick={() => setLanguage("javascript")}
                className={`py-2 px-4 cursor-pointer ${
                  language === "javascript" ? "bg-blue-700" : ""
                } rounded-md transition-colors`}
              >
                <SiJavascript size={24} />
              </button>
              <button
                onClick={() => setLanguage("python")}
                className={`py-2 px-4 cursor-pointer ${
                  language === "python" ? "bg-blue-700" : ""
                } rounded-md transition-colors`}
              >
                <SiPython size={24} />
              </button>
              <button
                onClick={() => setLanguage("c")}
                className={`py-2 px-4 cursor-pointer ${
                  language === "c" ? "bg-blue-700" : ""
                } rounded-md transition-colors`}
              >
                <SiC size={24} />
              </button>
            </div>  
            <CopyToClipboard
              text={algorithmsInfo[paramAlgorithm]?.code[language]}
              onCopy={() => setCopied(true)}
            >
              <button
                style={{
                  padding: "8px 16px",
                  color: copied ? "#90EE90":"#fff",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                {copied ? (<FiCheck size={20} />):(<FiCopy size={20} />)}
              </button>
            </CopyToClipboard>
          </div>
          {renderCodeSection()}
        </motion.div>
      </div>
    </div>
  );
};

export default SortingAlgorithmPage;
