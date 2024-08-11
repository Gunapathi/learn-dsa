/**
 * Problem Description
Given an array of integers A, find and return the minimum value of | A [ i ] - A [ j ] | where i != j and |x| denotes the absolute value of x.



Problem Constraints
2 <= length of the array <= 100000

-109 <= A[i] <= 109



Input Format
The only argument given is the integer array A.



Output Format
Return the minimum value of | A[i] - A[j] |.



Example Input
Input 1:

 A = [1, 2, 3, 4, 5]
Input 2:

 A = [5, 17, 100, 11]


Example Output
Output 1:

 1
Output 2:

 6


Example Explanation
Explanation 1:

 The absolute difference between any two adjacent elements is 1, which is the minimum value.
Explanation 2:

 The minimum value is 6 (|11 - 5| or |17 - 11|).
 */

function merge(arr, low, mid, high) {
    let left = low;
    let right = mid + 1;
    let temp = [];

    while (left <= mid && right <= high) {
        if (arr[left] <= arr[right]) {
            temp.push(arr[left]);
            left++;
        } else {
            temp.push(arr[right]);
            right++;
        }
    }

    while (left <= mid) {
        temp.push(arr[left]);
        left++;
    }

    while (right <= high) {
        temp.push(arr[right]);
        right++;
    }

    for (let i = low; i <= high; i++) {
        arr[i] = temp[i - low];
    }
}

function mergeSort(arr, low, high) {
    if (low === high) {
        return;
    }

    const mid = Math.floor((high + low) / 2);

    mergeSort(arr, low, mid);
    mergeSort(arr, mid + 1, high);
    merge(arr, low, mid, high);

    return arr;
}

function solve(A) {
    mergeSort(A, 0, A.length - 1)

    let minDiff = Infinity;

    for (let i = 1; i < A.length; i++) {
        minDiff = Math.min(minDiff, Math.abs(A[i] - A[i - 1]));
    }

    return minDiff
}

console.log(solve([1, 2, 3, 4, 5])); // 1
console.log(solve([5, 17, 100, 11])); // 6