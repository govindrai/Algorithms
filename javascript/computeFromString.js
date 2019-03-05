// https://coderpad.io/67WMDDZE
// You are building an educational website and want to create a simple calculator for students to use. The calculator will only allow addition and subtraction of positive integers.

// Given an expression string using the "+" and "-" operators like "5+16-2", write a function to find the total.

// Sample input/output:
// calculate("6+9-12")  => 3
// calculate("1+2-3+4-5+6-7") => -2
// calculate("255") => 255

var expression1 = '6+9-12'; // = 3
var expression2 = '1+2-3+4-5+6-7'; // = -2
var expression3 = '255'; // = 255
var expression4 = '1+2+3+4-5-6-7'; // -8
var expression5 = '600+9-12'; // 597
var expression6 = '1-2-3-4'; // -8

// You are building an educational website and want to create a simple calculator for students to use. The calculator will only allow addition and subtraction of positive integers.

// We also want to allow parentheses in our input. Given an expression string using the "+", "-", "(", and ")" operators like "5+(16-2)", write a function to parse the string and evaluate the result.

// Sample output:
//   calculate("5+16-((9-6)-(4-2))") => 20
//   calculate("22+(2-4)") => 20
//   calculate("6+9-12") => 3
//   calculate("((1024))") => 1024

var expression2_1 = '5+16-((9-6)-(4-2))';
var expression2_2 = '22+(2-4)';
var expression2_3 = '6+9-12';
var expression2_4 = '((1024))';

// replace all parentheses with values
// if there are parentheses take the subset from start parenthese to end parenthese
// recursively calls should return a value which should

('5+16-((9-6)-(4-2))');
function complexStringComputation(str) {
  let newStr = '';
  let parenthesesStr = '';
  let startBracketFound = false;
  const parenthesesArr = [];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === '(') {
      if (startBracketFound === true) {
        parenthesesStr += char;
      }
      startBracketFound = true;
      parenthesesArr.push('(');
    } else if (char === ')') {
      parenthesesArr.pop();
      if (parenthesesArr.length === 0) {
        newStr += complexStringComputation(parenthesesStr);
        startBracketFound = false;
        parenthesesStr = '';
      } else {
        parenthesesStr += char;
      }
    } else if (startBracketFound) {
      parenthesesStr += char;
    } else {
      newStr += char;
    }
  }

  return stringComputation(newStr);
}

console.log(complexStringComputation(expression2_1));

function stringComputation(str) {
  let total = 0;
  let numberStr = '';
  let nextOperation = '+';

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char !== '+' && char !== '-') {
      numberStr += char;
      console.log('numberStr', numberStr);
    } else {
      const parsedNumber = parseInt(numberStr);
      console.log('parsedNumber', parsedNumber);
      if (nextOperation === '+') {
        total += parsedNumber;
      } else {
        total -= parsedNumber;
      }
      nextOperation = char;
      numberStr = '';
    }
  }

  const parsedNumber = parseInt(numberStr);
  if (nextOperation === '+') {
    total += parsedNumber;
  } else {
    total -= parsedNumber;
  }

  return total;
}

console.log(stringComputation(expression4));
console.log(stringComputation(expression5));
console.log(stringComputation(expression6));
