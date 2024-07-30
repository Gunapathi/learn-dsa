/**
 * Problem Description
Given two integer arrays, A and B of size N and M, respectively. Your task is to find all the common elements in both the array.

NOTE:

Each element in the result should appear as many times as it appears in both arrays.
The result can be in any order.


Problem Constraints
1 <= N, M <= 105

1 <= A[i] <= 109



Input Format
First argument is an integer array A of size N.

Second argument is an integer array B of size M.



Output Format
Return an integer array denoting the common elements.



Example Input
Input 1:

 A = [1, 2, 2, 1]
 B = [2, 3, 1, 2]
Input 2:

 A = [2, 1, 4, 10]
 B = [3, 6, 2, 10, 10]


Example Output
Output 1:

 [1, 2, 2]
Output 2:

 [2, 10]
 */

function solve(A, B) {
    const freqMapA = new Map();
    let res = [];

    for (let num of A) {
        if (freqMapA.has(num)) {
            freqMapA.set(num, freqMapA.get(num) + 1);
        } else {
            freqMapA.set(num, 1)
        }
    }

    for (let num of B) {
        if (freqMapA.has(num) && freqMapA.get(num) > 0) {
            res.push(num);
            freqMapA.set(num, freqMapA.get(num) - 1);
        }
    }

    return res;
}

console.log(solve([1, 2, 2, 1], [2, 3, 1, 2])); // [1, 2, 2]
console.log(solve([2, 1, 4, 10], [3, 6, 2, 10, 10])); // [2, 10]