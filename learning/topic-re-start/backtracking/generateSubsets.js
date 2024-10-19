/**
 * Problem Description

Given a set of distinct integers A, return all possible subsets that can be formed from the elements of array A.



Problem Constraints

1 ≤ |A| ≤ 16

INT_MIN ≤ A[i] ≤ INT_MAX

Array A is given in increasing order.

All elements of array A are distinct.



Input Format

First and only argument of input contains a single integer array A.



Output Format

Return a vector of vectors denoting the answer in any order.



Example Input

Input 1:

A = [1]
Input 2:

A = [1, 2, 3]


Example Output

Output 1:

[
    []
    [1]
]
Output 2:

[
 []
 [1]
 [1, 2]
 [1, 2, 3]
 [1, 3]
 [2]
 [2, 3]
 [3]
]
 */

/**
 * 
  
 class Solution {
    subsets(A) {
        let ans = [];
        getAllSets(A, 0, ans, []);
        return ans;
    }
}

const getAllSets = (A, length, ans, arr) => {
    if(length == A.length) {
        ans.push(arr);
        return;
    }
    getAllSets(A, length + 1, ans, [...arr]);
    arr.push(A[length]);
    getAllSets(A, length + 1, ans, [...arr]);
}

 */

class Solution {
    subsets(A) {
        // code here
        let ans = [];
        getAllSets(A, 0, ans, []);
        return ans;
    }
}

const getAllSets = (givenArr, index, ans, currArr) => {
    if (givenArr.length === index) {
        ans.push([...currArr]); // Push a copy of currArr
        return;
    }

    // Case 1: Don't pick the element at current index
    getAllSets(givenArr, index + 1, ans, currArr);

    // Case 2: Pick the element at current index
    currArr.push(givenArr[index]);
    getAllSets(givenArr, index + 1, ans, currArr);
    // Backtrack to remove the picked element for other branches
    currArr.pop();
}

// Example usage
let solution = new Solution();
console.log(solution.subsets([1]));       // Output: [[], [1]]
console.log(solution.subsets([1, 2, 3])); // Output: [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]