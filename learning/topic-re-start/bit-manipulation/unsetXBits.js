/**Problem Description
Given an integer A. Unset B bits from the right of A in binary.

For example, if A = 93 and B = 4, the binary representation of A is 1011101.
If we unset the rightmost 4 bits, we get the binary number 1010000, which is equal to the decimal value 80. */

function solve(A, B) {
    A = BigInt(A);
    // Create a mask with B rightmost bits as 0 and the rest as 1 using BigInt
    let mask = ~((BigInt(1) << BigInt(B)) - BigInt(1));
    // Perform bitwise AND operation to unset the B rightmost bits and return as BigInt
    return Number(A & mask);
}

console.log(solve(25, 3)); // 24
console.log(solve(37, 3)); // 32