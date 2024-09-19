/**
 * Problem Description
Given an integer A. Find the list of all prime numbers in the range [1, A].


Problem Constraints
1 <= A <= 106



Input Format
Only argument A is an integer.



Output Format
Return a sorted array of prime number in the range [1, A].



Example Input
Input 1:
A = 7
Input 2:
A = 12


Example Output
Output 1:
[2, 3, 5, 7]
Output 2:
[2, 3, 5, 7, 11]


Example Explanation
For Input 1:
The prime numbers from 1 to 7 are 2, 3, 5 and 7.
For Input 2:
The prime numbers from 1 to 12 are 2, 3, 5, 7 and 11.
 */

function sieveOfEratosthenes(n) {
    // Create an array of boolean values, initialized to true
    const primes = Array(n + 1).fill(true);
    primes[0] = primes[1] = false;

    for (let i = 2; i * i <= n; i++) {
        if (primes[i]) {
            // mark all multiples of i as false (not prime)
            for (let j = i * i; j <= n; j += i) {
                primes[j] = false;
            }
        }
    }

    // collect primes
    const primeNum = [];
    for (let i = 2; i <= n; i++) {
        if (primes[i]) {
            primeNum.push(i)
        }
    }

    return primeNum
}

console.log(sieveOfEratosthenes(11));
console.log(sieveOfEratosthenes(10));