/*

Problem Description
Given an integer A, you need to find the count of it's factors.

Factor of a number is the number which divides it perfectly leaving no remainder.

Example : 1, 2, 3, 6 are factors of 6


Problem Constraints
1 <= A <= 109


Input Format
First and only argument is an integer A.


Output Format
Return the count of factors of A.


Example Input
Input 1:
5
Input 2:
10


Example Output
Output 1:
2
Output 2:
4


Example Explanation
Explanation 1:
Factors of 5 are 1 and 5.
Explanation 2:
Factors of 10 are 1, 2, 5 and 10.

*/


function countFactor2(A) {
    let count = 0;
    for (let i = 1; i <= A / i; i++) {
        if (A % i == 0) {
            count++;
            if (i != A / i) {
                count++
            }
        }
    }
    return count
}

console.log(countFactor2(10))