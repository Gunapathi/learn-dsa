/**
 * Problem Description
You are given an array A of N elements. Sort the given array in increasing order of number of distinct factors of each element, i.e., element having the least number of factors should be the first to be displayed and the number having highest number of factors should be the last one. If 2 elements have same number of factors, then number with less value should come first.

Note: You cannot use any extra space


Problem Constraints
1 <= N <= 104
1 <= A[i] <= 104


Input Format
First argument A is an array of integers.


Output Format
Return an array of integers.


Example Input
Input 1:
A = [6, 8, 9]
Input 2:
A = [2, 4, 7]


Example Output
Output 1:
[9, 6, 8]
Output 2:
[2, 7, 4]


Example Explanation
For Input 1:
The number 9 has 3 factors, 6 has 4 factors and 8 has 4 factors.
For Input 2:
The number 2 has 2 factors, 7 has 2 factors and 4 has 3 factors.
 */

// USING MERGE SORT CONCEPT
function countFactors(x) {
    let count = 0;
    for (let i = 1; i * i <= x; i++) {
        if (x % i === 0) {
            count++;  // i is a factor
            if (i !== x / i) {
                count++;  // x/i is also a factor
            }
        }
    }
    return count;
}

function merge(arr, low, mid, high) {
    let temp = [];
    let left = low;
    let right = mid + 1;

    while (left <= mid && right <= high) {
        const factorsLeft = countFactors(arr[left]);
        const factorsRight = countFactors(arr[right]);

        if (factorsLeft === factorsRight) {
            if (arr[left] <= arr[right]) {
                temp.push(arr[left]);
                left++;
            } else {
                temp.push(arr[right]);
                right++;
            }
        } else if (factorsLeft < factorsRight) {
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

function ms(arr, low, high) {
    if (low === high) {
        return
    }

    let mid = Math.floor((low + high) / 2);
    ms(arr, low, mid); // first half
    ms(arr, mid + 1, high) // second half
    merge(arr, low, mid, high) // merge elements
}

function solve(A) {
    ms(A, 0, A.length - 1);
    return A;
}

console.log(solve([9, 6, 8])); // 9,6,8
console.log(solve([2, 7, 4])); // 2,7,4
console.log(solve([2, 7, 5, 6, 4, 1])); // 1,2,5,7,4,6
