/**
 * Problem Description
Given a linked list of integers. Find and return the length of the longest palindrome list that exists in that linked list.

A palindrome list is a list that reads the same backward and forward.

Expected memory complexity : O(1)



Problem Constraints
1 <= length of the linked list <= 2000

1 <= Node value <= 100



Input Format
The only argument given is head pointer of the linked list.



Output Format
Return the length of the longest palindrome list.



Example Input
Input 1:

 2 -> 3 -> 3 -> 3
Input 2:

 2 -> 1 -> 2 -> 1 ->  2 -> 2 -> 1 -> 3 -> 2 -> 2


Example Output
Output 1:

 3
Output 2:

 5


Example Explanation
Explanation 1:

 3 -> 3 -> 3 is largest palindromic sublist
Explanation 2:

 2 -> 1 -> 2 -> 1 -> 2 is largest palindromic sublist.
 */

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function solve(A) {
    let prev = null;
    let current = A;
    let maxLen = 0;

    // Helper function to count the length of palindromes centered around current node
    function countPalindrome(prev, next) {
        let count = 0;
        while (prev && next && prev.data === next.data) {
            count++;
            prev = prev.next;
            next = next.next;
        }
        return count;
    }

    // Traverse through the linked list, reversing the first half incrementally
    while (current !== null) {
        let next = current.next;

        // Check for odd-length palindrome (centered at current node)
        let oddLen = 2 * countPalindrome(prev, next) + 1;
        maxLen = Math.max(maxLen, oddLen);

        // Check for even-length palindrome (centered between prev and current)
        let evenLen = 2 * countPalindrome(prev, current);
        maxLen = Math.max(maxLen, evenLen);

        // Reverse the current node and move to the next
        current.next = prev;
        prev = current;
        current = next;
    }

    return maxLen;
}

// Helper function to create linked list
function createLinkedList(arr) {
    if (arr.length == 0) return null;

    let head = new Node(arr[0]),
        current = head;

    for (let i = 1; i < arr.length; i++) {
        current.next = new Node(arr[i]);
        current = current.next;
    }

    return head;
}

// helper function so print linked list
function printList(list) {
    let current = list,
        result = [];

    while (current != null) {
        result.push(current.data);
        current = current.next;
    }

    console.log(result.join(' -> '));
}

const list1 = createLinkedList([2, 3, 3, 3]);
createLinkedList(list1);
printList(list1);