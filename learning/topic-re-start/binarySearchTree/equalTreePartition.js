/**
 * Problem Description
Given a binary tree A. Check whether it is possible to partition the tree to two trees which have equal sum of values after removing exactly one edge on the original tree.



Problem Constraints
1 <= size of tree <= 100000

0 <= value of node <= 109



Input Format
First and only argument is head of tree A.



Output Format
Return 1 if the tree can be partitioned into two trees of equal sum else return 0.



Example Input
Input 1:

 
                5
               /  \
              3    7
             / \  / \
            4  6  5  6
Input 2:

 
                1
               / \
              2   10
                  / \
                 20  2


Example Output
Output 1:

 1
Output 2:

 0


Example Explanation
Explanation 1:

 Remove edge between 5(root node) and 7: 
        Tree 1 =                                               Tree 2 =
                        5                                                     7
                       /                                                     / \
                      3                                                     5   6    
                     / \
                    4   6
        Sum of Tree 1 = Sum of Tree 2 = 18
Explanation 2:

 The given Tree cannot be partitioned.
 */

// Definition of TreeNode
function TreeNode(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

function solve(A) {
    // Step 1: Calculate the total sum of the tree
    let totalSum = getTotalSum(A);
    
    // If total sum is odd, it's not possible to partition the tree into two equal sums
    if (totalSum % 2 !== 0) {
        return 0;
    }

    let halfSum = totalSum / 2;
    let found = { value: false }; // To track if we find a subtree with half the total sum

    // Step 2: Traverse the tree to find if any subtree has sum equal to half the total sum
    checkSubtreeSum(A, halfSum, found);

    return found.value ? 1 : 0;
}

// Helper function to calculate the total sum of the tree
function getTotalSum(node) {
    if (node === null) return 0;
    return node.data + getTotalSum(node.left) + getTotalSum(node.right);
}

// Helper function to check if any subtree has the sum equal to half of the total sum
function checkSubtreeSum(node, halfSum, found) {
    if (node === null) return 0;

    // Calculate the sum of the current subtree
    let currentSubtreeSum = node.data + checkSubtreeSum(node.left, halfSum, found) + checkSubtreeSum(node.right, halfSum, found);

    // If we find a subtree with sum equal to halfSum, set found to true
    if (currentSubtreeSum === halfSum) {
        found.value = true;
    }

    return currentSubtreeSum;
}

// Example 1:
// Tree structure:
//     5
//    / \
//   3   7
//  / \ / \
// 4  6 5  6
let root1 = new TreeNode(5);
root1.left = new TreeNode(3);
root1.right = new TreeNode(7);
root1.left.left = new TreeNode(4);
root1.left.right = new TreeNode(6);
root1.right.left = new TreeNode(5);
root1.right.right = new TreeNode(6);

console.log(solve(root1)); // Output: 1

// Example 2:
// Tree structure:
//     1
//    / \
//   2   10
//      / \
//     20  2
let root2 = new TreeNode(1);
root2.left = new TreeNode(2);
root2.right = new TreeNode(10);
root2.right.left = new TreeNode(20);
root2.right.right = new TreeNode(2);

console.log(solve(root2)); // Output: 0
