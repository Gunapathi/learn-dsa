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
    let count = 0; //  total count of digit '1'
    let factor = 1; // current digit place (1 for units, 10 for tens, 100 for hundreds, etc.)
    let n = A; // number of digits

    while (n > 0) { //loop runs as long as n is greater than 0.
        let digit = n % 10; // current digit
        let higher = Math.floor(A / (factor * 10)); // higher part of the number
        let lower = A % factor; // lower part of the number  

        // Counting the number of ones contributed by the current digit place
        if (digit > 1) {
            // If current_digit > 1, there are ((higher + 1) * factor) contributions of digit '1'.
            count += (higher + 1) * factor;
        } else if (digit === 1) {
            // If the current_digit === 1, add the contributions from ((higher * factor) + (lower part + 1)) to include the current digit itself.
            count += higher * factor + lower + 1;
        } else {
            // If the current_digit === 0, then count > (higher * factor).
            count += higher * factor;
        }

        factor *= 10; // move to the next higher digit place
        n = Math.floor(n / 10); // Update 'n', remove last digit from 'n'
    }

    return count;
}

console.log(countDigitOne(10)); // Output: 2
console.log(countDigitOne(11)); // Output: 4