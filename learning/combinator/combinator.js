/**Problem Description
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

 The value of 6C2 % 13 is 2. */

function combinator(A, B, C) {
    function recCombine(n, r, m, dp) {
        if (n == r) return 1;
        if (r == 0) return 1;
        if (r == 1) return n;

        if (dp[n][r] != -1) {
            return dp[n][r];
        }
        let x = (recCombine(n - 1, r - 1, m, dp)) % m;
        let y = (recCombine(n - 1, r, m, dp)) % m;
        dp[n][r] = (x + y) % m;

        return (x + y) % m;

    }

    let n = A;
    let r = B;
    let dp = new Array(A + 1).fill(0).map(() => new Array(B + 1).fill(-1));
    let ans = (recCombine(n, r, C, dp)) % C;
    return ans;
};


console.log(combinator([1, 1, 2]))