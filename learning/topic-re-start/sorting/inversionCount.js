/**
 * Problem Description
Given an array of integers A. If i < j and A[i] > A[j], then the pair (i, j) is called an inversion of A. Find the total number of inversions of A modulo (109 + 7).



Problem Constraints
1 <= length of the array <= 105

1 <= A[i] <= 109



Input Format
The only argument given is the integer array A.



Output Format
Return the number of inversions of A modulo (109 + 7).



Example Input
Input 1:

A = [1, 3, 2]
Input 2:

A = [3, 4, 1, 2]


Example Output
Output 1:

1
Output 2:

4


Example Explanation
Explanation 1:

The pair (1, 2) is an inversion as 1 < 2 and A[1] > A[2]
Explanation 2:

The pair (0, 2) is an inversion as 0 < 2 and A[0] > A[2]
The pair (0, 3) is an inversion as 0 < 3 and A[0] > A[3]
The pair (1, 2) is an inversion as 1 < 2 and A[1] > A[2]
The pair (1, 3) is an inversion as 1 < 3 and A[1] > A[3]
 */

function solve(arr) {
    const MOD = 1e9 + 7;
    let inversions = 0;

    function merge(arr, low, mid, high) {
        const temp = [];
        let left = low;
        let right = mid + 1;

        while (left <= mid && right <= high) {
            if (arr[left] <= arr[right]) {
                temp.push(arr[left]);
                left++;
            } else {
                temp.push(arr[right]);
                console.log(inversions, mid, left);
                inversions += (mid - left + 1); // Count inversions
                inversions %= MOD;
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

    function mergeSort(arr, low, high) {
        if (low === high) {
            return;
        }

        const mid = Math.floor((low + high) / 2);
        mergeSort(arr, low, mid); // first half
        mergeSort(arr, mid + 1, high); // second half
        merge(arr, low, mid, high) // merge first and second half;

        return arr;
    }

    mergeSort(arr, 0, arr.length - 1);
    return inversions % MOD;
}

console.log(solve([1, 3, 2])); // 1
console.log(solve([3, 4, 1, 2])); // 4