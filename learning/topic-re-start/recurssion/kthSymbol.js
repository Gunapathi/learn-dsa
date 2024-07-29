/**
 * Problem Description
On the first row, we write a 0. Now in every subsequent row, we look at the previous row and replace each occurrence of 0 with 01, and each occurrence of 1 with 10.

Given row number A and index B, return the Bth indexed symbol in row A. (The values of B are 0-indexed.).



Problem Constraints
1 <= A <= 20

0 <= B < 2A - 1



Input Format
First argument is an integer A.

Second argument is an integer B.



Output Format
Return an integer denoting the Bth indexed symbol in row A.



Example Input
Input 1:

 A = 3
 B = 0
Input 2:

 A = 4
 B = 4


Example Output
Output 1:

 0
Output 2:

 1


Example Explanation
Explanation 1:

 Row 1: 0
 Row 2: 01
 Row 3: 0110
Explanation 2:

 Row 1: 0
 Row 2: 01
 Row 3: 0110
 Row 4: 01101001
 */

function kthSymbol(A, B) {
    // Base case: If we are in the first row, the only symbol is 0
    if (A === 0) return 0;

    // Find the length of the current row
    const length = 1 << A; // Equivalent to 2^A

    // Determine if the index B is in the first or second half
    if (B < length / 2) {
        // If in the first half, the symbol is the same as in the previous row
        return kthSymbol(A - 1, B);
    } else {
        // If in the second half, the symbol is the complement of the one in the first half
        return kthSymbol(A - 1, B - length / 2) ^ 1;
    }
}

console.log(kthSymbol(2, 2)); // Output: 1
console.log(kthSymbol(4, 5)); // Output: 1
console.log(kthSymbol(3, 0)); // 0
console.log(kthSymbol(4, 4)); // 4

/**
 * Base Case

If A is 0, return 0 since the first row is always 0.

Determine Length of Current Row

Calculate the length of the current row using 2^A.

Check Index Position

If B is less than half the length of the current row, it is in the first half, and we proceed with the same index for the previous row. If B is greater than or equal to half the length, it is in the second half, and we adjust B to the corresponding index within the first half of the previous row and take the complement.

Example: A = 4 and B = 4

Initial Call

A = 4, B = 4.

Calculate length = 1 << 4 = 16.
B = 4 is less than length / 2 = 8, so we call kthSymbol(3, 4).
First Recursive Call

A = 3, B = 4.

Calculate length = 1 << 3 = 8.
B = 4 is equal to length / 2 = 4, so we call kthSymbol(2, 0) ^ 1.
Second Recursive Call

A = 2, B = 0.

Calculate length = 1 << 2 = 4.
B = 0 is less than length / 2 = 2, so we call kthSymbol(1, 0).
Third Recursive Call

A = 1, B = 0.

Calculate length = 1 << 1 = 2.
B = 0 is less than length / 2 = 1, so we call kthSymbol(0, 0).
Base Case

A = 0, B = 0. Return 0 as the base case.

Recursive Traceback

kthSymbol(0, 0) = 0.
kthSymbol(1, 0) = 0.
kthSymbol(2, 0) = 0 ^ 1 = 1.
kthSymbol(3, 4) = 1.
kthSymbol(4, 4) = 1.
 */