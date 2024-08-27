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

function solve(A) {
    if (A.length === 1) {
        return A[0];
    }

    let low = 0,
        high = A.length - 1;

    while (low <= high) {
        let mid = (low + high) >> 1;

        if ((mid === 0 || A[mid] >= A[mid - 1]) && (mid === A.length - 1 || A[mid] >= A[mid + 1])) {
            return A[mid];
        } else if (mid != A.length - 1 && A[mid + 1] >= A[mid]) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return -1;
}

console.log(solve([1, 2, 3, 4, 5])); // 5
console.log(solve([5, 17, 100, 11])); // 100