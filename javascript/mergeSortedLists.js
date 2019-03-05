function mergeArrays(myArray, alicesArray) {
  const mergedArray = [];
  // Combine the sorted arrays into one large sorted array
  let positionInMyArray = 0;
  let positionInAlicesArray = 0;
  for (let i = 0; i < myArray.length + alicesArray.length; i++) {
    if (positionInMyArray === myArray.length) {
      mergedArray.push(alicesArray[positionInAlicesArray]);
      positionInAlicesArray++;
    } else if (positionInAlicesArray === alicesArray.length) {
      mergedArray.push(myArray[positionInMyArray]);
      positionInMyArray++;
    } else {
      if (myArray[positionInMyArray] > alicesArray[positionInAlicesArray]) {
        mergedArray.push(alicesArray[positionInAlicesArray]);
        positionInAlicesArray++;
      } else {
        mergedArray.push(myArray[positionInMyArray]);
        positionInMyArray++;
      }
    }
  }

  console.log(mergedArray);
  return mergedArray;
}

// mergeArrays([5, 6, 7], []);
mergeArrays([2, 4, 6], [1, 3, 7]);
