/**
 * Problem Description
Given an array A of length N where all the elements are distinct and are in the range [1, N+2].

Two numbers from the range [1, N+2] are missing from the array A. Find the two missing numbers.



Problem Constraints
1 <= N <= 105

1 <= A[i] <= N+2

The elements of array A are distinct



Input Format
Only argument A is an array of integers



Output Format
Return a sorted array of size 2 denoting the missing elements.



Example Input
Input 1:
A = [3, 2, 4]
Input 2:
A = [5, 1, 3, 6]


Example Output
Output 1:
[1, 5]
Output 2:
[2, 4]


Example Explanation
For Input 1:
The missing numbers are 1 and 5.
For Input 2:
The missing numbers are 2 and 4.
 */

function solve(A) {
    const n = A.length;
    let ans = new Array(n + 2).fill(0);

    for (let idx = 0; idx < n; idx++) {
        let num = A[idx];
        if (num > 0 && num <= n + 2) {
            ans[num - 1] = -1;
        }
    }

    let result = [];
    for (let idx = 0; idx < n + 2; idx++) {
        if (ans[idx] === 0) {
            result.push(idx + 1);
        }
    }

    return result;

}

console.log(solve([3, 2, 4])); // [1, 5]
console.log(solve([5, 1, 3, 6])); // [2, 4]