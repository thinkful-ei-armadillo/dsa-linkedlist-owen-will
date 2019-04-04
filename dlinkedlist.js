'use strict';

class _Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  insertFirst(item) {
    this.head = new _Node(item, this.head, null);
    if (this.head.next === null) {
      this.tail = this.head;
    }
  }
  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null, tempNode);
    }
  }
  find(item) {
    let currNode = this.head;
    if (!this.head) {
      return null;
    }
    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      } else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }
  remove(item) {
    if (!this.head) {
      return null;
    }
    if (this.head.value === item) {
      this.head = this.head.next;
      if (this.head === null) {
        this.tail === null;
      }
      return;
    }

    let currNode = this.head;
    let previousNode = null;

    while (currNode !== null && currNode.value !== item) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
    if (currNode.next === null) {
      this.tail === previousNode;
    }
    return console.log('removed');
  }
  insertBefore(newNode, value) {
    let currNode = this.head;
    let previousNode = null;

    if (!this.head) {
      return null;
    }

    while (currNode.value !== value) {
      if (currNode.next === null) {
        return new Error('Not found');
      } else {
        previousNode = currNode;
        currNode = currNode.next;
      }
    }
    previousNode.next = new _Node(newNode, currNode, previousNode);
    return console.log('Successfully added');
  }
  insertAfter(newNode, value) {
    let currNode = this.head;

    if (!this.head) {
      return null;
    }

    while (currNode.value !== value) {
      if (currNode.next === null) {
        return new Error('Not found');
      } else {
        currNode = currNode.next;
      }
    }
    currNode.next = new _Node(newNode, currNode.next, currNode);
    if (currNode.next === null) {
      this.tail = currNode;
    }
    console.log(currNode.next);
    return console.log('Successfully added');
  }
  insertAt(newNode, position) {
    let currNode = this.head;
    let previousNode = null;

    if (!this.head) {
      return null;
    }
    let counter = 0;
    while (counter < position) {
      if (currNode.next === null) {
        return new Error('Linked list not long enough');
      } else {
        previousNode = currNode;
        currNode = currNode.next;
      }
      counter++;
    }
    previousNode.next = new _Node(newNode, currNode, previousNode);

    console.log(previousNode.next);
    return console.log(`Successfully added at ${position}`);
  }
}

const mainDLL = () => {
  let DLL = new DoublyLinkedList();
  DLL.insertLast('Aquaria');
  DLL.insertLast('Caprica');
  DLL.insertLast('Gemenon');
  DLL.insertLast('Picon');
  DLL.insertLast('Sagittaron');

  DLL.insertLast('Tauron');

  DLL.remove('Picon');
};

function reverseList(dll) {
  // input: 1 -> 2 -> 3
  // output: 1 <- 2 <- 3
  let currNode = dll.tail;
  let nodeAfter = null;
  let nodeBefore = dll.tail.prev;
  // [0, 1, 2, 4, 5, 7]

  while (currNode.prev !== null) {
    // get original link relations of node
    let nodeAfterTemp = nodeAfter;
    let nodeBeforeTemp = nodeBefore;
    let currNodeTemp = currNode;
  }
  currNode.next = prevNode;
  ll.head = currNode;
  return ll;
}
