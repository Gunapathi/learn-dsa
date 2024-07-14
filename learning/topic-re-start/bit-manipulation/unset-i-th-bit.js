/**Problem Description
You are given two integers A and B.
If B-th bit in A is set, make it unset.
If B-th bit in A is unset, leave as it is.
Return the updated A value.

Note:
The bit position is 0-indexed, which means that the least significant bit (LSB) has index 0. */

function solve(A, B) {
    return (A & ~(1 << B))
}

console.log(solve(4, 1)) // 4
console.log(solve(5, 2)) // 1