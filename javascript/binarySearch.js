const orderedArray = [];

for (let i = 1; i < 10000; i++) {
  orderedArray.push(i);
}

function binarySearch(arr, value) {
  console.log('made it');
  if (arr.length === 0) {
    return false;
  }
  let low = 0;
  let high = arr.length - 1;
  loops = 0;

  do {
    loops++;
    const mid = Math.floor((high + low) / 2);
    // console.log('high low mid before', high, low, mid);
    const valueAtMid = arr[mid];
    if (valueAtMid === value) {
      console.log('found it. looped ' + loops + ' times');
      return true;
    }
    if (valueAtMid > value) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
    // console.log('high low mid after', high, low, mid);
  } while (high >= low);
  console.log("didn't find it. looped " + loops + ' times');
  return false;
}

console.log(binarySearch(orderedArray, 0));
console.log(binarySearch(orderedArray, 90));
console.log(binarySearch(orderedArray, 234));
console.log(binarySearch(orderedArray, 10800));
