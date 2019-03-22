class Stack {
  constructor() {
    this.stack = [];
  }

  push(val) {
    this.stack.push(val);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    if (this.length()) { 
      return this.stack[this.stack.length - 1];
    }
    console.log("Stack is empty");
  }

  length() {
    return this.stack.length;
  }
}

const stack = new Stack();

console.log(stack.push(2));
console.log(stack.push(4));
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

module.exports = Stack;
