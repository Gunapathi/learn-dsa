/**
 * Problem Description

Given three integers A, B, and C, where A represents n, B represents r, and C represents m, find and return the value of nCr % m where nCr % m = (n!/((n-r)!*r!))% m.




x! means factorial of x i.e. x! = 1 * 2 * 3... * x.






Problem Constraints

1 <= A * B <= 106

1 <= B <= A

1 <= C <= 106



Input Format

The first argument given is integer A ( = n).
The second argument given is integer B ( = r).
The third argument given is integer C ( = m).



Output Format

Return the value of nCr % m.



Example Input

Input 1:

 A = 5
 B = 2
 C = 13
Input 2:

 A = 6
 B = 2
 C = 13


Example Output

Output 1:

 10
Output 2:

 2


Example Explanation

Explanation 1:

 The value of 5C2 % 11 is 10.
Explanation 2:

 The value of 6C2 % 13 is 2.
 */

function solve(A, B, C) {
    let n = A, r = B, m = C;

    // Create a 2D array for DP
    let dp = new Array(n + 1);
    for (let i = 0; i <= n; i++) {
        dp[i] = new Array(r + 1).fill(0);
    }

    // Base cases
    for (let i = 0; i <= n; i++) {
        dp[i][0] = 1;
    }

    // Fill the dp table
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= Math.min(i, r); j++) {
            if (j === i) {
                dp[i][j] = 1;
            } else {
                dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j]) % m;
            }
        }
    }

    return dp[n][r];
}

console.log(solve(5, 2, 13)); // 10
console.log(solve(6, 2, 13)); // 2