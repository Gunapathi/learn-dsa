/**
 * Problem Description

Given an integer, A. Find and Return first positive A integers in ascending order containing only digits 1, 2, and 3.


NOTE: All the A integers will fit in 32-bit integers.




Problem Constraints

1 <= A <= 29500



Input Format

The only argument given is integer A.



Output Format

Return an integer array denoting the first positive A integers in ascending order containing only digits 1, 2 and 3.



Example Input

Input 1:

 A = 3
Input 2:

 A = 7


Example Output

Output 1:

 [1, 2, 3]
Output 2:

 [1, 2, 3, 11, 12, 13, 21]


Example Explanation

Explanation 1:

 Output denotes the first 3 integers that contains only digits 1, 2 and 3.
Explanation 2:

 Output denotes the first 7 integers that contains only digits 1, 2 and 3.
 */

class Queue {
    constructor() {
        this.queue = [];
    }

    peak_front() {
        return this.queue[0];
    }

    peak_rear() {
        return this.queue[this.queue.length - 1];
    }

    pop_rear() {
        return this.queue.pop();
    }

    pop_front() {
        return this.queue.shift();
    }

    push_rear(x) {
        this.queue.push(x);
    }

    isEmpty() {
        return this.queue.length === 0;
    }
}

function solve(A) {
    if (A === 1) {
        return [1];
    } else if (A === 2) {
        return [1, 2];
    } else if (A === 3) {
        return [1, 2, 3];
    }

    let result = [];
    const queue = new Queue();

    queue.push_rear(1);
    queue.push_rear(2);
    queue.push_rear(3);

    while (result.length < A) {
        let currentElement = queue.pop_front();
        result.push(currentElement);

        if (result.length < A) {
            queue.push_rear(currentElement * 10 + 1);
        }
        if (result.length < A) {
            queue.push_rear(currentElement * 10 + 2);
        }
        if (result.length < A) {
            queue.push_rear(currentElement * 10 + 3);
        }
    }

    return result;
}

console.log(solve(3)); // [1, 2, 3]
console.log(solve(7)); // [1, 2, 3, 11, 12, 13, 21]