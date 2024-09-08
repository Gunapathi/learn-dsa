class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// start
function addAtStart(list, node, target) {
    let newNode = new Node(node);

    if (target <= 0 || !list) {
        newNode.next = list;
        return newNode;
    }

    return newNode
}

// end
function addAtEnd(list, node, target) {
    let newNode = new Node(node),
        current = list,
        index = 0;

    while (current.next != null && index < target - 1) {
        current = current.next;
        index++;
    }

    current.next = newNode;

    return list;
}

// Helper function - CREATE LINKED LIST
function createLinkedList(arr) {
    if (arr.length === 0) return null;

    let head = new Node(arr[0]);
    let current = head;

    for (let i = 1; i < arr.length; i++) {
        current.next = new Node(arr[i]);
        current = current.next
    }

    return head;
}

// Helper function - Print Linked List
function printList(head) {
    let current = head;
    let result = [];

    while (current != null) {
        result.push(current.data);
        current = current.next;
    }

    console.log(result.join(' -> '));
}

// Test cases 1
let list1 = createLinkedList([2, 1]);
console.log("Original list:");
printList(list1);
let result1 = addAtStart(list1, 3, 0);
console.log("Insertion at start:");
printList(result1);

// Test cases 2
let list2 = createLinkedList([1, 2]);
console.log("Original list:");
printList(list2);
let result2 = addAtEnd(list2, 3, 2);
console.log("Insertion at end:");
printList(result2);