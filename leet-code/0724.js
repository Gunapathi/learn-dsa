/**Given an array of integers nums, calculate the pivot index of this array.

The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

Return the leftmost pivot index. If no such index exists, return -1.

 

Example 1:

Input: nums = [1,7,3,6,5,6]
Output: 3
Explanation:
The pivot index is 3.
Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
Right sum = nums[4] + nums[5] = 5 + 6 = 11
Example 2:

Input: nums = [1,2,3]
Output: -1
Explanation:
There is no index that satisfies the conditions in the problem statement.
Example 3:

Input: nums = [2,1,-1]
Output: 0
Explanation:
The pivot index is 0.
Left sum = 0 (no elements to the left of index 0)
Right sum = nums[1] + nums[2] = 1 + -1 = 0
 

Constraints:

1 <= nums.length <= 104
-1000 <= nums[i] <= 1000
  */

var pivotIndex = function (nums) {
    // PREFIX SUM METHOD
    // let prefixsum = new Array();

    // prefixsum[0] = nums[0];

    // for (let i = 1; i < nums.length; i++) {
    //     prefixsum[i] = prefixsum[i - 1] + nums[i];
    // }

    // for (let j = 0; j < nums.length; j++) {
    //     if ((j > 0 ? prefixsum[j - 1] : 0) === (prefixsum[nums.length - 1] - prefixsum[j])) {
    //         return j
    //     }
    // };

    // return -1;

    // TOTAL SUM METHOD
    let totalSum = 0;
    for (let num of nums) {
        totalSum += num;
    }

    let leftSum = 0;
    for (let i = 0; i < nums.length; i++) {
        // Check if the left sum is equal to the total sum minus the left sum and the current number
        if (leftSum === totalSum - leftSum - nums[i]) {
            return i;
        }
        leftSum += nums[i];
    }
}

const ans = pivotIndex([-1, -1, 0, 1, 1, 0]);
// const ans1 = pivotIndex([1, 7, 3, 6, 5, 6]);

console.log(ans)