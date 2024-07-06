/**Problem Description
Given an integer A, find and return the total number of digit 1 appearing in all non-negative integers less than or equal to A.



Problem Constraints
0 <= A <= 109



Input Format
The only argument given is the integer A.



Output Format
Return the total number of digit 1 appearing in all non-negative integers less than or equal to A.



Example Input
Input 1:

 A = 10
Input 2:

 A = 11


Example Output
Output 1:

 2
Output 2:

 4


Example Explanation
Explanation 1:

Digit 1 appears in 1 and 10 only and appears one time in each. So the answer is 2.
Explanation 2:

Digit 1 appears in 1(1 time) , 10(1 time) and 11(2 times) only. So the answer is 4. */

function countDigitOne(A) {
    let count = 0;
    let factor = 1;
    let n = A;

    while (n > 0) {
        let digit = n % 10;
        let higher = Math.floor(A / (factor * 10));
        let lower = A % factor;

        // Counting the number of ones contributed by the current digit place
        if (digit > 1) {
            count += (higher + 1) * factor;
        } else if (digit === 1) {
            count += higher * factor + lower + 1;
        } else {
            count += higher * factor;
        }

        factor *= 10;
        n = Math.floor(n / 10);
    }

    return count;
}

console.log(countDigitOne(10)); // Output: 2
console.log(countDigitOne(11)); // Output: 4