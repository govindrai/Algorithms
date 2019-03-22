class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(headNode) {
    this.head = headNode || null;
    this.tail = headNode || null;
  }

  append(value) {
    const node = new Node(value);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
      return;
    }
    this.tail.next = node;
    this.tail = node;
  }

  prepend(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
  }

  insert(val, pos) {}

  delete(value) {
    // if the head happens to be null then throw an error
    if (this.head === null) {
      console.log('0 nodes in LinkedList. cannot delete delete');
      throw new Error();
    }

    // if the head happens to be the value then assign head to the next node
    if (this.head.value === value) {
      this.head = this.head.next;
      console.log('Removed Head');
      if (this.head === null) {
        console.log('Head is now null');
        this.tail = null;
        console.log('Tail is also now null');
      }
      return;
    }

    if (this.head.next === null) {
      throw new Error("value not found");
    }

    // otherwise, starting from the node after the head, setup the current and previous nodes
    let currentNode = this.head.next;
    let previousNode = this.head;

    //  if the current node happens to be the deletion value
    // assign the previous node to the current node's next node

    while (currentNode.next) {
      if (currentNode.value === value) {
        previousNode.next = currentNode.next;
        console.log(`removed ${currentNode.value} from the linked list`);
        if (currentNode.next === null) {
          console.log(`Tail was removed. Updating tail`);
          this.tail = previousNode;
        }
        return;
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    if (currentNode.value !== value) {
      console.log('value not found');
      throw new Error('value not found');
    }

    previousNode.next = null;
    console.log("Removed tail node");
    this.tail = previousNode;
    console.log(`tail node set to ${previousNode.value}`)
  }

  print() {
    if (this.head === null) {
      console.log("Empty Linked List");
      return;
    }
    console.log("Head and Tail are: ", this.head.value, this.tail.value);
    let currentNode = this.head;
    while (currentNode.next) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(currentNode.value);
  }

  lookup(value) {}
}

ll = new LinkedList();
ll.append(1);
ll.append(2);
ll.append(3);
ll.append(4);
ll.append(5);
ll.print();

ll.delete(1);
ll.print();

ll.delete(5);
ll.print();

ll.delete(3);
ll.print();

ll.delete(4);
ll.print();

ll.delete(2);
ll.print();