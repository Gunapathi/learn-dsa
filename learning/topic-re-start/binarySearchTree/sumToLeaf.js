/**
 * Problem Description
Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.



Problem Constraints
1 <= number of nodes <= 105

-100000 <= B, value of nodes <= 100000



Input Format
First argument is a root node of the binary tree, A.

Second argument is an integer B denoting the sum.



Output Format
Return 1, if there exist root-to-leaf path such that adding up all the values along the path equals the given sum. Else, return 0.



Example Input
Input 1:

 Tree:    5
         / \
        4   8
       /   / \
      11  13  4
     /  \      \
    7    2      1

 B = 22
Input 2:

 Tree:    5
         / \
        4   8
       /   / \
     -11 -13  4

 B = -1


Example Output
Output 1:

 1
Output 2:

 0


Example Explanation
Explanation 1:

 There exist a root-to-leaf path 5 -> 4 -> 11 -> 2 which has sum 22. So, return 1.
Explanation 2:

 There is no path which has sum -1.
 */

//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

function solve(A, B) {
    return hasPathSum(A, 0, B) ? 1 : 0
}

// Helper function to check root-to-leaf paths
function hasPathSum(node, currentSum, target) {
    if (node === null) {
        return false;
    }

    // Update the current sum by adding the current node's value
    currentSum += node.data;

    // Check if it's a leaf node and the current sum equals the target sum
    if (node.left === null && node.right === null) {
        return currentSum === target;
    }

    // Recursively check the left and right subtrees
    return hasPathSum(node.left, currentSum, target) || hasPathSum(node.right, currentSum, target);
}