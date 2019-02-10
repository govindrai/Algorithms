'use strict';
// Write a method for getting the mth minimum element in an unsorted list

function getMthMinimumElement(arr, m, actualIndexOfFirstElement = 0) {
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

  if (actualIndexOfFirstElement + indexToReplace === m - 1) {
    console.log('This is the ' + m + 'th value: ' + valueToSort);
    return valueToSort;
  }

  if (actualIndexOfFirstElement + indexToReplace > m - 1) {
    // look at left side; 0 up to index to replace and do this again
    getMthMinimumElement(arr.slice(0, indexToReplace), m, actualIndexOfFirstElement);
  } else {
    actualIndexOfFirstElement = actualIndexOfFirstElement + indexToReplace + 1;
    getMthMinimumElement(largerValuesArr, m, actualIndexOfFirstElement);
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
