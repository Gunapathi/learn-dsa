/**
 * Problem Description
Given a binary tree, return the inorder traversal of its nodes' values.



Problem Constraints
1 <= number of nodes <= 105



Input Format
First and only argument is root node of the binary tree, A.



Output Format
Return an integer array denoting the inorder traversal of the given binary tree.



Example Input
Input 1:

   1
    \
     2
    /
   3
Input 2:

   1
  / \
 6   2
    /
   3


Example Output
Output 1:

 [1, 3, 2]
Output 2:

 [6, 1, 3, 2]


Example Explanation
Explanation 1:

 The Inorder Traversal of the given tree is [1, 3, 2].
Explanation 2:

 The Inorder Traversal of the given tree is [6, 1, 3, 2].
 */

function TreeNode(data) {
    this.data = data
    this.left = null
    this.right = null
}

function solve(A) {
    let result = []

    inOrder(A, result);

    return result;
}

// helper function for inorder traversal
function inOrder(cNode, result) {
    if (cNode === null) return

    inOrder(cNode.left, result);
    result.push(cNode.data);
    inOrder(cNode.right, result);

    return result;
}

// Create a sample binary tree
//       1
//      / \
//     2   3
//    / \
//   4   5
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

// Test the solve function
let result = solve(root);
console.log(result);  // Expected output: [4, 2, 5, 1, 3]

// Create another sample binary tree
//      1
//       \
//        2
//       /
//      3
let root2 = new TreeNode(1);
root2.right = new TreeNode(2);
root2.right.left = new TreeNode(3);

let result2 = solve(root2);
console.log(result2);  // Expected output: [1, 3, 2]