/**
 * Problem Description
You are given A which is the head of a linked list. Print the linked list in space separated manner.

Note : The last node value must also be succeeded by a space and after printing the entire list you should print a new line



Problem Constraints
1 <= size of linked list <= 105

1 <= value of nodes <= 109



Input Format
The first argument A is the head of a linked list.


Output Format
You dont need to return anything


Example Input
Input 1:
A = 1 -> 2 -> 3
Input 2:
A = 4 -> 3 -> 2 -> 1


Example Output
Output 1:
1 2 3
Output 2:
4 3 2 1


Example Explanation
For Input 1:
We print the given linked list
For Input 2:
We print the given linked list
 */

// Definition of JS linkedList
// function LinkedList(data, next = null) {
//     this.data = data;
//     this.next = next;
// }

function solve(A) {
    let current = A,
        result = '';

    while (current) {
        result += current.data + ' ';
        current = current.next;
    }

    console.log(result);
}

console.log(solve([1, 2, 3])) // 1 2 3 
console.log(solve([4, 3, 2, 1])) // 4 3 2 1