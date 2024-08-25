/**
 * Problem Description
Given an integer A. Compute and return the square root of A.
If A is not a perfect square, return floor(sqrt(A)).

NOTE: 
   The value of A*A can cross the range of Integer.
   Do not use the sqrt function from the standard library. 
   Users are expected to solve this in O(log(A)) time.


Problem Constraints
0 <= A <= 109


Input Format
The first and only argument given is the integer A.


Output Format
Return floor(sqrt(A))


Example Input
Input 1:

 11
Input 2:

 9


Example Output
Output 1:

 3
Output 2:

 3


Example Explanation
Explanation 1:
When A = 11 , square root of A = 3.316. It is not a perfect square so we return the floor which is 3.
Explanatino 2:
When A = 9 which is a perfect square of 3, so we return 3.
 */

function solve(A) {
    let low = 0;
    let high = A;
    let ans = 0;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        const sqt = mid * mid;

        if (sqt === A) {
            return mid
        } else if (sqt < A) {
            ans = mid;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return ans;
}

console.log(solve(11)) // 3
console.log(solve(9)) // 3