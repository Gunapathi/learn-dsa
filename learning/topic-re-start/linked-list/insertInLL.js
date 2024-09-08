/**
 * Problem Description
You are given A which is the head of a linked list. Also given is the value B and position C. Complete the function that should insert a new node with the said value at the given position.

Notes:

In case the position is more than length of linked list, simply insert the new node at the tail only.
In case the pos is 0, simply insert the new node at head only.
Follow 0-based indexing for the node numbering.


Problem Constraints
0 <= size of linked list <= 105

1 <= value of nodes <= 109

1 <= B <= 109

0 <= C <= 105



Input Format
The first argument A is the head of a linked list.

The second argument B is an integer which denotes the value of the new node

The third argument C is an integer which denotes the position of the new node



Output Format
Return the head of the linked list


Example Input
Input 1:
A = 1 -> 2
B = 3
C = 0
Input 2:
A = 1 -> 2
B = 3
C = 1


Example Output
Output 1:
3 -> 1 -> 2
Output 2:
1 -> 3 -> 2


Example Explanation
For Input 1:
The new node is add to the head of the linked list
For Input 2:
The new node is added after the first node of the linked list
 */

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function solve(A, B, C) {
    let newNode = new Node(B);

    // if C = 0 or A = [], handle the case here
    if (C <= 0 || !A) {
        newNode.next = A;
        return newNode;
    }

    let current = A,
        index = 0;

    // move current node to the prev node of the end or to the target
    while (current.next != null && index < C - 1) {
        current = current.next;
        index++;
    }

    // stop before the end or the target
    // asign the address of last or target node to newNode & move current to newNode
    newNode.next = current.next;
    current.next = newNode;

    return A;
}

// Helper function to create a linked list from an array
function createLinkedList(arr) {
    if (arr.length === 0) return null;
    let head = new Node(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new Node(arr[i]);
        current = current.next;
    }
    return head;
}

// Helper function to print the linked list
function printList(head) {
    let current = head;
    let result = [];
    while (current !== null) {
        result.push(current.data);
        current = current.next;
    }
    console.log(result.join(' -> '));
}

// Test cases 1
console.log("Test Case 1:");
let list1 = createLinkedList([1, 2]);
console.log("Original list:");
printList(list1);
let result1 = solve(list1, 3, 0);
console.log("After inserting 3 at position 0:");
printList(result1);

// Test cases 2
console.log("\nTest Case 2:");
let list2 = createLinkedList([1, 2]);
console.log("Original list:");
printList(list2);
let result2 = solve(list2, 3, 1);
console.log("After inserting 3 at position 1:");
printList(result2);

// Test cases 3
console.log("\nTest Case 3:");
let list3 = createLinkedList([1, 2]);
console.log("Original list:");
printList(list3);
let result3 = solve(list3, 3, 5);  // Position beyond list length
console.log("After inserting 3 at position 5 (beyond list length):");
printList(result3);