/**Problem Description
You are given an integer array C of size A. Now you need to find a subarray (contiguous elements) so that the sum of contiguous elements is maximum.
But the sum must not exceed B.


Problem Constraints
1 <= A <= 103
1 <= B <= 109
1 <= C[i] <= 106


Input Format
The first argument is the integer A.
The second argument is the integer B.
The third argument is the integer array C.


Output Format
Return a single integer which denotes the maximum sum.


Example Input
Input 1:
A = 5
B = 12
C = [2, 1, 3, 4, 5]
Input 2:

A = 3
B = 1
C = [2, 2, 2]


Example Output
Output 1:
12
Output 2:

0


Example Explanation
Explanation 1:
We can select {3,4,5} which sums up to 12 which is the maximum possible sum.
Explanation 2:

All elements are greater than B, which means we cannot select any subarray.
Hence, the answer is 0. */

function maxSubArray(A, B, C) {
    let leftPtr = 0n;
    let rightPtr = 0n;
    let sum = 0n;
    let ans = -Infinity; // Initialize ans to negative infinity to handle cases where no subarray sum is less than or equal to B

    while (rightPtr < BigInt(A) && leftPtr <= rightPtr) {
        sum += BigInt(C[rightPtr]);

        while (sum > BigInt(B)) {
            sum -= BigInt(C[leftPtr]);
            leftPtr++;
        }

        if (sum <= BigInt(B)) { // Check if the current sum is less than or equal to B
            ans = sum > ans ? sum : ans; // Update ans if the current sum is greater than ans
        }

        rightPtr++;
    }

    return Number(ans);
}

console.log(maxSubArray(5, 12, [2, 1, 3, 4, 5]))