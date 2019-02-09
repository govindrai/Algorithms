function naiveSelectionSort(arr) {
  let min;
  let minIndex;
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j]) {
        if (!min || arr[j] < min) {
          min = arr[j];
          minIndex = j;
        }
      }
    }
    newArr.push(min);
    arr[minIndex] = null;
    min = null;
  }
  console.log(newArr);
  return newArr;
}

naiveSelectionSort([2, 4, 6, 1, 5, 4]);
naiveSelectionSort([]);

function selectionSort(arr) {
  let min;
  let minIndex;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[j]) {
        if (!min || arr[j] < min) {
          min = arr[j];
          minIndex = j;
        }
      }
    }
    const temp = arr[i];
    arr[i] = min;
    arr[minIndex] = temp;
    min = null;
  }

  console.log(arr);
  return arr;
}

selectionSort([2, 4, 6, 1, 5, 4]);

selectionSort([])