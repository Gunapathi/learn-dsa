/* 

Problem Description
You will be given an integer n. You need to return the count of prime numbers less than or equal to n.


Problem Constraints
0 <= n <= 10^3


Input Format
Single input parameter n in function.


Output Format
Return the count of prime numbers less than or equal to n.


Example Input
Input 1:
19
Input 2:
1


Example Output
Output 1:
8
Output 2:
0


Example Explanation
Explanation 1:
Primes <= 19 are 2, 3, 5, 7, 11, 13, 17, 19
Explanation 2:
There are no primes <= 1

*/

function primeCount(A) {
    let primeCount = 0;
    for (let i = 1; i <= A; i++) {
        let count = 0;
        for (let j = 1; j <= i / j; j++) {
            if (i % j == 0) {
                count++;
                if (j != i / j) {
                    count++;
                }
            }
        }
        count == 2 && primeCount++;
    }
    return primeCount;
}

console.log(primeCount(19))