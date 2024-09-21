/**
 * Problem Description
You are given a binary tree represented by root A. You need to check if it is a Binary Search Tree or not.

Assume a BST is defined as follows:

1) The left subtree of a node contains only nodes with keys less than the node's key.

2) The right subtree of a node contains only nodes with keys greater than the node's key.

3) Both the left and right subtrees must also be binary search trees.



Problem Constraints
1 <= Number of nodes in binary tree <= 105

0 <= node values <= 232-1



Input Format
First and only argument is head of the binary tree A.



Output Format
Return 0 if false and 1 if true.



Example Input
Input 1:

 
   1
  /  \
 2    3
Input 2:

 
  2
 / \
1   3


Example Output
Output 1:

 0
Output 2:

 1


Example Explanation
Explanation 1:

 2 is not less than 1 but is in left subtree of 1.
Explanation 2:

Satisfies all conditions.
 */

// Definition for a binary tree node
function TreeNode(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

function isValidBST(A) {
    function isValidBSTHelper(node, min, max) {
        // Base case: if node is null, it's valid
        if (node === null) return true;

        // Check if current node's value is in range
        if (node.data <= min || node.data >= max) return false;

        // Recursively check left and right subtrees
        // no need to update min (-Infinite) and max (Infinite), since we don't know the min value of the tree.
        return isValidBSTHelper(node.left, min, node.data) &&
            isValidBSTHelper(node.right, node.data, max);
    }

    return isValidBSTHelper(A, -Infinity, Infinity) ? 1 : 0;
}

// Test cases
function runTestCases() {
    // Test Case 1: Valid BST
    let root1 = new TreeNode(4);
    root1.left = new TreeNode(2);
    root1.right = new TreeNode(6);
    root1.left.left = new TreeNode(1);
    root1.left.right = new TreeNode(3);
    console.log("Test Case 1 (Valid BST):", isValidBST(root1));

    // Test Case 2: Invalid BST
    let root2 = new TreeNode(3);
    root2.left = new TreeNode(2);
    root2.right = new TreeNode(5);
    root2.left.left = new TreeNode(1);
    root2.left.right = new TreeNode(4); // This makes it invalid
    console.log("Test Case 2 (Invalid BST):", isValidBST(root2));

    // Test Case 3: Single node (valid BST)
    let root3 = new TreeNode(1);
    console.log("Test Case 3 (Single node):", isValidBST(root3));

    // Test Case 4: Empty tree (valid BST)
    console.log("Test Case 4 (Empty tree):", isValidBST(null));
}

runTestCases();