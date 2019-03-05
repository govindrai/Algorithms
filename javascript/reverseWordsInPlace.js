arr = ['a', 'b', 'c', 'd'];
function reverseElementsInPlace(arr, startIndex, endIndex) {
  let midpoint = Math.floor((endIndex - startIndex + 1) / 2);
  for (let i = 0; i < midpoint; i++) {
    const temp = arr[startIndex + i];
    arr[startIndex + i] = arr[endIndex - i];
    arr[endIndex - i] = temp;
  }
  console.log(arr);
}

// reverseElementsInPlace(arr, 0, 3);

const message = ['c', 'a', 'k', 'e', ' ', 'p', 'o', 'u', 'n', 'd', ' ', 's', 't', 'e', 'a', 'l'];
function reverseWordsInPlace(message) {
  reverseElementsInPlace(message, 0, message.length - 1);
  startOfWords = [0];
  for (let i = 0; i < message.length; i++) {
    if (message[i] === ' ' && i + 1 !== message.length) {
      startOfWords.push(i + 1);
    }
  }
  startOfWords.push(message.length + 1);
  for (let i = 0; i < startOfWords.length - 1; i++) {
    // if ()
    reverseElementsInPlace(message, startOfWords[i], startOfWords[i + 1] - 2);
  }
  console.log(message);
}

reverseWordsInPlace(message);
