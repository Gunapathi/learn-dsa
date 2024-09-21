/**
 * Problem Description
Given a string A. Find the rank of the string amongst its permutations sorted lexicographically.
Assume that no characters are repeated.

Note: The answer might not fit in an integer, so return your answer % 1000003



Problem Constraints
1 <= |A| <= 1000



Input Format
First argument is a string A.



Output Format
Return an integer denoting the rank of the given string.



Example Input
Input 1:

A = "acb"
Input 2:

A = "a"


Example Output
Output 1:

2
Output 2:

1


Example Explanation
Explanation 1:

Given A = "acb".
The order permutations with letters 'a', 'c', and 'b' : 
abc
acb
bac
bca
cab
cba
So, the rank of A is 2.
Explanation 2:

Given A = "a".
Rank is clearly 1.
 */

function solve(A) {
    let rank = 0;
    const MOD = 1000003;

    // Pre-compute factorials
    let fact = new Array(A + 1);
    fact[0] = 1;
    for (let i = 1; i <= A.length; i++) {
        fact[i] = (fact[i - 1] * i) % MOD;
    }

    for (let i = 0; i < A.length; i++) {
        const ch = A[i];
        let count = 0;

        for (let j = i + 1; j < A.length; j++) {
            if (A[j] < ch) count++;
        }

        rank = (rank + count * fact[A.length - i - 1]);
    }

    return (rank + 1) % MOD;
}

console.log(solve("acb")); // 2
console.log(solve("a")); // 1