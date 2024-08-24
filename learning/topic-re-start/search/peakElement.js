/**
 * Problem Description
Given an array of integers A, find and return the peak element in it.
An array element is considered a peak if it is not smaller than its neighbors. For corner elements, we need to consider only one neighbor.

NOTE:

It is guaranteed that the array contains only a single peak element.
Users are expected to solve this in O(log(N)) time. The array may contain duplicate elements.


Problem Constraints
1 <= |A| <= 100000

1 <= A[i] <= 109



Input Format
The only argument given is the integer array A.



Output Format
Return the peak element.



Example Input
Input 1:

A = [1, 2, 3, 4, 5]
Input 2:

A = [5, 17, 100, 11]


Example Output
Output 1:

 5
Output 2:

 100


Example Explanation
Explanation 1:

 5 is the peak.
Explanation 2:

 100 is the peak.
 */

function solve() {
    let low = 0;
    let high = A.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        // Check if the middle element is a peak
        if ((mid === 0 || A[mid] >= A[mid - 1]) && (mid === A.length - 1 || A[mid] >= A[mid + 1])) {
            return A[mid];
        }

        // If middle element is not a peak and its left neighbor is greater, then left half must have a peak
        if (mid > 0 && A[mid - 1] > A[mid]) {
            high = mid - 1;
        } else {  // Otherwise, the right half must have a peak
            low = mid + 1;
        }
    }

    return -1; // This line should never be reached because a peak is guaranteed
}

console.log(solve());
console.log(solve());