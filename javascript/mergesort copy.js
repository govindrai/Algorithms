function mergeSort(arrayToSort) {

  // BASE CASE: arrays with fewer than 2 elements are sorted
  if (arrayToSort.length < 2) {
    return arrayToSort;
  }

  // STEP 1: divide the array in half
  // We need to round down to avoid getting a "half index"
  const midIndex = Math.floor(arrayToSort.length / 2);

  const left = arrayToSort.slice(0, midIndex);
  const right = arrayToSort.slice(midIndex);

  // STEP 2: sort each half
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // STEP 3: merge the sorted halves
  const sortedArray = [];
  let currentLeftIndex = 0;
  let currentRightIndex = 0;

  while (sortedArray.length !== left.length + right.length) {

    // sortedLeft's element comes next
    // if it's less than sortedRight's first
    // element or if sortedRight is exhausted
    if (currentLeftIndex !== left.length &&
      (currentRightIndex === right.length ||
        sortedLeft[currentLeftIndex] < sortedRight[currentRightIndex])) {
      sortedArray.push(sortedLeft[currentLeftIndex]);
      currentLeftIndex += 1;
    } else {
      sortedArray.push(sortedRight[currentRightIndex]);
      currentRightIndex += 1;
    }
  }

  return sortedArray;
}

console.log(mergeSort([8,2,6,4]))