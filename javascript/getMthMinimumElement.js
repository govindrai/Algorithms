'use strict';

function getMinimum(arr) {
  let minimum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minimum) {
      minimum = arr[i];
    }
  }
  console.log('Minimum: ', minimum);
  return minimum;
}

getMinimum([2, 4, 5, 6]);
getMinimum([6, 5, 4, 3]);

function get2ndMinimum(arr) {
  let minimum;
  let minimum2;

  if (arr[0] > arr[1]) {
    minimum = arr[1];
    minimum2 = arr[0];
  } else {
    minimum = arr[0];
    minimum2 = arr[1];
  }

  for (let i = 2; i < arr.length; i++) {
    if (arr[i] < minimum) {
      minimum2 = minimum;
      minimum = arr[i];
    } else if (arr[i] < minimum2) {
      minimum2 = arr[i];
    }
  }
  console.log('2nd Minimum: ', minimum2);
  return minimum2;
}

get2ndMinimum([1, 2, 3, 4]);
get2ndMinimum([5, 4, 3, 2, 1]);
get2ndMinimum([1, 4, 8, 2, 1]);

// Write a method for getting the mth minimum element in an unsorted list
function getMthMinimumElement(arr, m, indexOfFirstElement = 0) {
  let indexToReplace = 0;
  const valueToSort = arr[0];
  const largerValuesArr = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < valueToSort) {
      arr[indexToReplace] = arr[i];
      indexToReplace++;
    } else {
      largerValuesArr.push(arr[i]);
    }
  }

  if (indexOfFirstElement + indexToReplace === m - 1) {
    console.log('This is the ' + m + 'th value: ' + valueToSort);
    return valueToSort;
  }

  if (indexOfFirstElement + indexToReplace > m - 1) {
    // look at left side; 0 up to index to replace and do this again
    getMthMinimumElement(arr.slice(0, indexToReplace), m, indexOfFirstElement);
  } else {
    indexOfFirstElement = indexOfFirstElement + indexToReplace + 1;
    getMthMinimumElement(largerValuesArr, m, indexOfFirstElement);
  }
}

getMthMinimumElement([15, 2, 6, 5, 25, 23, 4, 43, 14, 15], 1);
getMthMinimumElement([15, 2, 6, 5, 25, 23, 4, 43, 14, 15], 2);
getMthMinimumElement([15, 2, 6, 5, 25, 23, 4, 43, 14, 15], 3);
getMthMinimumElement([15, 2, 6, 5, 25, 23, 4, 43, 14, 15], 4);
getMthMinimumElement([15, 2, 6, 5, 25, 23, 4, 43, 14, 15], 5);
getMthMinimumElement([15, 2, 6, 5, 25, 23, 4, 43, 14, 15], 6);
getMthMinimumElement([15, 2, 6, 5, 25, 23, 4, 43, 14, 15], 7);
getMthMinimumElement([15, 2, 6, 5, 25, 23, 4, 43, 14, 15], 8);
getMthMinimumElement([15, 2, 6, 5, 25, 23, 4, 43, 14, 15], 9);
getMthMinimumElement([15, 2, 6, 5, 25, 23, 4, 43, 14, 15], 10);
