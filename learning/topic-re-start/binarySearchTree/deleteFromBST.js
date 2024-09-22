/**
 * Problem Description
Given a Binary Search Tree(BST) A. If there is a node with value B present in the tree delete it and return the tree.

Note - If there are multiple options, always replace a node by its in-order predecessor


Problem Constraints
2 <= No. of nodes in BST <= 105
1 <= value of nodes <= 109
Each node has a unique value


Input Format
The first argument is the root node of a Binary Search Tree A.
The second argument is the value B.


Output Format
Delete the given node if found and return the root of the BST.


Example Input
Input 1:

            15
          /    \
        12      20
        / \    /  \
       10  14  16  27
      /
     8

     B = 10

Input 2:

            8
           / \
          6  21
         / \
        1   7

     B = 6



Example Output
Output 1:

            15
          /    \
        12      20
        / \    /  \
       8  14  16  27

Output 2:

            8
           / \
          1  21
           \
            7



Example Explanation
Explanation 1:

Node with value 10 is deleted 
Explanation 2:

Node with value 6 is deleted 
 */

// Definition for a binary tree node
function TreeNode(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

function solve(A, B) {
  A = deleteNode(A, B);
  return A;

  // Helper function to delete a node
  function deleteNode(root, target) {
    if (!root) return null;

    // Node to be deleted is in the left subtree
    if (target < root.data) {
      root.left = deleteNode(root.left, target);
    }
    // Node to be deleted is in the right subtree
    else if (target > root.data) {
      root.right = deleteNode(root.right, target);
    }
    // Node to be deleted is found
    else {
      // Case 1: Node with no children (leaf node)
      if (!root.left && !root.right) {
        return null;
      }
      // Case 2: Node with only one child
      else if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }
      // Case 3: Node with two children
      else {
        // Find the in-order predecessor (maximum in the left subtree)
        let predecessor = findMax(root.left);
        root.data = predecessor.data;
        // Delete the in-order predecessor from the left subtree
        root.left = deleteNode(root.left, predecessor.data);
      }
    }
    return root;
  }

  // Helper function to find the maximum target in a subtree
  function findMax(node) {
    while (node.right) {
      node = node.right;
    }
    return node;
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

// Value to delete
const valueToDelete = 10;

// Call the solve function
const solution = solve(root, valueToDelete);

console.log("\nBST after deleting " + valueToDelete + ":");
inorder(solution);

/**
 * Given tree:

             15
           /    \
          12    20
         / \    / \
       10  14  16 27
      / \  /   / \
     8  9 13  15 17
We want to delete node 12. Here's what happens:

We find node 12.

Since 12 has two children, we need to find its in-order predecessor.

The in-order predecessor is the maximum value in the left subtree of 12. In this case, it's 10 (the right-most node in the left subtree of 12).

We replace 12's data with 10:

             15
           /    \
          10    20
         / \    / \
       10  14  16 27
      / \  /   / \
     8  9 13  15 17
Now we need to delete the original 10 node from the left subtree of where 12 was (now 10).

When deleting this 10, we again face a node with two children (8 and 9).

We repeat the process: find the max in the left subtree of 10 (which is 9), replace 10 with 9, and then delete 9 from its original position.

After these operations, the final tree would look like this:

             15
           /    \
          10    20
         / \    / \
        9  14  16 27
       /   /   / \
      8   13  15 17
The nodes 15 (under 16) and 17 remain in their original positions as they are not affected by this deletion process.

Explanation accurately reflects how the deletion would occur in the given tree structure. The process maintains the Binary Search Tree property throughout the deletion operation.
 */