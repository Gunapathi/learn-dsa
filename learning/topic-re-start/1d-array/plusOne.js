/**Problem Description
Given a non-negative number represented as an array of digits, add 1 to the number ( increment the number represented by the digits ).

The digits are stored such that the most significant digit is at the head of the list.

NOTE: Certain things are intentionally left unclear in this question which you should practice asking the interviewer. For example: for this problem, the following are some good questions to ask :

Q: Can the input have 0's before the most significant digit. Or, in other words, is 0 1 2 3 a valid input?
A: For the purpose of this question, YES
Q: Can the output have 0's before the most significant digit? Or, in other words, is 0 1 2 4 a valid output?
A: For the purpose of this question, NO. Even if the input has zeroes before the most significant digit.


Problem Constraints
1 <= size of the array <= 1000000



Input Format
First argument is an array of digits.



Output Format
Return the array of digits after adding one.



Example Input
Input 1:

[1, 2, 3]


Example Output
Output 1:

[1, 2, 4]


Example Explanation
Explanation 1:

Given vector is [1, 2, 3].
The returned vector should be [1, 2, 4] as 123 + 1 = 124. */

function plusOne(A) {
    let carry = 1;  // Initialize carry as 1 because we are adding one
    const n = A.length;

    // Traverse the array from the end to the beginning
    for (let i = n - 1; i >= 0; i--) {
        const curr = A[i] + carry;  // Add the carry to the current digit

        if (curr > 9) {
            A[i] = curr % 10;  // Set the current digit to the remainder
            carry = 1;  // Set carry for the next iteration
        } else {
            A[i] = curr;  // Set the current digit to the new value
            carry = 0;  // Reset carry as addition is done
            break;  // No need to continue as there is no carry
        }
    }

    // If there's still a carry after the last iteration, add a new digit at the front
    if (carry > 0) {
        A.unshift(carry);
    }

    // Remove leading zeros, if any
    while (A[0] === 0) {
        A.shift();
    }

    return A;
}

console.log(plusOne([1, 2, 3])); // Output: [1, 2, 4]
console.log(plusOne([9, 9, 9])); // Output: [1, 0, 0, 0]
console.log(plusOne([0]));       // Output: [1]
console.log(plusOne([9]));       // Output: [1, 0]