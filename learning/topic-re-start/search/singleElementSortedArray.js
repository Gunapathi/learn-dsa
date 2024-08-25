/**
 * Problem Description
Given a sorted array of integers A where every element appears twice except for one element which appears once, find and return this single element that appears only once.

Elements which are appearing twice are adjacent to each other.

NOTE: Users are expected to solve this in O(log(N)) time.



Problem Constraints
1 <= |A| <= 100000

1 <= A[i] <= 10^9



Input Format
The only argument given is the integer array A.



Output Format
Return the single element that appears only once.



Example Input
Input 1:

A = [1, 1, 7]
Input 2:

A = [2, 3, 3]


Example Output
Output 1:

 7
Output 2:

 2


Example Explanation
Explanation 1:

 7 appears once
Explanation 2:

 2 appears once
 */

function solve(A) {
    const n = A.length - 1;
    let low = 0,
        high = n;

    // Edge cases: if the first element is unique or the last element is unique
    if (n === 1 || A[low] !== A[low + 1]) {
        return A[0];
    } else if (A[high] !== A[high - 1]) {
        return A[high];
    }

    // Binary search to find the unique element
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        // Check if the mid element is the unique element
        if (A[mid] !== A[mid - 1] && A[mid] !== A[mid + 1]) {
            return A[mid]
        }

        // If mid is even and A[mid] == A[mid + 1], or if mid is odd and A[mid] == A[mid - 1]
        // Move low to mid + 1, otherwise move high to mid - 1
        if ((mid % 2 === 0 && A[mid] === A[mid + 1]) || (mid % 2 != 0 && A[mid] === A[mid - 1])) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    // This should never be reached with valid input
    return -1

}

console.log(solve([1, 1, 7])); // 7
console.log(solve([1, 1, 2, 2, 3, 4, 4])); // 3
console.log(solve([2, 3, 3])); // 2