/**
 * Problem Description
Given an array of integers A, we call (i, j) an important reverse pair if i < j and A[i] > 2*A[j].
Return the number of important reverse pairs in the given array A.



Problem Constraints
1 <= length of the array <= 105

-2 * 109 <= A[i] <= 2 * 109



Input Format
The only argument given is the integer array A.



Output Format
Return the number of important reverse pairs in the given array A.



Example Input
Input 1:

 A = [1, 3, 2, 3, 1]
Input 2:

 A = [4, 1, 2]


Example Output
Output 1:

 2
Output 2:

 1


Example Explanation
Explanation 1:

 There are two pairs which are important reverse pair 
 i.e  (1, 4) => A[1] > 2 * A[4] => 3 > 2 * 1 => 3 > 2 and
      (3, 4) => A[3] > 2 * A[4] => 3 > 2 * 1 => 3 > 2.
Explanation 2:

 There is only one pair 
 i.e (0, 1) => A[0] > 2 * A[1] => 4 > 2 * 1 => 4 > 1
 */

function merge(arr, low, mid, high) {
    let temp = [];
    let left = low;
    let right = mid + 1;

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

    return arr;
}

function countParis(arr, low, mid, high) {
    let right = mid + 1;
    let count = 0;
    for (let i = low; i <= mid; i++) {
        while (right <= high && arr[i] > (2 * arr[right])) {
            right++;
        }

        count += (right - (mid + 1))
    }

    return count;
}

function mergeSort(arr, low, high) {
    let count = 0;

    if (low === high) {
        return count;
    }

    const mid = Math.floor((low + high) / 2);
    count += mergeSort(arr, low, mid); // first half
    count += mergeSort(arr, mid + 1, high); // second half
    count += countParis(arr, low, mid, high)
    merge(arr, low, mid, high) // merge first and second half;

    return count;
}

function solve(arr) {
    return mergeSort(arr, 0, arr.length - 1);
}

console.log(solve([1, 3, 2, 3, 1])) // 2
console.log(solve([4, 1, 2])) // 1