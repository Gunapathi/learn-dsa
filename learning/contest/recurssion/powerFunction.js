function pow(A, B, C) {
    if (A === 0) return 0; // If A is 0, the result is always 0.

    let res = 1n, x = BigInt(A); // Use BigInt for large integers.
    B = BigInt(B);
    C = BigInt(C);

    while (B > 0n) {
        // If B is odd, multiply x with the result.
        if (B & 1n) res = (res * x) % C;

        B = B >> 1n; // Reduce B by half.
        x = (x * x) % C; // Since we have reduced B by half, square x.
    }

    return Number((C + res) % C); // Convert the result back to a number.
}

// Example usage
console.log(pow(2, 3, 3))
console.log(pow(3, 3, 1))
console.log(pow(67790475, 13522204, 98794224)); // 38615985
