function mergeSort(arr) {
  // base case; necessary otherwise infinite loop when empty array would try to be be merged.
  if (arr.length < 2) {
    return arr;
  }

  const midpoint = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, midpoint);
  let rightArr = arr.slice(midpoint, arr.length);

  leftArr = mergeSort(leftArr);
  rightArr = mergeSort(rightArr);

  let leftIndex = 0;
  let rightIndex = 0;
  for (i = 0; i < arr.length; i++) {
    if (leftIndex === leftArr.length) {
      arr[i] = rightArr[rightIndex];
      rightIndex++;
    } else if (rightIndex === rightArr.length) {
      arr[i] = leftArr[leftIndex];
      leftIndex++;
    } else if (leftArr[leftIndex] > rightArr[rightIndex]) {
      arr[i] = rightArr[rightIndex];
      rightIndex++;
    } else {
      arr[i] = leftArr[leftIndex];
      leftIndex++;
    }
  }

  console.log(arr);
  return arr;
}

mergeSort([2, 4, 8, 5, 1, 6]);
