/**Problem Description
You are given two integers A and B.
Return 1 if B-th bit in A is set
Return 0 if B-th bit in A is unset
Note:
The bit position is 0-indexed, which means that the least significant bit (LSB) has index 0. */

function solve(A, B) {
    return (A & (1 << B)) > 0 ? 1 : 0
}

console.log(solve(4, 1)) // 0
console.log(solve(5, 2)) // 1