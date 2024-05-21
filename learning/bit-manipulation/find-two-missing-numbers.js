/**Problem Description
Given an array A of length N where all the elements are distinct and are in the range [1, N+2].

Two numbers from the range [1, N+2] are missing from the array A. Find the two missing numbers.



Problem Constraints
1 <= N <= 105

1 <= A[i] <= N+2

The elements of array A are distinct



Input Format
Only argument A is an array of integers



Output Format
Return a sorted array of size 2 denoting the missing elements.



Example Input
Input 1:
A = [3, 2, 4]
Input 2:
A = [5, 1, 3, 6]


Example Output
Output 1:
[1, 5]
Output 2:
[2, 4]


Example Explanation
For Input 1:
The missing numbers are 1 and 5.
For Input 2:
The missing numbers are 2 and 4. */

function findMissingNumbers(A) {
    let xorValue = 0;
    // XOR of whole array 
    for (let i = 0; i < A.length; i++) {
        xorValue ^= A[i];
    }
    // XOR of natural numbers if they are not missing
    for (let i = 1; i <= A.length + 2; i++) {
        xorValue ^= i;
    }
    // in xorValue we have XOR of two missing numbers
    let setBitPosition = 0;
    // Check for recenet set bit position
    for (let i = 0; i < 32; i++) {
        if (isBitSet(xorValue, i)) {
            setBitPosition = i;
            break;
        }
    }
    // divide int set and unset bit operations for given array which exclude missing numbers
    let setBit = 0;
    let unsetBit = 0;
    for (let i = 0; i < A.length; i++) {
        if (isBitSet(A[i], setBitPosition)) {
            setBit ^= A[i];
        } else {
            unsetBit ^= A[i];
        }
    }
    // Perform setbit and unsetbit operations for natual numbers which include missing numbers
    for (let i = 1; i <= A.length + 2; i++) {
        if (isBitSet(i, setBitPosition)) {
            setBit ^= i;
        } else {
            unsetBit ^= i;
        }
    }
    return [setBit, unsetBit].sort((a, b) => a - b);
}

function isBitSet(number, bitPosition) {
    return ((number & (1 << bitPosition)) !== 0)
}


console.log(find2MissingNum([3, 2, 4]));