var Stack = require('./stack');

class QueueTwoStacks {
  constructor() {
    this.stackA = new Stack();
    this.stackB = new Stack();
  }

  enqueue(val) {
    this.stackA.push(val);
  }

  dequeue() {
    if (this.stackB.peek()) {
      return this.stackB.pop();
    }

    while (this.stackA.peek()) {
      this.stackB.push(this.stackA.pop());
    }

    return this.stackB.pop();
  }

  peek() {
    if (this.stackB.peek()) {
      return this.stackB.peek();
    }

    while (this.stackA.peek()) {
      this.stackB.push(this.stackA.pop());
    }

    return this.stackB.peek();
  }
}

const queue = new QueueTwoStacks()

console.log(queue.enqueue(2))
console.log(queue.enqueue(4))
console.log(queue.enqueue(6))
console.log(queue.enqueue(8))
console.log(queue.dequeue())
console.log(queue.enqueue(10))
console.log(queue.peek())
console.log(queue.dequeue())
