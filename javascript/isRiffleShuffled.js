function isSingleRiffle(halfA, halfB, shuffledDeck) {
  const numOfCards = halfA.length + halfB.length
  if (numOfCards !== shuffledDeck.length) {
    console.log("YO SOME CARDS ARE MISSING YO!!")
    return false;
  }

  halfAIndex = 0;
  halfBIndex = 0;
  for (let i = 0; i < numOfCards; i++) {
    const card = shuffledDeck[i]
    if (halfA.length === halfAIndex ) {
      if (card !== halfB[halfBIndex]) {
        return false;
      }
      halfBIndex++;
    } else if (halfB.length === halfBIndex) {
      if (card !== halfA[halfAIndex]) {
        return false;
      }
      halfAIndex++
    } else {
      if (card === halfA[halfAIndex]) {
        halfAIndex++
        continue;
      } else if (card === halfB[halfBIndex]) {
        halfBIndex++
        continue;
      } else {
        return false;
      }
    }
  }
  console.log("IT'S SINGLE RIFFED BRO")
  return true;
}

isSingleRiffle([1, 4, 5], [2, 3, 6], [1, 2, 3, 4, 5, 6]);


function ensureRiffIsShuffled(halfA, halfB, shuffledDeck) {
  const numOfCards = halfA.length + halfB.length
  if (numOfCards !== shuffledDeck.length) {
    console.log("YO SOME CARDS ARE MISSING YO!!")
    return false;
  }

  let halfAIndex = 0;
  let halfBIndex = 0;
  let isAMixed = false;
  let isBMixed = false;

  for (let i = 0; i < numOfCards; i++) {
    const card = shuffledDeck[i]
    if (halfA.length !== halfAIndex && card === halfA[halfAIndex]) {
      if (!isAMixed && isBMixed && halfBIndex === halfB.length) {
        console.log("YO B WAS PUT INTO THE DECK FIRST, and never shuffled w/ A")
        return false
      }
      isAMixed = true;
      halfAIndex++;
    } else if (halfB.length !== halfBIndex && card === halfB[halfBIndex]) {
      if (!isBMixed && isAMixed && halfAIndex === halfA.length) {
        console.log("YO A WAS PUT INTO THE DECK FIRST, and never shuffled w/ B")
        return false;
      }
      isBMixed = true
      halfBIndex++
    } else {
      return false;
    }
  }
  console.log("IT'S SINGLE RIFFED BRO")
  return true;
}

ensureRiffIsShuffled([1, 4, 5], [2, 3, 6], [1, 2, 3, 4, 5, 6])
ensureRiffIsShuffled([1, 4, 5], [2, 3, 6], [1, 4, 5, 2, 3, 6])
ensureRiffIsShuffled([1, 4, 5], [2, 3, 6], [2, 3, 6, 1, 4, 5])
ensureRiffIsShuffled([1, 4, 5], [2, 3, 6], [1, 4, 2, 5, 3, 6])
ensureRiffIsShuffled([1, 4, 5], [2, 3, 6], [1, 4, 2, 5, 3])