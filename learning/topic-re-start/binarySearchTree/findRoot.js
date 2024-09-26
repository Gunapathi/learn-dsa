/**
 * Problem Description

Given the inorder and postorder traversal of a tree, construct the binary tree.



NOTE: You may assume that duplicates do not exist in the tree.





Problem Constraints

1 <= number of nodes <= 105



Input Format

First argument is an integer array A denoting the inorder traversal of the tree.

Second argument is an integer array B denoting the postorder traversal of the tree.



Output Format

Return the root node of the binary tree.



Example Input

Input 1:

 A = [2, 1, 3]
 B = [2, 3, 1]
Input 2:

 A = [6, 1, 3, 2]
 B = [6, 3, 2, 1]


Example Output

Output 1:

   1
  / \
 2   3
Output 2:

   1  
  / \
 6   2
    /
   3


Example Explanation

Explanation 1:

 Create the binary tree and return the root node of the tree.
 */

function TreeNode(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

function solve(A, B) {

    if (!A || !B || A.length !== B.length || A.length === 0) {
        return 0
    }

    // Map to store index of elements in inorder traversal for quick lookup
    const inorderMap = new Map();

    // Fill the map with inorder elements and their corresponding indices
    for (let i = 0; i < A.length; i++) {
        inorderMap.set(A[i], i);
    }

    // Recursive function to build tree
    function buildTree(inStart, inEnd, postStart, postEnd) {
        // Base case: if there are no elements to construct the tree
        if (inStart > inEnd || postStart > postEnd) return null;

        // Last element in postorder is the root of the tree
        let rootValue = B[postEnd];
        let root = new TreeNode(rootValue);

        // Find the root's index in inorder traversal
        let rootIndexInOrder = inorderMap.get(rootValue);

        // Calculate number of elements in the left subtree
        let leftSubtreeSize = rootIndexInOrder - inStart;

        // Recursively build the left and right subtrees
        root.left = buildTree(inStart, rootIndexInOrder - 1, postStart, postStart + leftSubtreeSize - 1);
        root.right = buildTree(rootIndexInOrder + 1, inEnd, postStart + leftSubtreeSize, postEnd - 1);

        return root;
    }

    // Call the recursive function with initial values
    return buildTree(0, A.length - 1, 0, B.length - 1);
}

// Example usage:
let inorder1 = [2, 1, 3];
let postorder1 = [2, 3, 1];
console.log(solve(inorder1, postorder1)); // Tree with root 1, left child 2, right child 3

let inorder2 = [6, 1, 3, 2];
let postorder2 = [6, 3, 2, 1];
console.log(solve(inorder2, postorder2)); // Tree with root 1, left child 6, right child 2, and 3 as left child of 2
