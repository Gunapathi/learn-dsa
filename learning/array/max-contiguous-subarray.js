/**Problem Description
Find the maximum sum of contiguous non-empty subarray within an array A of length N.



Problem Constraints
1 <= N <= 1e6
-1000 <= A[i] <= 1000



Input Format
The first and the only argument contains an integer array, A.



Output Format
Return an integer representing the maximum possible sum of the contiguous subarray.



Example Input
Input 1:

 A = [1, 2, 3, 4, -10] 
Input 2:

 A = [-2, 1, -3, 4, -1, 2, 1, -5, 4] 


Example Output
Output 1:

 10 
Output 2:

 6 


Example Explanation
Explanation 1:

 The subarray [1, 2, 3, 4] has the maximum possible sum of 10. 
Explanation 2:

 The subarray [4,-1,2,1] has the maximum possible sum of 6.  */

function maxSubArray(A) {
    let max = -Infinity, curr = 0;

    for (let i = 0; i < A.length; i++) {
        curr += A[i];

        if (curr > max) {
            max = curr;
        }

        if (curr < 0) {
            curr = 0;
        }
    }

    return max
}

console.log(maxSubArray([3, 2, 1]))
console.log(maxSubArray([3, 3, 5, 0, 1]))
console.log(maxSubArray([1, 2, 3, 4, -10]))
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))