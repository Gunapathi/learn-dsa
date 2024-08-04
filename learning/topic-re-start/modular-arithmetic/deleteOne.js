/**
 * Problem Description
Given an integer array A of size N. You have to delete one element such that the GCD(Greatest common divisor) of the remaining array is maximum.

Find the maximum value of GCD.



Problem Constraints
2 <= N <= 105
1 <= A[i] <= 109



Input Format
First argument is an integer array A.



Output Format
Return an integer denoting the maximum value of GCD.



Example Input
Input 1:

 A = [12, 15, 18]
Input 2:

 A = [5, 15, 30]


Example Output
Output 1:

 6
Output 2:

 15


Example Explanation
Explanation 1:

 If you delete 12, gcd will be 3.
 If you delete 15, gcd will be 6.
 If you delete 18, gcd will 3.
 Maximum value of gcd is 6.
Explanation 2:

 If you delete 5, gcd will be 15.
 If you delete 15, gcd will be 5.
 If you delete 30, gcd will be 5.
 Maximum value of gcd is 15.
 */

function solve(A) {
    const n = A.length;
    if (n == 2) {
        return Math.max(A[0], A[1]);
    }

    const prefixGCD = new Array(n).fill(0);
    const suffixGCD = new Array(n).fill(0);

    prefixGCD[0] = A[0];
    for (let i = 1; i < n; i++) {
        prefixGCD[i] = gcd(prefixGCD[i - 1], A[i]);
    }

    suffixGCD[n - 1] = A[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        suffixGCD[i] = gcd(suffixGCD[i + 1], A[i]);
    }

    let maxGCD = Math.max(suffixGCD[1], prefixGCD[n - 2]);
    for (let i = 1; i < n - 1; i++) {
        maxGCD = Math.max(maxGCD, gcd(prefixGCD[i - 1], suffixGCD[i + 1]));
    }

    return maxGCD;
}

function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

console.log(solve([12, 15, 18])); // 6
console.log(solve([5, 15, 30])); // 15
