/**
 * Problem Description
Given an integer A representing the number of square blocks. The height of each square block is 1. The task is to create a staircase of max-height using these blocks.

The first stair would require only one block, and the second stair would require two blocks, and so on.

Find and return the maximum height of the staircase.



Problem Constraints
0 <= A <= 109


Input Format
The only argument given is integer A.



Output Format
Return the maximum height of the staircase using these blocks.



Example Input
Input 1:

 A = 10
Input 2:

 A = 20


Example Output
Output 1:

 4
Output 2:

 5


Example Explanation
Explanation 1:

 The stairs formed will have height 1, 2, 3, 4.
Explanation 2:

 The stairs formed will have height 1, 2, 3, 4, 5.
 */

function solve(A) {
    let low = 0;
    let high = A;
    let ans = 0;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        const height = Math.floor((mid * (mid + 1)) / 2); // Sum of the first 'mid' natural numbers

        if (height <= A) {
            ans = mid;
            low = mid + 1; // Move to higher numbers
        } else {
            high = mid - 1; // Move to lower numbers
        }
    }

    return ans;
}

console.log(solve(10)) // 4
console.log(solve(20)) // 5
console.log(solve(17)) // 5
console.log(solve(92761)) // 430