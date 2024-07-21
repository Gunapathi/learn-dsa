/**
 * Problem Description
Given an array of positive integers A, two integers appear only once, and all the other integers appear twice.
Find the two integers that appear only once.

Note: Return the two numbers in ascending order.


Problem Constraints
2 <= |A| <= 100000
1 <= A[i] <= 109



Input Format
The first argument is an array of integers of size N.



Output Format
Return an array of two integers that appear only once.



Example Input
Input 1:
A = [1, 2, 3, 1, 2, 4]
Input 2:

A = [1, 2]


Example Output
Output 1:
[3, 4]
Output 2:

[1, 2]


Example Explanation
Explanation 1:
3 and 4 appear only once.
Explanation 2:

1 and 2 appear only once.
 */

/**
 * 
 * @desc {SOLUTION EXPLANATION}
 * This solution works by first finding the XOR of all numbers in the array. The XOR of two numbers that appear only once will be non-zero, and the XOR of two numbers that appear twice will be zero.

Then, it finds the rightmost set bit in the XOR result, which will be set in one of the two numbers that appear only once.

Finally, it iterates over the array again, separating the numbers into two groups based on whether they have the rightmost set bit or not. The XOR of each group will give the two numbers that appear only once.

The solution returns the two numbers in ascending order.

Note that this solution assumes that the input array A contains only positive integers, and that two integers appear only once, and all the other integers appear twice. If the input array can contain negative integers or have a different structure, you may need to adjust the solution accordingly.

XOR AND -XOR ==>
    xor & -xor performs a bitwise AND operation between xor and -xor. This operation will result in a number that has all bits set to 0, except for the rightmost set bit of xor, which will be set to 1.

For example, if xor is 12 (which is 1100 in binary), -xor will be -12 (which is 00110000...001100 in two's complement representation, assuming 8 bits). The bitwise AND operation xor & -xor will result in 4 (which is 0100 in binary), which is the rightmost set bit of xor.
 */

function solve(A) {
    let xor = BigInt(0);
    for (let num of A) {
        xor ^= BigInt(num); // XOR of all element
    }

    let rightmostSetBit = xor & -xor; // rightmost set bit
    let x = BigInt(0);
    let y = BigInt(0);

    // group elements based on rightmost setbit and unsetbit, which will give the two missing numbers
    for (let num of A) {
        if (BigInt(num) & rightmostSetBit) {
            x ^= BigInt(num);
        } else {
            y ^= BigInt(num);
        }
    }

    return (x < y) ? [Number(x), Number(y)] : [Number(y), Number(x)];

}

console.log(solve([1, 2, 3, 1, 2, 4])); // [3, 4]
console.log(solve([1, 2])); // [1, 2]