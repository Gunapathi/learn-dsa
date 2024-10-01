/**
 * Problem Description

Given a sorted array of integers (not necessarily distinct) A and an integer B, find and return how many pair of integers ( A[i], A[j] ) such that i != j have sum equal to B.

Since the number of such pairs can be very large, return number of such pairs modulo (109 + 7).



Problem Constraints

1 <= |A| <= 100000

1 <= A[i] <= 10^9

1 <= B <= 10^9



Input Format

The first argument given is the integer array A.

The second argument given is integer B.



Output Format

Return the number of pairs for which sum is equal to B modulo (10^9+7).



Example Input

Input 1:

A = [1, 1, 1]
B = 2
Input 2:

A = [1, 5, 7, 10]
B = 8


Example Output

Output 1:

 3
Output 2:

 1


Example Explanation

Explanation 1:

 The pairs of A[i] and A[j] which sum up to 2 are (0, 1), (0, 2) and (1, 2).
 There are 3 pairs.
Explanation 2:

 There is only one pair, such that i = 0, and j = 2 sums up to 8.
 */

/**
 * EXAMPLES:

A = [1, 2, 3, 3, 3, 4, 5, 5, 6], B = 8

Initial state: i = 0, j = 8

A[0] + A[8] = 1 + 6 = 7 < 8, so i++
A[1] + A[8] = 2 + 6 = 8 == B left = 1 (one 2), right = 1 (one 6) count = 1, i = 2, j = 7
A[2] + A[7] = 3 + 5 = 8 == B left = 3 (three 3s), right = 2 (two 5s) count = 1 + (3 * 2) = 7, i = 5, j = 5
i >= j, loop ends
Final count: 7

This handles duplicates and counts all valid pairs.
*/

function solve(A, B) {
    let i = 0, j = A.length - 1, count = 0;
    const MOD = 1000000007;

    while (i < j) {
        if (A[i] + A[j] < B) {
            i++;
        } else if (A[i] + A[j] > B) {
            j--;
        } else {
            if (A[i] !== A[j]) {
                let left = 1, right = 1;

                // find duplicates from left to right
                while (i + 1 < j && A[i] === A[i + 1]) { left++; i++; };

                // find duplicates from right to left
                while (j - 1 > i && A[j] === A[j - 1]) { right++; j--; };

                count = (count + left * right) % MOD;

                i++; j--;
            } else {
                let range = j - i + 1;

                // calc the range (n * (n + 1) / 2)
                count = (count + (range * (range - 1) / 2) % MOD) % MOD;
                break;
            }
        }
    }

    return count;
}

console.log(solve([1, 1, 1], 2)) // 3
console.log(solve([1, 5, 7, 10], 8)) // 1