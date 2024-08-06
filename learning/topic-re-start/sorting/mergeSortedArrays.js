/**
 * Problem Description
Given two sorted integer arrays A and B, merge B and A as one sorted array and return it as an output.

Note: A linear time complexity is expected and you should avoid use of any library function.


Problem Constraints
-2×109 <= A[i], B[i] <= 2×109
1 <= |A|, |B| <= 5×104


Input Format
First Argument is a 1-D array representing  A.
Second Argument is also a 1-D array representing B.


Output Format
Return a 1-D vector which you got after merging A and B.


Example Input
Input 1:

A = [4, 7, 9]
B = [2, 11, 19]
Input 2:

A = [1]
B = [2]


Example Output
Output 1:

[2, 4, 7, 9, 11, 19]
Output 2:

[1, 2]


Example Explanation
Explanation 1:

Merging A and B produces the output as described above.
Explanation 2:

 Merging A and B produces the output as described above.
 */

function solve(A, B) {
    const freqArr = new Array(A.length + B.length).fill(0);
    let p1 = 0, p2 = 0, k = 0;

    while (p1 < A.length && p2 < B.length) {
        if (A[p1] < B[p2]) {
            freqArr[k] = A[p1];
            k++;
            p1++;
        } else {
            freqArr[k] = B[p2];
            k++;
            p2++;
        }
    }

    while (p1 < A.length) {
        freqArr[k] = A[p1];
        k++;
        p1++;
    }

    while (p2 < B.length) {
        freqArr[k] = B[p2];
        k++;
        p2++;
    }

    return freqArr
}

console.log(solve([4, 7, 9], [2, 11, 19])) // [2, 4, 7, 9, 11, 19]
console.log(solve([1], [2])) // [1, 2]