import { Structure } from './structure';
import { NullTemplateVisitor } from '@angular/compiler';

export const STRUCTURES: Structure[] = [
  {
    name: 'Linked Lists',

    imagePath: '/assets/images/linkedlist.png',
    intro0: `In a linked list, each element points to the next element in the list 
    (in comparison an array pairs elements with a numeric index). This allows for faster 
    insertion of new elements - you can insert elements at the front of the list (called the "head") in constant time O(1). 
    With an array the time complexity to insert new elements depends on the size of the array (i.e. it's 
    linear at O(n)).`,
    intro1: `If you implement the linked list with a pointer to the end of the list as well (the end is called the "tail), 
    inserting elements at the end also has a time complexity of O(1). If there's no pointer to the tail the complexity 
    is O(n), as you have to traverse the list to find the end before insertion. Retrieving an element from the list 
    has a time complexity of O(n), as you have to travel through the list each node at a time to find the element. In comparison
    an array which has a retrieval time complexity of O(1). An array should therefore be used if access speed is more important that 
    insertion speed.`,
    body0: `Each element in the list is stored as a Node with two properties - its data and a pointer to the 
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
      from the queue in the order they're inserted (just like a physical queue).`,
    intro1: `Adding an element to the queue is called enqueuing, removing an element is called
    dequeuing`,
    body0: `Queues can be implemented using a linked list - all that's needed is for the list 
    to keep track of the front of the queue. When we're dequeing (removing) an element, we simply ask the pointer
    looking at the front of the queue to look at the next element in the list instead. With enqueuing, we
    traverse the queue until the end and then add the new element:`,
    body1: `We search a queue the same way we search a linked list - with a pointer that traverses
    through each node. The only difference is that we start with the pointer looking at the 'front',
    rather than at the 'head' as we did with a linked list:`,
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
    
      // If there's nothing at the front of the queue, 
      // add the element to the front
      enqueue(data) {
        if (!this.front) {
          this.front = new Node(name, type);

        // Else traverse the queue and add the data to the end
        } else {
          let pointer = this.front;
          while (pointer.next != null) {
            pointer = pointer.next;
          }
          pointer.next = new Node(name, type);
        }
      }

      // By changing the front to the next in-line, 
      // the front of the queue is removed
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
    snippet1: `\n
    const linearSearch = (queue, value) => {
      if (!queue.front) return false;

      let pointer = queue.front;
      while (pointer.next != null) {
        if (pointer.data === value) return true;
        pointer = pointer.next;
      } 
      return false
    };
    \n`,
  },
  {
    imagePath: '/assets/images/stack.png',
    name: 'Stacks',
    intro0: `Stacks are Last-In Last-Out (LILO) - the last element added is the firt that's removed.
    We add elements to a stack by pushing them, and we remove elements by popping them - just like an
    array in JavaScript. The benefit of a Stack is that pushing and popping elements are in constant time
    - i.e. O(1) - provided we implement the Stack via a linked list. With an array pushing and popping is in
    linear time i.e. O(n).`,
    intro1: `JavaScript uses a call-stack to handle events, and web browsers use stacks with the back button by
    popping the last page you visited each time you press back.`,
    body0: `As mentioned above stacks can be implemented via a linked list - all that's needed is for the
    list to keep track of the top element i.e. the most recently added. To pop the top element, the pointer
    looking at the top simply looks at the next element instead:`,
    body1: `To search a stack we need a pointer that's looking at the top, we then traverse the stack
    until the end is reached:`,
    snippet0: `\n
    class Node {
      constructor(data) {
        this.data = data;
        this.previous = null;
      }
    }
    
    class Stack {
      constructor() {
        this.top = null;
      }
    
      push(data) {
        let node = new Node(data);
        node.previous = this.top;
        this.top = node;
      }
   
      pop() {
        let temp = this.top;
        this.top = this.top.previous;
        return temp;
      }
    
      peek() {
        return this.top;
      }
    }
    \n`,
    snippet1: `\n
    const linearSearch = (stack, value) => {
      if (!stack.top) return false;

      let pointer = stack.top;
      while (pointer.previous != null) {
        if (pointer.data === value) return true;
        pointer = pointer.previous;
      } 
      return false
    };
    \n`,
  },
  {
    imagePath: '/assets/images/tree.png',
    name: 'Trees',
    intro0: `A tree is a collection of nodes where each node can connect to more than one other node. 
    There's a hierachy to all of the nodes. The first node of the tree is called the root. When two 
    nodes are connected, the node closest to the root is the parent, the other node is the child.`,
    intro1: `Each node can have multiple child nodes but only one parent node. This is what distinguishes 
    the structure from other graphs (a tree is a type of graph, but as it has a simpler structure to other 
    graphs, it's helpful to consider its implementation first). As the root is the first node it has no 
    parent. If a node has no children it's called a leaf. A tree is therefore a non-linear data structure, as there 
    isn't one route connecting all the data. Arrays, stacks and queues are linear data structures as all of 
    the data is stored in sequence.`,
    body0: `Below is the implementation of a binary search tree. Each node can have a maximum of two children - a left child
    and a right child. Each left child is smaller than or equal to its parent node. Each right child is greater than its parent
    node:`,
    body1: `A binary search tree can be searched with a recursive function i.e. by a function that calls itself until it's resolved:`,
    snippet0: `\n
    // Each node stores its data, and a pointer to its 
    // left and right children
    class Node {
      constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
      }
    }
    
    class BinarySearchTree {
      constructor(){
        this.root = null;
      }

      // Insert a node into a binary search tree
      insert(val) {
        // If there tree's empty, the new data is the root
        if (this.root === null) {
          this.root = new Node(val);
        } 
      
        // Else find the correct location for the new data
        else {
          // Set a pointer to the root of the tree
          let pointer = this.root;

          // The loop will continue until the data is inserted
          while (pointer.data !== val) {

            // If our value is greater than the current node, 
            // traverse down the righthand side
            if (pointer.data < val) {

              // If there's no righthand node, create a new 
              // node with the value
              if (!pointer.right) {
                pointer.right = new Node(val);
        
              // Else continue traversing down the righthand side
              } else {
                pointer = pointer.right;
              }

            // If the value is smaller than the current node, 
            // traverse the lefthand side
            } else {

              // If there's no lefthand node, create a new 
              // node with the value
              if (!pointer.left) {      
                pointer.left = new Node(val);
        
              // Else continue traversing down the lefthand side
              } else {
                pointer = pointer.left;
              }
            }
          }
        }
      }
    }`,
    snippet1: `\n
    // Start the function with the tree's root, i.e. tree.root
    function searchBST(root, value) {

      // If the root is null, return not found
      if (root === null) {
        console.log("Value not found");
      }

      // If the value is found, return the node
      if (root.data === value) { 
        return root; 
      }

      // If the value is less than the root's data search the lefthand 
      // side of the tree by recursively calling this function
      if (root.data > value) {
        return searchBST(root.left, value); 
      }

      // Else recursively search the righthand side 
      else { 
        return searchBST(root.right, value); 
      } 
    }`,
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
