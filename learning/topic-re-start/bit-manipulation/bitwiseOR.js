/**Problem Description
You are given an array of integers A of size N.

The value of a subarray is defined as BITWISE OR of all elements in it.

Return the sum of value of all subarrays of A % 109 + 7.



Problem Constraints
1 <= N <= 105

1 <= A[i] <= 108



Input Format
The first argument given is the integer array A.



Output Format
Return the sum of Value of all subarrays of A % 109 + 7.



Example Input
Input 1:

 A = [1, 2, 3, 4, 5]
Input 2:

 A = [7, 8, 9, 10]


Example Output
Output 1:

 71
Output 2:

 110


Example Explanation
Explanation 1:

 Value([1]) = 1
 Value([1, 2]) = 3
 Value([1, 2, 3]) = 3
 Value([1, 2, 3, 4]) = 7
 Value([1, 2, 3, 4, 5]) = 7
 Value([2]) = 2
 Value([2, 3]) = 3
 Value([2, 3, 4]) = 7
 Value([2, 3, 4, 5]) = 7
 Value([3]) = 3
 Value([3, 4]) = 7
 Value([3, 4, 5]) = 7
 Value([4]) = 4
 Value([4, 5]) = 5
 Value([5]) = 5
 Sum of all these values = 71
Explanation 2:

 Sum of value of all subarray is 110. 
 
 */

function solve(A) {
   const MOD = 1000000007; // condition
   let n = A.length; // total length of array
   const totalSubArray = (n * (n + 1)) / 2; // total length of subarray
   let totalSum = 0; // result

   for (let bit = 0; bit < 31; bit++) { // run for 32 bit to find the contribution of each bit
      let subArrayWithBitUnSet = 0; // arrays not contributing on particular bit
      let lengthOfUnsetBit = 0; // element not contributing

      for (let i = 0; i < n; i++) {
         if ((A[i] & (1 << bit)) === 0) { // find if current element is contributing or not
            lengthOfUnsetBit++;
         } else {
            // if Bit is (1) then it means current subArray ended and new subArray started [1,2,3] to [2].
            // cal the non contributing elements and then find the contribution by (total - non contribution)
            subArrayWithBitUnSet += (lengthOfUnsetBit * (lengthOfUnsetBit + 1)) / 2; // if contributing, find the non contributing list of elements
            lengthOfUnsetBit = 0
         }
      }

      subArrayWithBitUnSet += (lengthOfUnsetBit * (lengthOfUnsetBit + 1)) / 2; // find total number of elements not contributing

      let subArrayWithBitSet = totalSubArray - subArrayWithBitUnSet; // total number of contributing elements
      totalSum = (totalSum + (subArrayWithBitSet * (1 << bit)) % MOD) % MOD; // result 
   }

   return totalSum;
}

console.log(solve([1, 2, 3, 4, 5])) // 71
console.log(solve([7, 8, 9, 10])) // 110