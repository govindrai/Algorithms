let i = 0
memo = {}
function fibonnaci(n) {
  i++
  // console.log(i)
  if (n === 1 || n === 2) {
    return n - 1;
  }

  let a;
  let b;
  if (memo[n-1]) {
    a = memo[n-1]
  } else {
    a = fibonnaci(n-1);
    memo[n-1] = a;
  } 
  if (memo[n-2]) {
    b = memo[n-2]
  } else {
    b = fibonnaci(n-2);
    memo[n-2] = b
  }
  return a + b
}

function fibonnaciIterative(n) {
  if (n < 3) {
    return n - 1
  }
  let prevprev = 0
  let prev = 1
  let current
  for (let i = 3; i <= n; i++) {
    current = prev + prevprev;
    prevprev = prev
    prev = current
  }
  return current;
}

console.log(fibonnaciIterative(1))
console.log(fibonnaciIterative(2))
console.log(fibonnaciIterative(3))
console.log(fibonnaciIterative(4))
console.log(fibonnaciIterative(5))
console.log(fibonnaciIterative(6))
console.log(fibonnaciIterative(7))
console.log(fibonnaciIterative(8))

// console.log(fibonnaci(1));
// i=0
// console.log(fibonnaci(2));
// i=0
// console.log(fibonnaci(3));
// i=0
// console.log(fibonnaci(4));
// i=0
// console.log(fibonnaci(5));
// i=0
// console.log(fibonnaci(6));
// i=0
// console.log(fibonnaci(7));
// i=0
console.log(fibonnaci(8));
// console.log(fibonnaci(200));
