function findMissingNumbers(A) {
    let XOR1 = A.reduce((acc, num) => acc ^ num, 0);
    let XOR2 = 0;
    let N = A.length

    for (let i = 1; i <= N + 2; i++) {
        XOR2 ^= i;
    }
    let XOR_missing = XOR1 ^ XOR2;
    let set_bit_no = XOR_missing & ~(XOR_missing - 1);

    let missingNum1 = 0, missingNum2 = 0;
    for (let i = 0; i < A.length; i++) {
        if (A[i] & set_bit_no) missingNum1 ^= A[i];
        else missingNum2 ^= A[i];
    }
    for (let i = 1; i <= N + 2; i++) {
        if (i & set_bit_no) missingNum1 ^= i;
        else missingNum2 ^= i;
    }

    return [missingNum1, missingNum2].sort((a, b) => a - b);
}

// Example usage:
console.log(findMissingNumbers([3, 2, 4])); // Output: [1, 5]
console.log(findMissingNumbers([5, 1, 3, 6])); // Output: [2, 4]
