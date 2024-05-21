/**Problem Description
Given the array of strings A, you need to find the longest string S, which is the prefix of ALL the strings in the array.

The longest common prefix for a pair of strings S1 and S2 is the longest string S which is the prefix of both S1 and S2.

Example: the longest common prefix of "abcdefgh" and "abcefgh" is "abc".



Problem Constraints
0 <= sum of length of all strings <= 1000000



Input Format
The only argument given is an array of strings A.



Output Format
Return the longest common prefix of all strings in A.



Example Input
Input 1:

A = ["abcdefgh", "aefghijk", "abcefgh"]
Input 2:

A = ["abab", "ab", "abcd"];


Example Output
Output 1:

"a"
Output 2:

"ab"


Example Explanation
Explanation 1:

Longest common prefix of all the strings is "a".
Explanation 2:

Longest common prefix of all the strings is "ab". */

function longestCommonPrefix(A) {
    // Bruteforce approach
    // if (A.length < 1 || !A) return "";

    // let shortestLength = Math.min(...A.map(str => str.length));

    // for (let i = 0; i < shortestLength; i++) {
    //     const currLetter = A[0][i];

    //     for (let j = 1; j < A.length; j++) {
    //         if (A[j][i] !== currLetter) {
    //             return A[0].substring(0, i);
    //         }
    //     }
    // }

    // return A[0].substring(0, shortestLength);

    // optimized
    const n = A.length;

    if (!A || A.length === 0) return ""; // Handle edge case of empty array
    if (n === 1) return A[0];

    A.sort(); // Sort the array of strings lexicographically

    for (let i = 0; i < A[0].length; i++) {
        if (A[0][i] !== A[n - 1][i]) {
            return A[0].substring(0, i);
        }
    }

    return A[0];
}

const A1 = longestCommonPrefix(["abcdefgh", "aefghijk", "abcefgh"]);
const A2 = longestCommonPrefix(["abab", "ab", "abcd"]);

console.log(A1);
console.log(A2);