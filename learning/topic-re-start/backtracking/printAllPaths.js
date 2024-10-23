/**
 * Problem Description

You are given the dimensions of a rectangular board of size A x B. You need to print all the possible paths from top-left corner to bottom-right corner of the board.

You can only move down (denoted by 'D') or right (denoted by 'R') at any point in time.

NOTE : You need to return all the paths in Lexicographically sorted order. A lexicographic order is an arrangement of characters in alphabetical order.


Problem Constraints

1 <= A, B <= 8



Input Format

First Argument is an Integer A, which denotes the Row Index.
Second Argument is an Integer B, which denotes the Column Index.


Output Format

Return a String Array, which denotes all the possible paths in separate lines. The paths should be returned in the Lexicographical order.


Example Input

Input 1 :
A = 3 , B = 2
Input 2 :
A = 1 , B = 2


Example Output

Output 1 :
DDR DRD RDD
Output 2 :
R


Example Explanation

For Input 1 :
The size of the matrix is 3x2.
You are currently standing at (0, 0), the possible paths to bottom right cell (2, 1) are : 
- (0, 0) -> (1, 0) -> (2, 0) -> (2, 1)  which corresponds to DDR
- (0, 0) -> (1, 0) -> (1, 1) -> (2, 1)  which corresponds to DRD
- (0, 0) -> (0, 1) -> (1, 1) -> (2, 1)  which corresponds to RDD

NOTE: Printing DRD, RDD before DDR would be incorrect as the output should be given in Lexicographical order. 
For Input 2 :
The size of the matrix is 1x2.
You are currently standing at (0, 0), the possible paths to bottom right cell (0, 1) are : 
- (0, 0) -> (0, 1)  which corresponds to R

This is the only possible path.
 */

function PrintAllPaths(A, B) {
    let ans = [];

    function trackpath(row, col, path) {
        if (row === A - 1 && col === B - 1) {
            ans.push(path);
        }

        if (row < A - 1) {
            // We can move down
            trackpath(row + 1, col, path + 'D');
        }

        if (col < B - 1) {
            // We can move right
            trackpath(row, col + 1, path + 'R');
        }
    }

    trackpath(0, 0, [])
    return ans;
}

console.log(PrintAllPaths(3, 2)) // DDR DRD RDD
console.log(PrintAllPaths(1, 2)) // R