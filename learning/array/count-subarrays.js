/**Problem Description

Misha likes finding all Subarrays of an Array. Now she gives you an array A of N elements and told you to find the number of subarrays of A, that have unique elements.

Since the number of subarrays could be large, return value % 109 +7.



Problem Constraints

1 <= N <= 105

1 <= A[i] <= 106



Input Format

The only argument given is an Array A, having N integers.



Output Format

Return the number of subarrays of A, that have unique elements.



Example Input

Input 1:

 A = [1, 1, 3]
Input 2:

 A = [2, 1, 2]


Example Output

Output 1:

 4
Output 1:

 5


Example Explanation

Explanation 1:

 Subarrays of A that have unique elements only:
 [1], [1], [1, 3], [3]
Explanation 2:

 Subarrays of A that have unique elements only:
 [2], [1], [2, 1], [1, 2], [2] */

function countSubarraysWithUniqueElements(arr) {
    const mod = 1e9 + 7;
    let result = 0;
    let left = 0;
    const seen = new Set();

    for (let right = 0; right < arr.length; right++) {
        while (seen.has(arr[right])) {
            seen.delete(arr[left]);
            left++;
        }
        seen.add(arr[right]);
        result = (result + (right - left + 1)) % mod;
    }

    return result;
}

// Example usage:
const A = [1, 2, 3, 4, 5];
console.log(countSubarraysWithUniqueElements(A)); // Output: 15
