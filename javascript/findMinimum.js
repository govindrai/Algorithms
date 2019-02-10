function findMinimum(arr) {
  let minimum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minimum) {
      minimum = arr[i];
    }
  }
  console.log('Minimum: ', minimum);
  return minimum;
}

findMinimum([2, 4, 5, 6]);
findMinimum([6, 5, 4, 3]);

function find2ndDifferentMinimum(arr) {
  let minimum;
  let minimum2;

  if (arr[0] > arr[1]) {
    minimum = arr[1];
    minimum2 = arr[0]
  } else {
    minimum = arr[0];
    minimum2 = arr[1]
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

find2ndDifferentMinimum([1, 2, 3, 4]);
find2ndDifferentMinimum([5, 4, 3, 2, 1]);
find2ndDifferentMinimum([1, 4, 8, 2, 1]);