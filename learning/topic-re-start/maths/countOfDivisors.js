/**
 * Problem Description
Given an array of integers A, find and return the count of divisors of each element of the array.

NOTE: The order of the resultant array should be the same as the input array.



Problem Constraints
1 <= length of the array <= 100000
1 <= A[i] <= 106



Input Format
The only argument given is the integer array A.



Output Format
Return the count of divisors of each element of the array in the form of an array.



Example Input
Input 1:

 A = [2, 3, 4, 5]
Input 2:

 A = [8, 9, 10]


Example Output
Output 1:

 [2, 2, 3, 2]
Output 1:

 [4, 3, 4]


Example Explanation
Explanation 1:

 The number of divisors of 2 : [1, 2], 3 : [1, 3], 4 : [1, 2, 4], 5 : [1, 5]
 So the count will be [2, 2, 3, 2].
Explanation 2:

 The number of divisors of 8 : [1, 2, 4, 8], 9 : [1, 3, 9], 10 : [1, 2, 5, 10]
 So the count will be [4, 3, 4].
 */

function findFactors(n) {
    let count = 0;

    for (let i = 1; i * i <= n; i++) {
        if (n % i === 0) {
            count += 1; // Count i as a factor

            if (i !== n / i) {
                count += 1; // Count the complementary factor only if it's different
            }
        }
    }

    return count;
}

function solve(A) {
    return A.map(num => findFactors(num));
}

console.log(solve([2, 3, 4, 5]));