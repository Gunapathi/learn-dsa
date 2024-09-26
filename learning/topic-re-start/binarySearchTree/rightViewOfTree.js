/**
 * Problem Description

Given a binary tree of integers denoted by root A. Return an array of integers representing the right view of the Binary tree.

Right view of a Binary Tree is a set of nodes visible when the tree is visited from Right side.



Problem Constraints

1 <= Number of nodes in binary tree <= 100000

0 <= node values <= 10^9



Input Format

First and only argument is head of the binary tree A.



Output Format

Return an array, representing the right view of the binary tree.



Example Input

Input 1:

 
            1
          /   \
         2    3
        / \  / \
       4   5 6  7
      /
     8 
Input 2:

 
            1
           /  \
          2    3
           \
            4
             \
              5


Example Output

Output 1:

 [1, 3, 7, 8]
Output 2:

 [1, 3, 4, 5]


Example Explanation

Explanation 1:

Right view is described.
Explanation 2:

Right view is described.
 */

function TreeNode(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

function rightView(A) {
    if (A == null)
        return

    let ans = [];
    let queue = [];

    queue.push(A);

    while (queue.length) {

        let n = queue.length

        for (let i = 0; i < n; i++) {
            let front = queue.shift();

            if (i === 0) ans.push(front.data);

            if (front.right != null) queue.push(front.right)

            if (front.left != null) queue.push(front.left)
        }

    }

    return ans;
}

// Example usage:

// Create the first binary tree
let root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.right = new TreeNode(3);
root1.left.left = new TreeNode(4);
root1.left.right = new TreeNode(5);
root1.right.left = new TreeNode(6);
root1.right.right = new TreeNode(7);
root1.left.left.left = new TreeNode(8);

console.log(rightView(root1)); // Output: [1, 3, 7, 8]

// Create the second binary tree
let root2 = new TreeNode(1);
root2.left = new TreeNode(2);
root2.right = new TreeNode(3);
root2.left.right = new TreeNode(4);
root2.left.right.right = new TreeNode(5);

console.log(rightView(root2)); // Output: [1, 3, 4, 5]
