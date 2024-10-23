/**
 * Problem Description

Given an MxN matrix where each element can either be 0 or 1. We need to find the length of shortest path between a given source cell to a destination cell.

A cell with value 0 denotes that it's a hurdle. The path can only be created out of the cells with values 1.
If NO path exists then print -1.

The matrix A is given as input of size M x N.
The coordinates of Source cell are given by B, C.
The coordinates of Destination cell are given by D, E.



Problem Constraints

1 <= N , M <= 8
0 <= A[i][j] <= 1
0 <= B, C < N
0 <= D, E < M
A[B][C] == A[D][E] == 1


Input Format

First Argument is a 2-D Integer Array denotes the matrix A, of size MxN.
Second Argument is an Integer B, denoting the Source Row Index
Third Argument is an Integer C, denoting the Source Column Index
Fourth Argument is an Integer D, denoting the Destination Row Index
Fifth Argument is an Integer E, denoting the Destination Column Index


Output Format

Output a single integer denoting the length of the minimum distance from Source to destination


Example Input

Input 1 :
A = [[1, 1, 0, 0],
     [0, 1, 1, 0],
     [0, 0, 1, 1],
     [0, 0, 0, 1]]
B = 0, C = 0
D = 3, E = 3
Input 2 :
A = [[1, 1, 1],
     [1, 0, 1],
     [1, 1, 1]]
B = 0, C = 0
D = 0, E = 2
Input 3 :
A = [[1, 0, 1],
     [1, 0, 1],
     [1, 0, 1]]
B = 0, C = 0
D = 0, E = 2



Example Output

Output 1 :
6
Output 2 :
2
Output 3 :
-1


Example Explanation

For Input 1 :
The shortest path is (0,0) -> (0,1) -> (1,1) -> (1,2) -> (2,2) -> (2,3) -> (3,3)
For Input 2 :
The shortest path is (0,0) -> (0,1) -> (0,2) 
For Input 3 :
No path exists so we return -1
 */


/**
 * 
 Parameters:
    visited: The matrix tracking visited cells.
    cell: The original matrix A.
    i, j: Current cell coordinates.
    ti, tj: Target cell coordinates.
    res: Current path length

Base Case: 
    If the current cell (i, j) is the target cell (ti, tj), update ans with the minimum distance found.

Recursive Case: 
    Explore all four possible directions (down, up, right, left) from the current cell.
    
Backtracking: 
    Mark the cell as visited before exploring and unmark it after exploring all directions.
 */

function FindShortestPath(A, B, C, D, E) {
    let ans = Number.MAX_SAFE_INTEGER;
    const rows = A.length;
    const cols = A[0].length;
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

    function findPath(visited, cell, i, j, ti, tj, res) {
        if (i === ti && j === tj) {
            ans = Math.min(res, ans);
            return;
        }

        if (inValid(visited, cell, i, j)) {
            return;
        }

        visited[i][j] = true;

        // down
        findPath(visited, cell, i + 1, j, ti, tj, res + 1);

        // top
        findPath(visited, cell, i - 1, j, ti, tj, res + 1);

        // right
        findPath(visited, cell, i, j + 1, ti, tj, res + 1);

        // left
        findPath(visited, cell, i, j - 1, ti, tj, res + 1);

        visited[i][j] = false;
    }

    function inValid(visited, cell, i, j) {
        if (i < 0 || i >= rows || j < 0 || j >= cols || visited[i][j] || cell[i][j] === 0) {
            return true;
        }
        return false;
    }

    findPath(visited, A, B, C, D, E, 0);

    return ans === Number.MAX_SAFE_INTEGER ? -1 : ans;
}

console.log(FindShortestPath([[1, 1, 0, 0],
[0, 1, 1, 0],
[0, 0, 1, 1],
[0, 0, 0, 1]], 0, 0, 3, 3)); // 6
console.log(FindShortestPath([[1, 1, 1],
[1, 0, 1],
[1, 1, 1]], 0, 0, 0, 2)); // 2
console.log(FindShortestPath([[1, 0, 1],
[1, 0, 1],
[1, 0, 1]], 0, 0, 0, 2)); // -1
