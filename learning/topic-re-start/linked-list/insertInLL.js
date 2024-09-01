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
    constructor(data = 0, next = null) {
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

// Insert a new node with value 3 at position 1
list = new Node(1, new Node(2));
solve(list, 3, 1);
printList(result);  // Output: 1 -> 3 -> 2

// Helper function to print the linked list
function printList(head) {
    let current = head;
    while (current != null) {
        process.stdout.write(current.data + " -> ");
        current = current.next;
    }
    console.log("null");
}