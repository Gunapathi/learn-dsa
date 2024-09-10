/**
 * Problem Description
Reverse a linked list A from position B to C.

NOTE: Do it in-place and in one-pass.



Problem Constraints
1 <= |A| <= 106

1 <= B <= C <= |A|



Input Format
The first argument contains a pointer to the head of the given linked list, A.

The second arugment contains an integer, B.

The third argument contains an integer C.



Output Format
Return a pointer to the head of the modified linked list.



Example Input
Input 1:

 A = 1 -> 2 -> 3 -> 4 -> 5
 B = 2
 C = 4

Input 2:

 A = 1 -> 2 -> 3 -> 4 -> 5
 B = 1
 C = 5


Example Output
Output 1:

 1 -> 4 -> 3 -> 2 -> 5
Output 2:

 5 -> 4 -> 3 -> 2 -> 1


Example Explanation
Explanation 1:

 In the first example, we want to reverse the highlighted part of the given linked list : 1 -> 2 -> 3 -> 4 -> 5 
 Thus, the output is 1 -> 4 -> 3 -> 2 -> 5 
Explanation 2:

 In the second example, we want to reverse the highlighted part of the given linked list : 1 -> 4 -> 3 -> 2 -> 5  
 Thus, the output is 5 -> 4 -> 3 -> 2 -> 1 
 */

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function solve(A, B, C) {
    if (B === C) return A; // No need to reverse if B == C

    let dummy = new Node(0);  // Create a dummy node to handle edge cases where B == 1
    dummy.next = A;

    let prev = dummy;  // `prev` will point to the node before the reversal starts
    for (let i = 1; i < B; i++) {
        prev = prev.next;
    }

    let start = prev.next;  // `start` is the first node of the sublist to reverse
    let nextNode = start.next;  // The node that follows `start`

    // Reverse the sublist from B to C
    for (let i = 0; i < C - B; i++) {
        start.next = nextNode.next;
        nextNode.next = prev.next;
        prev.next = nextNode;
        nextNode = start.next;  // Move to the next node in the original sublist
    }

    return dummy.next; // Return the new head of the list
}

function createLinkedList(arr) {
    if (arr.length < 1) return null;

    let head = new Node(arr[0]),
        current = head;

    for (let i = 1; i < arr.length; i++) {
        current.next = new Node(arr[i]);
        current = current.next;
    }

    return head;
}

function printList(list) {
    let current = list,
        result = [];

    while (current != null) {
        result.push(current.data);
        current = current.next;
    }

    console.log(result.join(' -> '));
}

let list1 = createLinkedList([1, 2, 3, 4, 5]);
printList(list1);
printList(solve(list1, 2, 4));