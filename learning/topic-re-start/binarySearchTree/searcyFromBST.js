/**
 * Problem Description
Given a Binary Search Tree A. Check whether there exists a node with value B in the BST.


Problem Constraints
1 <= Number of nodes in binary tree <= 105

0 <= B <= 106



Input Format
First argument is a root node of the binary tree, A.

Second argument is an integer B.



Output Format
Return 1 if such a node exist and 0 otherwise



Example Input
Input 1:

            15
          /    \
        12      20
        / \    /  \
       10  14  16  27
      /
     8

     B = 16
Input 2:

            8
           / \
          6  21
         / \
        1   7

     B = 9


Example Output
Output 1:

 1
Output 2:

 0


Example Explanation
Explanation 1:

 Node with value 16 is present.
Explanation 2:

 There is no node with value 9.
 */

// Definition for a binary tree node
function TreeNode(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

function solve(A, B) {
  return searchNode(A, B); // Call the helper function to search for the node

  // Helper function to search a node in a BST
  function searchNode(root, target) {
    if (!root) return 0; // Node not found

    if (target === root.data) {
      return 1; // Node found
    }
    // Node to be search is in the left subtree
    else if (target < root.data) {
      return searchNode(root.left, target);
    }
    // Node to be search is in the right subtree
    else {
      return searchNode(root.right, target);
    }
  }
}

// Function to insert a node into BST
function insert(root, data) {
  if (root === null) {
    return new TreeNode(data);
  }
  if (data < root.data) {
    root.left = insert(root.left, data);
  } else if (data > root.data) {
    root.right = insert(root.right, data);
  }
  return root;
}

// Function to print inorder traversal
function inorder(root) {
  if (root !== null) {
    inorder(root.left);
    console.log(root.data);
    inorder(root.right);
  }
}

// Create a sample BST
let root = null;
root = insert(root, 15);
insert(root, 12);
insert(root, 20);
insert(root, 10);
insert(root, 14);
insert(root, 16);
insert(root, 27);
insert(root, 8);

// console.log("Original BST:");
// inorder(root);

// Value to search
const valueToDelete = 10;

// Call the solve function
const solution = solve(root, valueToDelete);

console.log("\nBST after deleting " + valueToDelete + ":");
inorder(solution);