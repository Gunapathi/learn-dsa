// Base Case: If n is 0, return 1.

// Handling Negative Exponents: If n is negative, take the reciprocal of x.

// Even Exponents: If n is even, recursively compute x^(N/2).

// Odd Exponents: If n is odd, recursively compute x^(N-1) and multiply by x.

// Recursion Termination: Recursion continues until the base case is reached (n = 0).

// Here is the pseudo code

// function myPow(x, n):

// if n == 0:

// return 1

// N = n

// if N < 0:

// N = -N

// x = 1 / x

// if N is even:

// return myPow(x * x, N / 2)

// else:

// return x * myPow(x, N - 1)

function pow(A, B, C) {
    A = BigInt(A);
    C = BigInt(C)
    if (ans < BigInt(0)) ans = (ans + C) % C;

    if (B === 0) {
        return 1;
    }
    if (A === 0) {
        return 0;
    }
    

    A = ((A % C) + C) % C; // Adjust A to be within the range of C

    // Recursive case: Calculate (A^B) % C
    const halfPower = pow(A, Math.floor(B / 2), C);
    const halfPowerMod = (halfPower * halfPower) % C;

    if (B % 2 === 1) {
        return Number((halfPowerMod * A) % C);
    } else {
        return Number(halfPowerMod);
    }
}

// console.log(powerFunction(2, 3, 3));
// console.log(powerFunction(3, 3, 1));
// console.log(powerFunction(0, 0, 1));
// console.log(pow(-1, 1, 20));
console.log(pow(67790475, 13522204, 98794224)); //38615985