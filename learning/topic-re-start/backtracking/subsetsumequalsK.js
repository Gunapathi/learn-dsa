/**
 * Problem Description

Given an integer array A of size N.


You are also given an integer B, you need to find whether their exist a subset in A whose sum equal B.

If there exist a subset then return 1 else return 0.

Note : Sum of elements of an empty subset is 0.




Problem Constraints

1 <= N <= 17

-109 <= A[i] <= 109

-109 <= B <= 109



Input Format

First argument is an integer array A.

Second argument is an integer B.



Output Format

Return 1 if there exist a subset with sum B else return 0.



Example Input

Input 1:

 A = [3, 34, -3, 12, 5, 2]
 B = 9
Input 2:

 A = [-8, 34, 4, 0, -5, -2]
 B = -20


Example Output

Output 1:

 1
Output 2:

 0


Example Explanation

Explanation 1:

 There is a subset (-3, 12) with sum 9.
Explanation 2:

 There is no subset that add up to -20.
 */

function SubsetSum(A, B) {

    function findSubSet(arr, target, index) {
        if (target === 0) {
            return 1;
        }

        if (index >= arr.length) {
            return 0;
        }

        return findSubSet(arr, target - arr[index], index + 1) || findSubSet(arr, target, index + 1);
    }

    return findSubSet(A, B, 0);
}

console.log(SubsetSum([3, 34, -3, 12, 5, 2], 9)) // 1
console.log(SubsetSum([-8, 34, 4, 0, -5, -2], -20)) //  0