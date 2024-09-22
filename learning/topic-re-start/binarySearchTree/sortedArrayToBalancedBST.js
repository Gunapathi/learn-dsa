/**
 * Problem Description
Given an array where elements are sorted in ascending order, convert it to a height Balanced Binary Search Tree (BBST).

Balanced tree : a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.



Problem Constraints
1 <= length of array <= 100000



Input Format
First argument is an integer array A.



Output Format
Return a root node of the Binary Search Tree.



Example Input
Input 1:

 A : [1, 2, 3]
Input 2:

 A : [1, 2, 3, 5, 10]


Example Output
Output 1:

      2
    /   \
   1     3
Output 2:

      3
    /   \
   2     5
  /       \
 1         10


Example Explanation
Explanation 1:

 You need to return the root node of the Binary Tree.
 */

// Definition for a binary tree node
function TreeNode(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

// Your solution function
function sortedArrayToBST(nums) {
    return buildBST(nums, 0, nums.length - 1);
}

// Helper function to build BST (you need to implement this)
function buildBST(nums, start, end) {
    if (start > end) return null;

    const mid = (start + end) >> 1;
    const node = new TreeNode(nums[mid]);

    // Recursively build left and right subtrees
    node.left = buildBST(nums, start, mid - 1);
    node.right = buildBST(nums, mid + 1, end);

    return node;
}

// Test cases
const testCases = [
    [1, 2, 3],
    [1, 2, 3, 5, 10],
    [-10, -3, 0, 5, 9],
];

// Function to print the tree (in-order traversal)
function printInOrder(root) {
    if (root === null) return;
    printInOrder(root.left);
    console.log(root.data);
    printInOrder(root.right);
}

// Run tests
testCases.forEach((testCase, index) => {
    console.log(`Test Case ${index + 1}:`);
    console.log("Input:", testCase);
    const root = sortedArrayToBST(testCase);
    console.log("Output (in-order traversal):");
    printInOrder(root);
    console.log("\n");
});

