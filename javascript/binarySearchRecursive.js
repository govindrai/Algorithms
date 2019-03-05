function binarySearchRecursive(arr, num, lowIndex, highIndex) {

  // if (arr.length === 0) {
  //   return false;
  // }

  // if (arr.length === 1) {
  //   return arr[0 ] !== num
  // }

  if (lowIndex > highIndex) {
    return false
  }


  const midpointIndex = Math.floor((highIndex - lowIndex + 1)/2);

  if (arr[midpointIndex] === num) {
    return true;
  }

  if (arr[midpointIndex] > num) {
    return binarySearchRecursive(arr, num, lowIndex, midpointIndex -1)
  } else {
    return binarySearchRecursive(arr, num, midpointIndex + 1, highIndex);
  }

}

console.log(binarySearchRecursive([2,3,4,5,6,7,8], 1, 0, 6))