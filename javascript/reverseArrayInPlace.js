arr = ['a','b','c','d'];
function reverseElementsInPlace(arr) {
  let midpoint = Math.floor(arr.length / 2)
 if (arr.length % 2 !== 0) {
   midpoint--;
 }
 for (let i = 0; i < midpoint; i++) {
   const temp = arr[i];
   arr[i] = arr[arr.length - 1 - i]
   arr[arr.length - 1 -i] = temp;
 }
 console.log(arr);
 return arr;
}

reverseElementsInPlace(arr)