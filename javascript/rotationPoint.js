function rotationPoint(arr, startIndex, endIndex) {
  if (arr.length < 2) {
    throw new Error('not valid argument');
  }
  const midPoint = startIndex + Math.floor((endIndex - startIndex + 1) / 2);
  const leftEdgeWord = arr[0];
  const midPointWord = arr[midPoint];

  if (midPointWord < arr[midPoint - 1]) {
    return midPoint;
  }

  if (midPointWord < leftEdgeWord) {
    return rotationPoint(arr, startIndex, midPoint - 1);
  } else {
    return rotationPoint(arr, midPoint + 1, endIndex);
  }
}

const words = [
  'ptolemaic',
  'retrograde',
  'supplant',
  'undulate',
  'xenoepist',
  'zargs',
  'zebra',
  'asymptote', // <-- rotates here!
  'banoffee',
  'engender',
  'karpatka',
  'othellolagkage',
  'ovulate',
  'ozark',
  'pal',
  'parrot',
  'past',
  'pattiserie',
  'police',
  'pork',
];
// console.log(rotationPoint(words, 0, words.length - 1));

function rotationPointIterative(arr) {
  let floorIndex = 0;
  let ceilingIndex = arr.length - 1
  const firstWord = arr[0]
  while (floorIndex < ceilingIndex) {
    const midPointIndex = Math.floor((ceilingIndex + floorIndex + 1)/2)
    const midPointWord = arr[midPointIndex]
    if (midPointWord < arr[midPointIndex - 1]) {
      return midPointIndex;
    }
    if (midPointWord > firstWord) {
      // start on the right;
      floorIndex = midPointIndex + 1
    } else {
      ceilingIndex = midPointIndex - 1
    }
  }
  return 0;
}

console.log(rotationPointIterative(words, 0, words.length - 1));
const words2 = [
  'asymptote', // <-- rotates here!
  'banoffee',
  'engender',
  'karpatka',
  'othellolagkage',
  'ovulate',
  'ozark',
  'pal',
  'parrot',
  'past',
  'pattiserie',
  'police',
  'pork',
  'ptolemaic',
  'retrograde',
  'supplant',
  'undulate',
  'xenoepist',
  'zargs',
  'zebra',
];
console.log(rotationPointIterative(words2, 0, words.length - 1));
