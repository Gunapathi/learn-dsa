/**
 *
Problem Description
 
You are working on a project to analyze profit for a given set of days. You have been given an array A with profit for N days. You also have Q queries represented by a 20 array B of size Qx2. Each query consists of two integers B[i][0] and B[i][1]
 
For every query, your task is to find the count of non-negative profit in the range from A[B[i][0]] to A[B[i][1]]
 
Problem Constraints
 
AI-N BIQ 1 <= N, Q <= 10 ^ 5 - 10 deg <= A[i] <= 10 deg 0 <= B[i][0] <= B[i][1] <= N - 1
 
Input Format
 
First arguemnt A, is an array
 
Second argument B, is a matrix
 
Output Format
 
Return an array

Example Input
 
Issues?
 
Input 1:
 
A[1-1, 01
 
[3, 211
 
Input 2:
 
A=11, 2]
 
[1, 111
 
Example Output
 
Output 1:
 
[2,2]
 
Output 2:
 
[0, 0]
 
Get
 
Example Explanation
 
For Input 1:
 
Consider e-based indexing:
 
Number of non-negative elements from [0, 2] is 2.
 
tumber of non negative elements from [1, 2] is 1.
 
For Input 2:
 
Number of non-negative elements from [0, 0] is 0.
 
Number of non-negative elements from [1, 1] is 0.
 */

function removeNegative(A, B) {
    let result = []
    let prefixSum = [0]

    // Create prefix sum array
    for (let i = 0; i < A.length; i++) {
        prefixSum[i + 1] = prefixSum[i] + (A[i] >= 0 ? 1 : 0)
    }

    // Calculate result using prefix sum array
    for (let i = 0; i < B.length; i++) {
        result.push(prefixSum[B[i][1] + 1] - prefixSum[B[i][0]])
    }

    return result
}

console.log(removeNegative([1, -1, 0], [[0, 2], [1, 2]])) // Output: [2, 1]
console.log(removeNegative([-1, -2], [[0, 0], [1, 1]])) // Output: [0, 0]
