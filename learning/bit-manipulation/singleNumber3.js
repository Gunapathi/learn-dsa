/**Problem Description
Given an array of positive integers A, two integers appear only once, and all the other integers appear twice.
Find the two integers that appear only once.

Note: Return the two numbers in ascending order.


Problem Constraints
2 <= |A| <= 100000
1 <= A[i] <= 109



Input Format
The first argument is an array of integers of size N.



Output Format
Return an array of two integers that appear only once.



Example Input
Input 1:
A = [1, 2, 3, 1, 2, 4]
Input 2:

A = [1, 2]


Example Output
Output 1:
[3, 4]
Output 2:

[1, 2]


Example Explanation
Explanation 1:
3 and 4 appear only once.
Explanation 2:

1 and 2 appear only once. */

function singleNumber(A) {
    let xor = 0n;
    for (let i = 0; i < A.length; i++) {
        xor ^= BigInt(A[i]);
    }

    let rightmostSetBit = xor & -xor;
    let x = 0n, y = 0n;

    for (let i = 0; i < A.length; i++) {
        if ((BigInt(A[i]) & rightmostSetBit) != 0n) {
            x ^= BigInt(A[i]);
        } else {
            y ^= BigInt(A[i]);
        }
    }

    return [Number(x), Number(y)].sort((a, b) => a - b);
}


console.log(singleNumber())