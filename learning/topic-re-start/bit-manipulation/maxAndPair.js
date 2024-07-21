/**
 * Problem Description
Given an array A. For every pair of indices i and j (i != j), find the maximum A[i] & A[j].


Problem Constraints
1 <= len(A) <= 105
1 <= A[i] <= 109


Input Format
The first argument is an integer array A.


Output Format
Return a single integer that is the maximum A[i] & A[j].


Example Input
Input 1:-
A = [53, 39, 88]
Input 2:-
A = [38, 44, 84, 12] 


Example Output
Output 1:-
37
Output 2:-
36


Example Explanation
Explanation 1:-
53 & 39 = 37
39 & 88 = 0
53 & 88 = 16
Maximum among all these pairs is 37
Explanation 2:-
Maximum bitwise and among all pairs is (38, 44) = 36
 */

function solve(A) {
    // initialize a ans variable to hold the final answer (denoting number of maximum & of two numbers from the array)
    let ans = 0;
    // loop (for i)from the 31st bit to the 0th bit as the most significant bit starts from the left most bit
    for (let i = 31; i >= 0; i--) {
        // include a count variable initialized to 0
        let setBitsCount = 0;
        // loop (for j) over all the numbers in array
        for (let j = 0; j < A.length; j++)
            // check the ith bit in jth number in the array is set or not
            if (checkBit(A[j], i)) setBitsCount++; // increment count variable if it is set
        // check if the count of all ith bit of all A[j] numbers are greater than or equal to two
        if (setBitsCount >= 2) {
            // as the count is greater than or equal to 2, that means, this can contribute as a set bit (i.e: 1&1=1, thats why we need at least 2 set bits)
            ans += (1 << i);
            // loop again and delete (as in set the jth number to zero) all nums that were unset at ith bit as they will never contribute maximum number to our ans variable
            for (let j = 0; j < A.length; j++) if (!(checkBit(A[j], i))) A[j] = 0;
        }
    }
    return ans;
}

let checkBit = (num, i) => {
    if ((Number(num) & (1 << i)) == 0)
        return false;
    else
        return true;
}

console.log(solve([53, 39, 88])) // 37
console.log(solve([38, 44, 84, 12])) // 36