/**Problem Description
Given an array A of size N, find the subarray of size B with the least average.



Problem Constraints
1 <= B <= N <= 105
-105 <= A[i] <= 105


Input Format
First argument contains an array A of integers of size N.
Second argument contains integer B.


Output Format
Return the index of the first element of the subarray of size B that has least average.
Array indexing starts from 0.


Example Input
Input 1:
A = [3, 7, 90, 20, 10, 50, 40]
B = 3
Input 2:

A = [3, 7, 5, 20, -10, 0, 12]
B = 2


Example Output
Output 1:
3
Output 2:

4


Example Explanation
Explanation 1:
Subarray between indexes 3 and 5
The subarray {20, 10, 50} has the least average 
among all subarrays of size 3.
Explanation 2:

 Subarray between [4, 5] has minimum average */

// BRUTE FORCE

function minAvg(A, B) {
    let ans = 0;
    let resIndex = 0;

    for (let i = 0; i <= A.length - B; i++) {
        let currSum = 0;

        for (let j = i; j < (i + B); j++) {
            currSum += A[j];
        }

        if (i === 0)
            ans = currSum

        if (i != 0 && currSum < ans) {
            ans = currSum
            resIndex = i
        }
    }

    return resIndex;
}

// function minAvg(A, B) {
//     let sum = 0;
//     let minSum = Number.MAX_SAFE_INTEGER;
//     let minIndex = 0;

//     for (let i = 0; i < B; i++) {
//         sum += A[i];
//     }

//     minSum = sum;

//     // Slide the window and update minSum and minIndex
//     for (let i = B; i < A.length; i++) {
//         sum += A[i] - A[i - B];

//         if (sum < minSum) {
//             minSum = sum;
//             minIndex = i - B + 1;
//         }
//     }

//     return minIndex;
// }

console.log(minAvg([3, 7, 90, 20, 10, 50, 40], 3))
// console.log(minAvg([20, 3, 13, 5, 10, 14, 8, 5, 11, 9, 1, 11], 9))
// console.log(minAvg([15, 7, 11, 7, 9, 8, 18, 1, 16, 18, 6, 1, 1, 4, 18], 6))
// console.log(minAvg([3, 16, 11, 13, 19, 17, 11, 4, 9, 9, 6, 7, 3, 6, 12, 3, 4, 15, 5, 19], 1))