import './App.css';
import React, { useState} from 'react';

// Function to perform Bubble sort
const bubbleSort = (arr) => {
  const n = arr.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
};

// Function to perform Selection sort
const selectionSort = (arr) => {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
};

// Function to perform Quicksort
const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
  }

  return quickSort(left).concat(pivot, quickSort(right));
};

const SortingApp = () => {
  const [inputArray, setInputArray] = useState('');
  const [sortedArray, setSortedArray] = useState([]);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState('bubble');

  const handleInputChange = (e) => {
    setInputArray(e.target.value);
  };

  const handleSort = () => {
    const arr = inputArray.split(',').map((num) => parseInt(num, 10));
    let result;

    switch (selectedAlgorithm) {
      case 'bubble':
        result = bubbleSort([...arr]);
        break;
      case 'selection':
        result = selectionSort([...arr]);
        break;
      case 'quick':
        result = quickSort([...arr]);
        break;
      default:
        break;
    }

    setSortedArray(result);
  };

  return (
    <div className='main'>
    <div className='App'>
      <label>
        <h1>Sorting App</h1>
        <input type="text" placeholder="Enter comma-separated array" value={inputArray} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        <h3>Sorting Algorithm</h3>
        <select
          value={selectedAlgorithm}
          onChange={(e) => setSelectedAlgorithm(e.target.value)}
        >
          <option value="bubble">Bubble Sort</option>
          <option value="selection">Selection Sort</option>
          <option value="quick">Quicksort</option>
        </select>
      </label>
      <br />
      <button onClick={handleSort}>Sort</button>
      <br />
      {sortedArray.length > 0 && (
      <div className='sortedArray'>
        <strong>Sorted Array:</strong> {sortedArray.join(', ')}
      </div>
      )}
      <div className='footer'>
      <footer>Mohsin Rony &copy; 2023</footer>
      </div>
      
    </div>
    </div>
  );
};

export default SortingApp;

