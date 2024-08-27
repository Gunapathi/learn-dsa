/**
 * Problem Description
Given an array of integers A of size N and an integer B.

In a single operation, any one element of the array can be increased by 1. You are allowed to do at most B such operations.

Find the number with the maximum number of occurrences and return an array C of size 2, where C[0] is the number of occurrences, and C[1] is the number with maximum occurrence.
If there are several such numbers, your task is to find the minimum one.



Problem Constraints
1 <= N <= 105

-109 <= A[i] <= 109

0 <= B <= 109



Input Format
The first argument given is the integer array A.
The second argument given is the integer B.



Output Format
Return an array C of size 2, where C[0] is number of occurence and C[1] is the number with maximum occurence.



Example Input
Input 1:

 A = [3, 1, 2, 2, 1]
 B = 3
Input 2:

 A = [5, 5, 5]
 B = 3


Example Output
Output 1:

 [4, 2]
Output 2:

 [3, 5]


Example Explanation
Explanation 1:

 Apply operations on A[2] and A[4]
 A = [3, 2, 2, 2, 2]
 Maximum occurence =  4
 Minimum value of element with maximum occurence = 2
Explanation 2:

 A = [5, 5, 5]
 Maximum occurence =  3
 Minimum value of element with maximum occurence = 5
 */

/**
 * EXPLANATION
 * 
 * step-by-step explanation of the solution:

Step 1: Sort the array The first step is to sort the input array A in ascending order. This is done to make it easier to find the maximum frequency of a number.

Step 2: Initialize variables The solution initializes several variables:

n: the length of the input array A
left: the left boundary of the sliding window
totalOperations: the total number of operations needed to make all elements in the window equal
maxFrequency: the maximum frequency of a number found so far (initialized to 1)
bestNumber: the number with the maximum frequency found so far (initialized to the first element of the sorted array)
Step 3: Iterate through the array The solution iterates through the sorted array using a right pointer right. For each element, it calculates the number of operations needed to make all elements in the window (from left to right) equal to the current element A[right]. This is done by subtracting the previous element A[right - 1] from the current element and multiplying by the window size right - left.

Step 4: Shrink the window if necessary If the total number of operations exceeds B, the solution shrinks the window from the left by incrementing left and subtracting the operations needed to make the leftmost element equal to the current element.

Step 5: Update maxFrequency and bestNumber If the current window size right - left + 1 is greater than the maximum frequency found so far, the solution updates maxFrequency and bestNumber with the new values.

Step 6: Return the result Finally, the solution returns an array with the maximum frequency maxFrequency and the number with the maximum frequency bestNumber.

The time complexity of this solution is O(n log n) due to the sorting step, and the space complexity is O(1) since only a few extra variables are used.
 */

function solve(A, B) {
    A.sort((a, b) => a - b); // Step 1: Sort the array
    let n = A.length;
    let left = 0;
    let totalOperations = 0;
    let maxFrequency = 1; // Start with at least 1 occurrence
    let bestNumber = A[0];

    for (let right = 1; right < n; right++) {
        // Calculate operations needed to make all elements in the window equal to A[right]
        totalOperations += (A[right] - A[right - 1]) * (right - left);

        // If total operations exceed B, shrink the window from the left
        while (totalOperations > B) {
            totalOperations -= A[right] - A[left];
            left++;
        }

        // Update maxFrequency and bestNumber if we found a better window
        if (right - left + 1 > maxFrequency) {
            maxFrequency = right - left + 1;
            bestNumber = A[right];
        }
    }

    return [maxFrequency, bestNumber];
}

console.log(solve([3, 1, 2, 2, 1], 3)) // [4, 2]
console.log(solve([5, 5, 5], 3)) // [3, 5]