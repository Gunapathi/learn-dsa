/**
 * Problem Description
Given a linked list A, remove the B-th node from the end of the list and return its head.
For example, given linked list: 1->2->3->4->5, and B = 2.
After removing the second node from the end, the linked list becomes 1->2->3->5.

NOTE: If B is greater than the size of the list, remove the first node of the list.

Try doing it using constant additional space.



Problem Constraints
1 <= |A| <= 106


Input Format
The first argument of input contains a pointer to the head of the linked list. The second argument of input contains the integer B.


Output Format
Return the head of the linked list after deleting the B-th element from the end.


Example Input
Input 1:
A = 1->2->3->4->5
B = 2
Input 2:
A = 1
B = 1


Example Output
Output 1:
1->2->3->5
Output 2:
  


Example Explanation
Explanation 1:
In the first example, 4 is the second last element.
Explanation 2:
In the second example, 1 is the first and the last element.
 */

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function solve(A, B) {
    const length = getListLength(A);
    const target = length - B + 1;

    if (length < B || target <= 1) return A.next;

    let current = A;

    for (let i = 1; i < target - 1; i++) {
        current = current.next
    }

    current.next = current.next.next;

    return A;
}

// Helper function to create a list of nodes
function createLinkedList(arr) {
    if (arr.length == 0) return null

    let head = new Node(arr[0]),
        current = head;


    for (let i = 1; i < arr.length; i++) {
        current.next = new Node(arr[i]);
        current = current.next;
    }

    return head;
}

// Helper function to print the list of nodes
function printList(list) {
    let current = list,
        result = [];

    while (current != null) {
        result.push(current.data);
        current = current.next;
    }

    console.log(result.join(' -> '));
}

// Helper function to find length of nodes in the list
function getListLength(head) {
    if (!head) return null;

    let current = head,
        length = 0;

    while (current !== null) {
        length++;
        current = current.next;
    }

    return length;
}

let list1 = createLinkedList([1, 2, 3, 4, 5]);
printList(list1);
printList(solve(list1, 2));
