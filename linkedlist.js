'use strict';
class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }
  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
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
      return;
    }
    let currNode = this.head;
    let previousNode = this.head;

    while (currNode !== null && currNode.value !== item) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
    return console.log('removed');
  }
  insertBefore(newNode, value) {
    let currNode = this.head;
    let previousNode = this.head;

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
    previousNode.next = new _Node(newNode, currNode);
    return console.log('Successfully added');
  }
  insertAfter(newNode, value) {
    let currNode = this.head;
    let previousNode = this.head;

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
    currNode.next = new _Node(newNode, currNode.next);
    console.log(currNode.next);
    return console.log('Successfully added');
  }
  insertAt(newNode, position) {
    let currNode = this.head;
    let previousNode = this.head;

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

    previousNode.next = new _Node(newNode, currNode);
    console.log(previousNode.next);
    return console.log(`Successfully added at ${position}`);
  }
}

let SLL = new LinkedList();
SLL.insertLast('Apollo');
SLL.insertLast('Boomer');
SLL.insertLast('Helo');
SLL.insertLast('Husker');
SLL.insertLast('Starbuck');
SLL.insertLast('Tauhida');
display(SLL);

function display(ll) {
  let node = ll.head;
  while (node !== null) {
    // console.log(node.value);
    node = node.next;
  }
}

function size(ll) {
  let node = ll.head;
  let count = 0;
  while (node !== null) {
    count++;
    node = node.next;
  }
  return count;
}
// console.log(size(SLL));

function isEmpty(ll) {
  return ll.head === null;
}
// console.log(isEmpty(SLL));

function findPrevious(ll, value) {
  let currNode = ll.head;
  let prevNode = ll.head;
  if (!ll.head) {
    return null;
  }
  while (currNode.value !== value) {
    if (currNode.next === null) {
      return null;
    } else {
      prevNode = currNode;
      currNode = currNode.next;
    }
  }
  return prevNode.value;
}
// console.log(findPrevious(SLL,'Husker'));

function findLast(ll) {
  let node = ll.head;
  while (node.next !== null) {
    node = node.next;
  }
  return node.value;
}
// console.log(findLast(SLL));

// 4. Mystery program

// loops through a list and checks current node's value for duplicates to next node. If they are the same, it will skip past it and continue through the list.
// time complexity: Polynomial time O(n^2)
function WhatDoesThisProgramDo(lst) {
  // set pointer to the current node
  let current = lst.head;
  // loops while the current node is not null
  while (current !== null) {
    // set newNode to current node
    let newNode = current;
    // loops while the next node is not null and checks if we're not at the end of the list
    while (newNode.next !== null) {
      // checks for duplicates and if there are duplicates it will move past and go to the following node.
      if (newNode.next.value === current.value) {
        newNode.next = newNode.next.next;
      } else {
        newNode = newNode.next;
      }
    }
    // move along the list
    current = current.next;
  }
}

// 5. Reverse a list

function reverseList(ll) {
  // input: 1 -> 2 -> 3
  // output: 1 <- 2 <- 3
  let currNode = ll.head;
  let prevNode = null;

  while (currNode.next !== null) {
    let currTemp = currNode;
    let prevTemp = prevNode;

    prevNode = currNode;
    currNode = currNode.next;
    currTemp.next = prevTemp;
  }
  currNode.next = prevNode;
  ll.head = currNode;
  return ll;
}

// console.log(reverseList(SLL));

// 6. 3rd from the end

function thirdFromEnd(ll) {
  let currNode = ll.head;

  while (currNode.next.next.next !== null) {
    currNode = currNode.next;
  }
  return currNode;
}

// console.log(thirdFromEnd(SLL));

// 7. Middle of a list

function middleOfList(ll) {
  const middle = Math.ceil(size(ll) / 2);
  console.log(middle);
  let counter = 0;
  let currNode = ll.head;
  let prevNode = ll.head;
  while (counter < middle) {
    if (currNode.next === null) {
      return new Error('Linked list not long enough');
    } else {
      prevNode = currNode;
      currNode = currNode.next;
    }
    counter++;
  }
  return prevNode;
}

console.log(middleOfList(SLL));

// 8. Cycle in a list

function cycleList(ll) {
  let currNode = ll.head;
  // iterate through the list to check if currNode has next value pointing to an earlier node?
}

const main = () => {
  let SLL = new LinkedList();
  SLL.insertLast('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertLast('Tauhida');
  // SLL.remove('squirrel');
  // SLL.insertBefore('Athena', 'Boomer');
  // SLL.insertAfter('Hotdog', 'Helo');
  // SLL.insertAt('Kat', 3);
  // SLL.remove('Tauhida');
  // SLL.remove('Starbuck');
  // SLL.remove('Athena');
  // return SLL;
};

// console.log(main());
