/**Problem Description
Given an array, arr[] of size N, the task is to find the count of array indices such that removing an element from these indices makes the sum of even-indexed and odd-indexed array elements equal.



Problem Constraints
1 <= N <= 105
-105 <= A[i] <= 105
Sum of all elements of A <= 109


Input Format
First argument contains an array A of integers of size N


Output Format
Return the count of array indices such that removing an element from these indices makes the sum of even-indexed and odd-indexed array elements equal.



Example Input
Input 1:
A = [2, 1, 6, 4]
Input 2:

A = [1, 1, 1]


Example Output
Output 1:
1
Output 2:

3


Example Explanation
Explanation 1:
Removing arr[1] from the array modifies arr[] to { 2, 6, 4 } such that, arr[0] + arr[2] = arr[1]. 
Therefore, the required output is 1. 
Explanation 2:

Removing arr[0] from the given array modifies arr[] to { 1, 1 } such that arr[0] = arr[1] 
Removing arr[1] from the given array modifies arr[] to { 1, 1 } such that arr[0] = arr[1] 
Removing arr[2] from the given array modifies arr[] to { 1, 1 } such that arr[0] = arr[1] 
Therefore, the required output is 3. */

function specialIndex(A) {
    const prefixEven = [0];
    const prefixOdd = [0];

    // Calculate prefix sums for even and odd indices
    for (let i = 0; i < A.length; i++) {
        console.log('====================================');
        console.log(prefixEven[i], A[i]);
        console.log('====================================');
        prefixEven[i + 1] = prefixEven[i] + (i % 2 === 0 ? A[i] : 0);
        prefixOdd[i + 1] = prefixOdd[i] + (i % 2 !== 0 ? A[i] : 0);
        console.log('prefixEven', prefixEven, 'prefixOdd', prefixOdd);
    }

    let specialIndexCount = 0;

    // Iterate through the array and check if removing each element satisfies the condition
    for (let i = 0; i < A.length; i++) {
        const evenIndexSum = prefixEven[i] + (prefixOdd[A.length] - prefixOdd[i + 1]);
        const oddIndexSum = prefixOdd[i] + (prefixEven[A.length] - prefixEven[i + 1]);

        if (evenIndexSum === oddIndexSum) {
            specialIndexCount++;
        }
    }

    return specialIndexCount;
}

console.log(specialIndex([2, 1, 6, 4]))
// console.log(specialIndex([1, 1, 1]))