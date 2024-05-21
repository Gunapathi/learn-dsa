/**Problem Description
You are given a N X N integer matrix. You have to find the sum of all the main diagonal elements of A.

Main diagonal of a matrix A is a collection of elements A[i, j] such that i = j.


Problem Constraints
1 <= N <= 103

-1000 <= A[i][j] <= 1000



Input Format
There are 1 lines in the input. First 2 integers R, C are the number of rows and columns. Then R * C integers follow corresponding to the rowwise numbers in the 2D array A.



Output Format
Return an integer denoting the sum of main diagonal elements.



Example Input
Input 1:

3 3 1 -2 -3 -4 5 -6 -7 -8 9
Input 2:

2 2 3 2 2 3


Example Output
Output 1:

 15 
Output 2:

 6 


Example Explanation
Explanation 1:

The size of matrix is 3.
So, considering the indexing from 0.
Main diagonal elements will be A[0][0], A[1][1] and A[2][2]
A[1][1] + A[2][2] + A[3][3] = 1 + 5 + 9 = 15
Explanation 2:

The size of matrix is 2.
So, considering the indexing from 0.
Main diagonal elements will be A[0][0] and A[1][1].
A[1][1] + A[2][2] = 3 + 3 = 6 */

function allDiagnolSum(A) {
    const rowLen = A.length;
    let sum = 0;

    for (let i = 0; i < rowLen; i++) {
        sum += A[i][i];
    }

    return sum;
}

console.log(allDiagnolSum([[47, -59, 20, 33, 20, -47, -87, -59, 85], [8, -67, 48, -10, -23, -68, -28, 62, -94], [-50, 77, -39, -57, 15, 71, 44, 13, -53], [-30, 43, -92, -94, 42, 37, 95, 7, 19], [-1, 92, -85, 20, -53, -16, 31, -95, 4], [-62, 49, 0, 53, -93, -61, -49, 86, 97], [62, -26, -1, -38, 59, -93, -93, 12, -90], [78, 85, 90, 89, -65, 5, 48, 40, -86], [-79, -68, -89, 90, -40, 47, 68, -25, 92]]))