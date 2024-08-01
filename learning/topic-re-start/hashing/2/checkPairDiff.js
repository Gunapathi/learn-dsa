/**
 * Problem Description
You are given an array A of N integers and an integer B.
Count the number of pairs (i,j) such that A[i] - A[j] = B and i ≠ j.

Since the answer can be very large, return the remainder after dividing the count with 109+7.


Problem Constraints
1 <= N <= 105
1 <= A[i] <= 109
1 <= B <= 109


Input Format
First argument A is an array of integers and second argument B is an integer.


Output Format
Return an integer.


Example Input
Input 1:

A = [3, 5, 1, 2]
B = 4
Input 2:

A = [1, 2, 1, 2]
B = 1


Example Output
Output 1:

1
Output 2:

4


Example Explanation
Example 1:

The only pair is (2, 3) which gives difference as 4
Example 2:

The pair which gives difference as 3 are (2, 1), (4, 1), (2, 3) and (4, 3). 
 */

function solve(A, B) {
    const MOD = BigInt(1e9 + 7);
    const freqMap = new Map();
    let count = BigInt(0);
    const bigB = BigInt(B); // Ensure B is treated as BigInt

    // Step 1: Create a frequency map
    for (const num of A) {
        const bigNum = BigInt(num); // Treat num as BigInt
        if (freqMap.has(bigNum)) {
            freqMap.set(bigNum, freqMap.get(bigNum) + BigInt(1));
        } else {
            freqMap.set(bigNum, BigInt(1));
        }
    }

    // Step 2: Count pairs
    for (const num of A) {
        const bigNum = BigInt(num); // Treat num as BigInt
        const countA = freqMap.get(bigNum);
        const countAddB = freqMap.get(bigNum + bigB) || BigInt(0);
        const countSubB = freqMap.get(bigNum - bigB) || BigInt(0);

        // For A[i] - A[j] = B
        count = (count + countAddB) % MOD;

        // For A[j] - A[i] = B
        count = (count + countSubB) % MOD;

        // Decrease the frequency of the current number to avoid counting self-pairs and duplicate pairs
        freqMap.set(bigNum, countA - BigInt(1));
    }

    return Number(count);
}

console.log(solve([3, 5, 1, 2], 4)) // 1
console.log(solve([1, 2, 1, 2], 1)) // 4