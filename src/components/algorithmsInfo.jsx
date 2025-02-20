export const algorithmsInfo = {
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
  linearSearch: {
    title: "Linear Search",
    description:
      "Linear Search is a simple search algorithm that checks each element in a list sequentially until the desired element is found.",
    timeComplexity:
      "Time Complexity: O(n) (Worst case, Average case), O(1) (Best case)",
    code: {
      javascript: 
`function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}`,
      python:
`def linear_search(arr, target):
  for i, val in enumerate(arr):
      if val == target:
          return i
  return -1`,
      c:
`int linearSearch(int arr[], int n, int target) {
  for (int i = 0; i < n; i++) {
    if (arr[i] == target) {
      return i;
    }
  }
  return -1;
}`,
    },
  },
  binarySearch: {
    title: "Binary Search",
    description:
      "Binary Search is an efficient search algorithm that works on sorted arrays by repeatedly dividing the search interval in half.",
    timeComplexity:
      "Time Complexity: O(log n) (Worst case, Average case), O(1) (Best case)",
    code: {
      javascript: 
`function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}`,
      python: 
`def binary_search(arr, target):
  low, high = 0, len(arr) - 1
  while low <= high:
      mid = (low + high) // 2
      if arr[mid] == target:
          return mid
      elif arr[mid] < target:
          low = mid + 1
      else:
          high = mid - 1
  return -1`,
      c: 
`int binarySearch(int arr[], int n, int target) {
  int low = 0, high = n - 1;
  while (low <= high) {
    int mid = (low + high) / 2;
    if (arr[mid] == target) {
      return mid;
    }
    if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}`,
    },
  },
  jumpSearch: {
    title: "Jump Search",
    description:
      "Jump Search is an algorithm for ordered lists that jumps ahead by a fixed step size to find the element more efficiently.",
    timeComplexity:
      "Time Complexity: O(√n) (Worst case, Average case), O(1) (Best case)",
    code: {
      javascript: 
`function jumpSearch(arr, target) {
  let n = arr.length;
  let step = Math.floor(Math.sqrt(n));
  let prev = 0;
  while (arr[Math.min(step, n) - 1] < target) {
    prev = step;
    step += Math.floor(Math.sqrt(n));
    if (prev >= n) {
      return -1;
    }
  }
  for (let i = prev; i < Math.min(step, n); i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}`,
      python: 
`def jump_search(arr, target):
  import math
  n = len(arr)
  step = int(math.sqrt(n))
  prev = 0
  while arr[min(step, n)-1] < target:
      prev = step
      step += int(math.sqrt(n))
      if prev >= n:
          return -1
  for i in range(prev, min(step, n)):
      if arr[i] == target:
          return i
  return -1`,
      c:
`int jumpSearch(int arr[], int n, int target) {
  int step = sqrt(n);
  int prev = 0;
  while (arr[min(step, n) - 1] < target) {
    prev = step;
    step += sqrt(n);
    if (prev >= n) {
      return -1;
    }
  }
  for (int i = prev; i < min(step, n); i++) {
    if (arr[i] == target) {
      return i;
    }
  }
  return -1;
}`,
    },
  },
};