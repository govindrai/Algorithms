class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
  }
  enqueue(value) {
    this.queue.push(value);
    console.log('Queue', this.queue);
    return this;
  }
  dequeue() {
    if (this.length() > 0) {
      const element = this.queue[this.front];
      this.queue[this.front] = null;
      this.front++;
      console.log('dequeued this element ', element);
    } else {
      console.log('Queue is empty');
    }
    console.log('Queue', this.queue);
    return this;
  }

  length() {
    return this.queue.length - this.front;
  }
}

queue = new Queue();
queue
  .enqueue(5)
  .enqueue(4)
  .enqueue(8)
  .enqueue(6)
  .dequeue()
  .enqueue(9)
  .dequeue()
  .dequeue()
  .dequeue()
  .dequeue()
  .dequeue();

class QueueUsingTwoArray {
  constructor() {
    this.arr1 = [];
    this.arr2 = [];
  }

  enqueue(value) {
    this.arr1.push(value);
    return this
  }

  dequeue() {
    if (this.arr2.length > 0) {
      const element = this.arr2.pop();
      console.log("Element was dequeued: ", element);
    } else if (this.arr1.length > 0) {
      while (this.arr1.length > 0) {
        this.arr2.push(this.arr1.pop())
      }
      const element = this.arr2.pop();
      console.log("Element was dequeued: ", element);
    } else {
      console.log("Queue is empty, nothing to dequeue");
    }
    return this;
  }

  getLength() {
    console.log(this.arr1, this.arr2);
    console.log("Length of Queue", this.arr1.length + this.arr2.length);
  }
}

queue1 = new QueueUsingTwoArray();
queue1
  .enqueue(5)
  .enqueue(4)
  .enqueue(8)
  .enqueue(6)
  .dequeue()
  .enqueue(9)
  .dequeue()
  .dequeue()
  .dequeue()
  .dequeue()
  .dequeue();
