/**
 * Problem Description
Given a singly linked list A and an integer B, reverse the nodes of the list B at a time and return the modified linked list.



Problem Constraints
1 <= |A| <= 103

B always divides A



Input Format
The first argument of input contains a pointer to the head of the linked list.

The second arugment of input contains the integer, B.



Output Format
Return a pointer to the head of the modified linked list.



Example Input
Input 1:

 A = [1, 2, 3, 4, 5, 6]
 B = 2
Input 2:

 A = [1, 2, 3, 4, 5, 6]
 B = 3


Example Output
Output 1:

 [2, 1, 4, 3, 6, 5]
Output 2:

 [3, 2, 1, 6, 5, 4]


Example Explanation
Explanation 1:

 For the first example, the list can be reversed in groups of 2.
    [[1, 2], [3, 4], [5, 6]]
 After reversing the K-linked list
    [[2, 1], [4, 3], [6, 5]]
Explanation 2:

 For the second example, the list can be reversed in groups of 3.
    [[1, 2, 3], [4, 5, 6]]
 After reversing the K-linked list
    [[3, 2, 1], [6, 5, 4]]
 */

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function solve(A, B) {
    if (B === 1) return A;

    let prev = null;
    let current = A;
    let count = 0;

    // Reverse first B nodes of the linked list
    while (current !== null && count < B) {
        let nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
        count++;
    }

    // After reversing, the `A` node is now the last node of the reversed group.
    // `current` now points to the (B+1)th node.
    if (current !== null) {
        A.next = solve(current, B); // Recursively reverse the remaining list in groups of B
    }

    // `prev` is now the head of the reversed group, return it
    return prev;
}

function createLinkedList(arr) {
    if (arr.length < 1) return null;

    let head = new Node(arr[0]),
        current = head;

    for (let i = 1; i < arr.length; i++) {
        current.next = new Node(arr[i])
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

let list1 = createLinkedList([1, 2, 3, 4, 5, 6]);
printList(list1);
printList(solve(list1, 2));