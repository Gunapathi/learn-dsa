/**Problem Description
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

The pair which gives difference as 3 are (2, 1), (4, 1), (2, 3) and (4, 3).  */

function checkPairDiff(A, B) {
    const n = A.length;
    const MOD = 1000000007n;
    let obj = {};
    let count = 0n;

    for (let i = 0; i < n; i++) {
        if (obj.hasOwnProperty(A[i])) {
            obj[A[i]] += 1n
        } else {
            obj[A[i]] = 1n
        }
    }

    for (const key in obj) {
        const target = BigInt(B) + BigInt(key);
        if (obj.hasOwnProperty(target.toString())) {
            count = (count + (obj[key] * obj[target])) % MOD;
        }
    }

    return Number(count)
}

console.log(checkPairDiff([3, 5, 1, 2], 4))
// console.log(checkPairDiff([1, 2, 1, 2], 1))