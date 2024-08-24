/**
 * Problem Description
You are given an array A of N elements. Sort the given array in increasing order of number of distinct factors of each element, i.e., element having the least number of factors should be the first to be displayed and the number having highest number of factors should be the last one. If 2 elements have same number of factors, then number with less value should come first.

Note: You cannot use any extra space


Problem Constraints
1 <= N <= 104
1 <= A[i] <= 104


Input Format
First argument A is an array of integers.


Output Format
Return an array of integers.


Example Input
Input 1:
A = [6, 8, 9]
Input 2:
A = [2, 4, 7]


Example Output
Output 1:
[9, 6, 8]
Output 2:
[2, 7, 4]


Example Explanation
For Input 1:
The number 9 has 3 factors, 6 has 4 factors and 8 has 4 factors.
For Input 2:
The number 2 has 2 factors, 7 has 2 factors and 4 has 3 factors.
 */

function countFactors(x) {
    let count = 0;
    for (let i = 1; i * i <= x; i++) {
        if (x % i === 0) {
            count++;  // i is a factor
            if (i !== x / i) {
                count++;  // x/i is also a factor if different from i
            }
        }
    }
    return count;
}

function solve(A) {
    const factorsCount = new Map();

    // Step 1: Precompute the number of factors for each number in A
    for (let num of A) {
        factorsCount.set(num, countFactors(num));
    }

    // Step 2: Sort the array based on the number of factors
    A.sort((a, b) => {
        const factorsA = factorsCount.get(a);
        const factorsB = factorsCount.get(b);

        if (factorsA === factorsB) {
            return a - b;  // Preserve original order by numerical value if factors count is the same
        } else {
            return factorsA - factorsB;  // Sort by the number of factors
        }
    });

    return A;
}

console.log(solve([2, 7, 5, 6, 4, 1])); // 1,2,5,7,4,6
console.log(solve([9, 6, 8])); // 9,6,8
console.log(solve([2, 7, 4])); // 2,7,4
