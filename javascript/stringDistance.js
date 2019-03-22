function isStringMatchingWithDistance(str1, str2, distance) {
  let str2pos = 0;
  let mismatches = 0;
  if (Math.abs(str1.length-str2.length) > 1) {
    return false;
  }

  for (let i = 0; i < str1.length; i++) {
    if (str1[i].toLowerCase() !== str2[str2pos].toLowerCase()) {
      str2pos++;
      if (str1[i].toLowerCase() !== str2[str2pos].toLowerCase()) {
        return false
      }
      mismatches++;
      if (mismatches > 1) {
        return false
      }
    }
    
    str2pos++;
  }

  return true;
}

console.log(isStringMatchingWithDistance('abc', 'abc')); // true
console.log(isStringMatchingWithDistance('abc', 'ABC')); // true
console.log(isStringMatchingWithDistance('abc', 'ABCD')); // true
console.log(isStringMatchingWithDistance('abc', 'BCD')) // false
console.log(isStringMatchingWithDistance('abc', 'AGBCD')) // false
console.log(isStringMatchingWithDistance('abC', 'AC')) // true5
