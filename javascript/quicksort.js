function quicksort(arr, startIndex, endIndex) {
  if (startIndex >= endIndex) {
    return arr;
  }

  const pivot = arr[endIndex];
  let partitionIndex = startIndex;
  for (let i = startIndex; i < endIndex; i++) {
    if (arr[i] < pivot) {
      if (i > startIndex) {
        swap(arr, i, i-1)
      }
      partitionIndex++
    }
  }
  swap(arr, partitionIndex, endIndex)
  quicksort(arr, startIndex, partitionIndex - 1);
  quicksort(arr, partitionIndex + 1, endIndex)
  console.log("ARR:", arr)
  return arr;
}

function swap(arr, index1, index2) {
  const temp = arr[index1]
  arr[index1] = arr[index2]
  arr[index2] = temp;
}

console.log(quicksort([5,3,4,1,2], 0, 4));
console.log(quicksort([5,4,3,2,1], 0, 4));