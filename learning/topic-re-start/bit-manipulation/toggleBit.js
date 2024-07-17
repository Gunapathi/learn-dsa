/**You are given two integers A and B.
If B-th bit in A is set, make it unset
If B-th bit in A is unset, make it set
Return the updated A value */

function solve(A, B) {
    return A ^ (1 << B)
}

console.log(solve(4, 1)) // 6
console.log(solve(5, 2)) // 1