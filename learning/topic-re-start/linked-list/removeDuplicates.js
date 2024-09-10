/**
 * Problem Description
Given a sorted linked list, delete all duplicates such that each element appears only once.



Problem Constraints
0 <= length of linked list <= 106



Input Format
First argument is the head pointer of the linked list.



Output Format
Return the head pointer of the linked list after removing all duplicates.



Example Input
Input 1:

 1->1->2
Input 2:

 1->1->2->3->3


Example Output
Output 1:

 1->2
Output 2:

 1->2->3


Example Explanation
Explanation 1:

 Each element appear only once in 1->2.
 */

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function solve(A) {
    if (!A) return null;

    let current = A;

    while (current.next !== null) {
        if (current.data === current.next.data) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }

    return A;
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

let list1 = createLinkedList([1, 1, 2]);
printList(list1);
printList(solve(list1));