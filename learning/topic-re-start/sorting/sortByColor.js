/**
 * Problem Description
Given an array with N objects colored red, white, or blue, sort them so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will represent the colors as,

red -> 0
white -> 1
blue -> 2

Note: Using the library sort function is not allowed.



Problem Constraints
1 <= N <= 1000000
0 <= A[i] <= 2


Input Format
First and only argument of input contains an integer array A.


Output Format
Return an integer array in asked order


Example Input
Input 1 :
    A = [0, 1, 2, 0, 1, 2]
Input 2:

    A = [0]


Example Output
Output 1:
    [0, 0, 1, 1, 2, 2]
Output 2:

    [0]


Example Explanation
Explanation 1:
    [0, 0, 1, 1, 2, 2] is the required order.
Explanation 2:
    [0] is the required order
 */

function ducthNationalFlagAlgo(arr, start, mid, end) {
    let low = start;
    let curr = mid;
    let high = end;

    while (curr <= high) {
        if (arr[curr] === 0) {
            [arr[low], arr[curr]] = [arr[curr], arr[low]];
            low++;
            curr++;
        } else if (arr[curr] === 1) {
            curr++;
        } else {
            [arr[curr], arr[high]] = [arr[high], arr[curr]];
            high--;
        }
    }

    return arr;
}

function solve(A) {
    return ducthNationalFlagAlgo(A, 0, 0, A.length - 1)

}

console.log(solve([0, 1, 2, 0, 1, 2])) // [0, 0, 1, 1, 2, 2]
console.log(solve([0])) // [0]