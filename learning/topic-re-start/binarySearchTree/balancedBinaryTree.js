/**
 * Problem Description

Given a root of binary tree A, determine if it is height-balanced.

A height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.



Problem Constraints

1 <= size of tree <= 100000



Input Format

First and only argument is the root of the tree A.



Output Format

Return 0 / 1 ( 0 for false, 1 for true ) for this problem.



Example Input

Input 1:

    1
   / \
  2   3
Input 2:

 
       1
      /
     2
    /
   3


Example Output

Output 1:

1
Output 2:

0


Example Explanation

Explanation 1:

It is a complete binary tree.
Explanation 2:

Because for the root node, left subtree has depth 2 and right subtree has depth 0. 
Difference = 2 > 1. 
 */

function TreeNode(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

function isBalanced(A) {

    function checkHeightAndBalance(node) {
        // Base case: if the node is null, it's balanced and height is 0
        if (node === null) return 0;

        // Recursively check the height of the left subtree
        let leftHeight = checkHeightAndBalance(node.left);
        if (leftHeight === -1) return -1; // If left subtree is unbalanced

        // Recursively check the height of the right subtree
        let rightHeight = checkHeightAndBalance(node.right);
        if (rightHeight === -1) return -1; // If right subtree is unbalanced

        // Check if current node is balanced
        if (Math.abs(leftHeight - rightHeight) > 1) return -1; // Unbalanced

        // Return the height of the current node
        return Math.max(leftHeight, rightHeight) + 1;
    }

    // Call the helper function and check if the result is -1 (unbalanced)
    return checkHeightAndBalance(A) !== -1 ? 1 : 0;
}

// Example usage:

// Create a balanced binary tree
let root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.right = new TreeNode(3);

// Create an unbalanced binary tree
let root2 = new TreeNode(1);
root2.left = new TreeNode(2);
root2.left.left = new TreeNode(3);

console.log(isBalanced(root1)); // Output: 1 (balanced)
console.log(isBalanced(root2)); // Output: 0 (unbalanced)