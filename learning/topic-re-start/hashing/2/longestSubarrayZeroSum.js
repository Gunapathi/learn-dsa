/**
 * Problem Description
Given an array A of N integers.
Find the length of the longest subarray in the array which sums to zero.

If there is no subarray which sums to zero then return 0.



Problem Constraints
1 <= N <= 105
-109 <= A[i] <= 109


Input Format
Single argument which is an integer array A.


Output Format
Return an integer.


Example Input
Input 1:

 A = [1, -2, 1, 2]
Input 2:

 A = [3, 2, -1]


Example Output
Output 1:

3
Output 2:

0


Example Explanation
Explanation 1:

 [1, -2, 1] is the largest subarray which sums up to 0.
Explanation 2:

 No subarray sums up to 0.
 */

function solve(A) {
    const MOD = 1e9 + 7;
    const prefixSumMap = new Map();
    let prefixSum = 0;
    let maxLength = 0;

    for (let i = 0; i < A.length; i++) {
        // Ensure the current value is treated as a regular number
        const num = Number(A[i]);
        prefixSum += num;

        if (prefixSum === 0) {
            maxLength = i + 1;
        } else if (prefixSumMap.has(prefixSum)) {
            const prevIndex = prefixSumMap.get(prefixSum);
            maxLength = Math.max(maxLength, i - prevIndex);
        } else {
            prefixSumMap.set(prefixSum, i);
        }
    }

    return maxLength % MOD;
}

console.log(solve([1, -2, 1, 2])) // 3
console.log(solve([3, 2, -1])) // 0