/**
 * Problem Description
Given an array A. Sort this array using Count Sort Algorithm and return the sorted array.


Problem Constraints
1 <= |A| <= 105
1 <= A[i] <= 105


Input Format
The first argument is an integer array A.


Output Format
Return an integer array that is the sorted array A.


Example Input
Input 1:
A = [1, 3, 1]
Input 2:
A = [4, 2, 1, 3]


Example Output
Output 1:
[1, 1, 3]
Output 2:
[1, 2, 3, 4]


Example Explanation
For Input 1:
The array in sorted order is [1, 1, 3].
For Input 2:
The array in sorted order is [1, 2, 3, 4].
 */

function solve(A) {
    let maxVal = A[0];

    // find maxVal in A
    for (let i = 1; i < A.length; i++) {
        if (A[i] > maxVal) {
            maxVal = A[i];
        }
    }

    // create array
    const freqArr = new Array(maxVal + 1).fill(0);

    // count occurrences of array elements
    for (let i = 0; i < A.length; i++) {
        freqArr[A[i]]++;
    }

    // Modify the frequency array to have cumulative sums in the same loop
    for (let i = 1; i <= maxVal; i++) {
        freqArr[i] += freqArr[i - 1];
    }

    // output array
    const output = new Array(A.length).fill(0);

    for (let i = 0; i < A.length; i++) {
        output[freqArr[A[i]] - 1] = A[i];
        freqArr[A[i]]--;
    }

    return output; // Return the sorted array
}

console.log(solve([1, 3, 1])); // [1, 1, 3]
console.log(solve([4, 2, 1, 3])); // [1, 2, 3, 4]