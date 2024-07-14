/**Problem Description
You are given two integers A and B.
Set the A-th bit and B-th bit in 0, and return output in decimal Number System.

Note:
The bit positions are 0-indexed, which means that the least significant bit (LSB) has index 0. */

function solve(A, B) {
    return ((1 << A) | (1 << B))
}

console.log(solve(3, 5)) // 40
console.log(solve(4, 4)) // 16