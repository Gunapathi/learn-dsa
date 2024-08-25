/**
 * Problem Description
You are given a 2-D matrix C of size A × B.
You need to build a new 1-D array of size A by taking one element from each row of the 2-D matrix in such a way that the cost of the newly built array is minimized.

The cost of an array is the minimum possible value of the absolute difference between any two adjacent elements of the array.

So if the newly built array is X, the element picked from row 1 will become X[1], element picked from row 2 will become X[2], and so on.

Determine the minimum cost of the newly built array.



Problem Constraints
2 <= A <= 1000
2 <= B <= 1000
1 <= C[i][j] <= 106



Input Format
The first argument is an integer A denoting number of rows in the 2-D array.
The second argument is an integer B denoting number of columns in the 2-D array.
The third argument is a 2-D array C of size A x B.



Output Format
Return an integer denoting the minimum cost of the newly build array.



Example Input
Input 1:

 A = 2
 B = 2
 C = [ [8, 4]
      [6, 8] ]
Input 2:

 A = 3
 B = 2
 C = [ [7, 3]
       [2, 1]
       [4, 9] ]


Example Output
Output 1:

 0
Output 2:

 1


Example Explanation
Explanation 1:

 Newly build array : [8, 8]. The minimum cost will be 0 since the absolute difference will be 0(8-8).
Explanation 2:

 Newly build array : [3, 2, 4]. The minimum cost will be 1 since the minimum absolute difference will be 1(3 - 2).
 */

function lowerBoundInNextRow(arr, target) {
    let low = 0;
    let high = arr.length - 1;
    let ans = Infinity;

    while (low <= high) {
        let mid = (low + high) >> 1;

        if (arr[mid] >= target) {
            ans = arr[mid];
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return ans;
}

function upperBoundInNextRow(arr, target) {
    let low = 0;
    let high = arr.length - 1;
    let ans = Infinity;

    while (low <= high) {
        let mid = (low + high) >> 1;

        if (arr[mid] <= target) {
            ans = arr[mid];
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return ans;
}

function solve(A, B, C) {
    // Sort each row of the C
    for (let i = 0; i < A; i++) {
        C[i].sort((a, b) => a - b);
    }

    // Initialize ans with a large value
    let ans = Infinity;

    // Iterate over each row (except the last one)
    for (let i = 0; i < A - 1; i++) {
        // Iterate over each element in the current row
        for (let j = 0; j < B; j++) {
            // Find lower and upper bounds in the next row
            const nextRow = C[i + 1];

            const lowerBound = lowerBoundInNextRow(nextRow, C[i][j]);
            const upperBound = upperBoundInNextRow(nextRow, C[i][j]);

            ans = Math.min(ans,
                Math.min(Math.abs(upperBound - C[i][j]), Math.abs(C[i][j] - lowerBound))
            )
        }
    }

    // Return the final value of ans
    return ans;
}

console.log(solve(2, 2, [[8, 4], [6, 8]])) // 0
console.log(solve(3, 2, [[7, 3], [2, 1], [4, 9]])) // 1