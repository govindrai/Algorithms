// fictiv coding challenge
// https://coderpad.io/T4FNXKNC

// function add(num1, num2) {
//   return num1 + num2;
// }

// console.log(add(2, 5))



// function add(num) {
//   return function (newNum) {
//     return num + newNum;
//   }
// }

// console.log(add(2)(5))

function magicFunction(a, b) {
  console.log("I'm expensive")
  return Math.pow(a * 2 + b * 5 / 10, 2)
}


const savedCalculationsHash = {};

class Adder {

  constructor() {
    this.total = 0;
  }
  
  magic(num) {
    const savedCalculation = savedCalculationsHash[`${this.total}${num}`];
    
    if (savedCalculation) {
      this.total = savedCalculation;
    } else {
      const previousTotal = this.total
      this.total = magicFunction(this.total, num);
      savedCalculationsHash[`${previousTotal}${num}`] = this.total;
    }
    return this;
  }
  
  result() {
    return this.total;
  }
  
}



// 0, 2
// 2, 5
// x, 10
// 0, 2
// 2, 5
// x, 10

const start = new Adder();
console.log(start.magic(2).magic(5).magic(10).result())
const secondAdder = new Adder();
console.log(secondAdder.magic(2).magic(5).magic(10).result())



// '"base case" passed'
// '"failz" failed with "expected 8 but got 7"'

// function test(description, callback) { 
//   try {
//     callback();
//     console.log(`"${description}" passed`);
//   } catch (e) {
//     console.log(`"${description}" failed with "${e.message}"`);
//   }
// };

// function expectEquals(a, b) { 
//     if (a !== b) { 
//         throw new Error(`expected ${a}, but got ${b}`);
//     }
// };

// test('base case', () => { 
//     const start = new Adder();
//     expectEquals(start.add(2).add(5).result(), 7);
// });

// test('failz', () => { 
//   const start = new Adder();
//   expectEquals(start.add(2).add(5).result(), 8);
// });

