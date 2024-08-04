/**
 * Problem Description
Given an array A of N integers. Find the sum of bitwise XOR all pairs of numbers in the array.

Since the answer can be large, return the remainder after the dividing the answer by 10^9+7.



Problem Constraints
1 <= N <= 105

1 <= A[i] < 109



Input Format
Only argument A is an array of integers



Output Format
Return an integer denoting the sum of xor of all pairs of number in the array.



Example Input
Input 1:
A = [1, 2, 3]
Input 2:
A = [3, 4, 2]


Example Output
Output 1:
6
Output 2:
14


Example Explanation
For Input 1:
Pair    Xor
{1, 2}  3
{1, 3}  2
{2, 3}  1
Sum of xor of all pairs = 3 + 2 + 1 = 6.
For Input 2:
Pair    Xor
{3, 4}  7
{3, 2}  1
{4, 2}  6
Sum of xor of all pairs = 7 + 1 + 6 = 14.
 */

function solve(A) {
    // const MOD = 1e9 + 7;
    // let res = 0;

    // for (let i = 0; i < A.length; i++) {
    //     for (let j = i + 1; j < A.length; j++) {
    //         const currXor = A[i] ^ A[j]
    //         res += currXor
    //     }
    // }

    // return Number(res % MOD);

    // OPTIMIZED CODE
    // Loop through each bit position from 0 to 30
    for (let bit = 0; bit < 31; bit++) {
        let countOnes = 0;

        // Count how many numbers have the current bit set (1)
        for (let i = 0; i < n; i++) {
            if (A[i] & (1 << bit)) {
                countOnes++;
            }
        }

        // Count zeros is total numbers minus countOnes
        let countZeros = n - countOnes;

        // Contribution to the XOR sum from this bit position
        let contribution = countOnes * countZeros * (1 << bit) % MOD;
        res = (res + contribution) % MOD;
    }

    return res;
}

console.log(solve([1, 2, 3])); // 6
console.log(solve([3, 4, 2])); // 14