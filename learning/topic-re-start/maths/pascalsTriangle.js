/**
 * Problem Description

Write a program to print the pascal triangle up to A rows.

Problem Constraints

1 <= A <= 25

Input Format

The first argument is an integer A.

Output Format

Return a 2D array consisting of A rows whose each row contains A integers.

Example Input

Input 1:

A = 3
Input 2:

A = 5

Example Output

Output 1:

1 0 0 
1 1 0 
1 2 1 

Output 2:

1 0 0 0 0
1 1 0 0 0
1 2 1 0 0
1 3 3 1 0
1 4 6 4 1 

Example Explanation

Explanation 1:

Row 1 = 1 0 0 
Row 2 = 1C0 1C1 0 = 1 1 0
Row 3 = 2C0 2C1 2C2 = 1 2 1
 */

function solve(A) {
    let result = Array(A).fill(0).map(() => Array(A).fill(0));

    for (let i = 0; i < A; i++) {
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                result[i][j] = 1;
            } else {
                result[i][j] = result[i - 1][j - 1] + result[i - 1][j];
            }
        }
    }

    return result;
}

console.log(solve(3))
console.log(solve(5))