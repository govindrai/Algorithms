function calculate(strExpression) {
  // let operator = strExpression[0] === '-' ? '-' : '+';
  let operator = "+";
  let total = 0;
  let numberStr = "";
  indexOfLastOperator = "-1"

  for (let i = 0; i < strExpression.length; i++) {
    let char = strExpression[i];
    // if we are at the last character then we need to add the char to the number String
    if (i + 1 === strExpression.length) {
      numberStr += char;
    }

    if (i + 1 === strExpression.length || char === "+" || char === "-") {
      if (i + 1 !== strExpression.length) {
        // this is the case where it's forsure an operator
        if (i === 0) {
          operator = "-";
          continue;
        } else if (indexOfLastOperator === i - 1) {
          // if two negative operators happened in a row then we change it to a plus
          operator = "+";
          continue;
        }
      } 

      let num = Number(numberStr)
      operator === "+" ? total += num : total -= num;
      operator = char;
      indexOfLastOperator = i;
      numberStr = "";
    } else {
      numberStr += char
    }
  }

  return total
}
const expression1 = "-2+3-5"
console.log(calculate(expression1))
console.log(calculate('4--8'))

function advancedCalculate(strExpression) {
  let flattenedStr = ""
  let numOfParentheses = 0;
  let parenthesesStr = ""
  for (let i = 0; i < strExpression.length; i++) {
    char = strExpression[i]
    if (char === "(") {
      numOfParentheses++
      if (numOfParentheses > 1) {
        parenthesesStr += char;
      }
    } else if (char === ')') {
      numOfParentheses--
      if (numOfParentheses === 0) {
        flattenedStr += advancedCalculate(parenthesesStr)
        parenthesesStr = ""
      } else {
        parenthesesStr += char;
      }
    } else {
      if (numOfParentheses > 0) {
        parenthesesStr += char
      } else {
        flattenedStr += char;
      }
    }
  }

  return calculate(flattenedStr);
}

expression2 = "6+4-((-2+3)-(5+4))+8"

console.log(advancedCalculate(expression2))