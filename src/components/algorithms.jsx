// Delay function to simulate animation delay
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/*-------------------------------------SORTS-------------------------------------*/

// Bubble Sort
export const bubbleSort = async (array, setArray, delayTime, completeSort) => {
  let arr = [...array];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        setArray([...arr]);
        await delay(delayTime);
      }
    }
  }
  completeSort();
};

// Selection Sort
export const selectionSort = async (array, setArray, delayTime, completeSort) => {
  let arr = [...array];
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      setArray([...arr]);
      await delay(delayTime);
    }
  }
  completeSort();
};

// Insertion Sort
export const insertionSort = async (array, setArray, delayTime, completeSort) => {
  let arr = [...array];
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > currentValue) {
      arr[j + 1] = arr[j];
      j--;
      setArray([...arr]);
      await delay(delayTime);
    }
    arr[j + 1] = currentValue;
    setArray([...arr]);
    await delay(delayTime);
  }
  completeSort();
};

// Merge Sort
export const mergeSort = async (array, setArray, delayTime, completeSort) => {
  let arr = [...array];

  const merge = async (left, right) => {
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
    result = result.concat(left.slice(i)).concat(right.slice(j));
    return result;
  };

  const divide = async (arr) => {
    if (arr.length <= 1) return arr;
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    const leftSorted = await divide(left);
    const rightSorted = await divide(right);

    const merged = await merge(leftSorted, rightSorted);
    setArray([...merged]);
    await delay(delayTime);
    return merged;
  };

  await divide(arr);
  completeSort();
};

// Quick Sort
export const quickSort = async (array, setArray, delayTime, completeSort) => {
  let arr = [...array];

  const partition = async (low, high) => {
    let pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
        setArray([...arr]);
        await delay(delayTime);
      }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    setArray([...arr]);
    await delay(delayTime);
    return i + 1;
  };

  const sort = async (low, high) => {
    if (low < high) {
      let pi = await partition(low, high);
      await sort(low, pi - 1);
      await sort(pi + 1, high);
    }
  };

  await sort(0, arr.length - 1);
  completeSort();
};

// Heap Sort
export const heapSort = async (array, setArray, delayTime, completeSort) => {
  let arr = [...array];

  const heapify = async (n, i) => {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) largest = left;
    if (right < n && arr[right] > arr[largest]) largest = right;

    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      setArray([...arr]);
      await delay(delayTime);
      await heapify(n, largest);
    }
  };

  const buildHeap = async (n) => {
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      await heapify(n, i);
    }
  };

  const sort = async () => {
    const n = arr.length;
    await buildHeap(n);

    for (let i = n - 1; i > 0; i--) {
      [arr[0], arr[i]] = [arr[i], arr[0]];
      setArray([...arr]);
      await delay(delayTime);
      await heapify(i, 0);
    }
  };

  await sort();
  completeSort();
};

/*-------------------------------------SEARCHS-------------------------------------*/

// Linear Search
export const linearSearch = async (array, callback, delayTime, completeSearch, targetNumber) => {
  let arr = [...array];
  let found = false;
  for (let i = 0; i < arr.length; i++) {
    callback(arr, i, arr[i] === targetNumber);
    await delay(delayTime);
    
    if (arr[i] === targetNumber) {
      callback(arr, i, true);
      found = true;
      break;
    }
  }
  if(!found) {
    alert(`${targetNumber} not found`);
    callback(arr,null,false);
  }
  completeSearch();
};

// Binary Search
export const binarySearch = async (array, callback, delayTime, completeSearch, targetNumber) => {
  let arr = [...array];
  let left = 0;
  let right = arr.length - 1;
  let found = false;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    callback(arr, middle, arr[middle] === targetNumber, left, right, middle,);
    await delay(delayTime);

    if (arr[middle] === targetNumber) {
      callback(arr, middle, true, null, null, middle);
      found = true;
      break;
    } else if (arr[middle] < targetNumber) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  if(!found) {
    alert(`${targetNumber} not found`);
    callback(arr,null,false);
  }
  completeSearch();
};

// Jump Search
export const jumpSearch = async (array, callback, delayTime, completeSearch, targetNumber) => {
  let arr = [...array];
  const n = arr.length;
  let step = Math.floor(Math.sqrt(n));
  let prev = 0;
  let found = false;

  if (n === 0) {
    alert('Array is empty');
    completeSearch();
    return;
  }

  // Jump phase
  while (arr[Math.min(step, n) - 1] < targetNumber) {
    prev = step;
    step += Math.floor(Math.sqrt(n));
    
    callback(arr, Math.min(step, n) - 1, false);
    await delay(delayTime);
    
    if (prev >= n) {
      alert(`${targetNumber} not found`);
      completeSearch();
      return;
    }
  }

  // Linear search phase
  for (let i = prev; i < Math.min(step, n); i++) {
    callback(arr, i, arr[i] === targetNumber);
    await delay(delayTime);
    
    if (arr[i] === targetNumber) {
      callback(arr, i, true);
      found = true;
      completeSearch();
      return;
    }
  }
  if(!found) {
      alert(`${targetNumber} not found`);
      callback(arr,null,false);
    }
  completeSearch();
};