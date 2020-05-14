import { Structure } from './structure';
import { NullTemplateVisitor } from '@angular/compiler';

export const STRUCTURES: Structure[] = [
  {
    name: 'Linked Lists',

    imagePath: '/assets/images/linkedlist.png',
    intro0: `In a linked list, each element points to the next element in the list 
    (instead of being paired with a numeric index like an array). This allows for faster 
    insertion of new elements - you can insert elements at the head in constant time O(1), 
    whereas with an array the time complexity depends on the size of the array (i.e. it's 
    linear at O(n)).`,
    intro1: `If you implement the linked list with a pointer to the tail, 
    inserting elements at the end is also O(1), otherwise it's O(n) as you have to 
    traverse the list to find the end before insertion. Retrieving an element from the list 
    has a time complexity of O(n), compared to an array which has a retrieval time complexity 
    of O(1). An array should therefore be used if access speed is more important that 
    insertion speed.`,
    body0: `Each element in the list is stored as a Node with two properties - its data and the 
    next node in the list. To add a new element, we make a new Node with the current list head as its 
    'next' property. The code below implements this with the insertHead(data) method:`,
    body1: `To search an unsorted linked list, each element will need to be looked at. We use a 
    pointer that's assigned to the head, and then traverse the list until the end:`,
    snippet0: `\n
    class Node {
      constructor(data, next = null) {
        this.data = data;
        this.next = next;
      }
    }
    
    class LinkedList {
      constructor() {
        this.head = null;
        this.size = 0;
      }
    
      insertHead(data) {
        this.head = new Node(data, this.head);
        this.size++;
      }
    }
    \n`,
    snippet1: `\n
    const linearSearch = (list, value) => {
      if (!list.head) return false;

      let pointer = list.head;
      while (pointer.next != null) {
        if (pointer.data === value) return true;
        pointer = pointer.next;
      } 
      return false
    };
    \n`,
  },

  {
    imagePath: '/assets/images/queue.png',
    name: 'Queues',
    intro0: `A queue is a data structure that's First-In First-Out (FIFO) - elements are removed 
      from the queue in the order they were inserted. For example the first element added to 
      the queue is the first element that's removed, the second element added is the second 
      removed and so on (i.e. just like a queue in real life).`,
    intro1: `Adding an element to the queue is called enqueuing, removing an element is called
    dequeuing. Queues can be implemented using a linked list - all that's needed is for the list 
    to keep track of the front of the queue. When we're dequeing an element, we simply ask the pointer
    looking at the front of the queue to look at the next element in line instead. With enqueuing, we
    traverse the queue until the end and then add the new element:`,
    body0: null,
    body1: null,
    snippet0: `\n
    class Node {
      constructor(data) {
        this.name = data;
        this.next = null;
      }
    }
    
    class Queue {
      constructor() {
        this.front = null;
      }
    
      // If there's nothing at the front of the queue, add the element to the front
      enqueue(data) {
        if (!this.front) {
          this.front = new Node(name, type);
        // Else travers the queue and add the data to the end
        } else {
          let pointer = this.front;
          while (pointer.next != null) {
            pointer = pointer.next;
          }
          pointer.next = new Node(name, type);
        }
      }
      // By changing the front to the next in-line, the front of the queue is removed
      dequeue() {
        let temp = this.front;
        this.front = this.front.next;
        return temp;
      }
      // A method to look at the front of the queue is also useful
      peek() {
        return this.front;
      }
    }
    \n`,
    snippet1: null,
  },
  {
    imagePath: '/assets/images/stack.png',
    name: 'Stacks',
    intro0: null,
    intro1: null,
    body0: null,
    body1: null,
    snippet0: null,
    snippet1: null,
  },
  {
    imagePath: '/assets/images/tree.png',
    name: 'Trees',
    intro0: null,
    intro1: null,
    body0: null,
    body1: null,
    snippet0: null,
    snippet1: null,
  },
  {
    imagePath: '/assets/images/graph.png',
    name: 'Graphs',
    intro0: null,
    intro1: null,
    body0: null,
    body1: null,
    snippet0: null,
    snippet1: null,
  },
];
