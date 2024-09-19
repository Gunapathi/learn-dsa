/**
 * Problem Description
Given a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).



Problem Constraints
1 <= number of nodes <= 105



Input Format
First and only argument is root node of the binary tree, A.



Output Format
Return a 2D integer array denoting the level order traversal of the given binary tree.



Example Input
Input 1:

    3
   / \
  9  20
    /  \
   15   7
Input 2:

   1
  / \
 6   2
    /
   3


Example Output
Output 1:

 [
   [3],
   [9, 20],
   [15, 7]
 ]
Output 2:

 [ 
   [1]
   [6, 2]
   [3]
 ]


Example Explanation
Explanation 1:

 Return the 2D array. Each row denotes the traversal of each level.
 */

class Queue {
    constructor() {
        this.queue = [];
    }

    peak() {
        return this.queue[0];
    }

    pop() {
        return this.queue.pop();
    }

    pop_front() {
        return this.queue.shift();
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    push(val) {
        this.queue.push(val);
    }
}

function solve(A) {
    if (!A) return [];

    let queue = new Queue();
    let result = [];

    queue.push(A);

    while (!queue.isEmpty()) {
        let levelSize = queue.queue.length;
        let currentLevel = [];

        for (let i = 0; i < levelSize; i++) {
            let node = queue.pop_front();
            currentLevel.push(node.data);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        result.push(currentLevel);
    }

    return result;
}

