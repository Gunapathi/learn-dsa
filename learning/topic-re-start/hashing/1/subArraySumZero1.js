/**
 * Problem Description
Given an array A of N integers.

Find the count of the subarrays in the array which sums to zero. Since the countwer can be very large, return the remainder on dividing the result with 109+7


Problem Constraints
1 <= N <= 105
-109 <= A[i] <= 109


Input Format
Single argument which is an integer array A.


Output Format
Return an integer.


Example Input
Input 1:

 A = [1, -1, -2, 2]
Input 2:

 A = [-1, 2, -1]


Example Output
Output 1:

3
Output 2:

1


Example Explanation
Explanation 1:

 The subarrays with zero sum are [1, -1], [-2, 2] and [1, -1, -2, 2].
Explanation 2:

 The subarray with zero sum is [-1, 2, -1].
 */

function solve(A) {
    const prefixSumMap = new Map();
    let prefixSum = 0;
    let count = 0;
    const MOD = 1e9 + 7;

    // Initialize the prefixSumMap with the sum 0 having one occurrence
    prefixSumMap.set(0, 1);

    for (let i = 0; i < A.length; i++) {
        prefixSum += A[i];

        if (prefixSumMap.has(prefixSum)) {
            count = (count + prefixSumMap.get(prefixSum)) % MOD;
        }

        if (prefixSumMap.has(prefixSum)) {
            prefixSumMap.set(prefixSum, prefixSumMap.get(prefixSum) + 1);
        } else {
            prefixSumMap.set(prefixSum, 1);
        }
    }

    return count;
}

console.log(solve([1, -1, -2, 2])); // 3
console.log(solve([-1, 2, -1])); // 1