var NumArray = function (nums) {
    this.prefixsum = new Array(nums.length);

    this.prefixsum[0] = nums[0];

    for (let i = 1; i < nums.length; i++) {
        this.prefixsum[i] = this.prefixsum[i - 1] + nums[i];
    }
};

NumArray.prototype.sumRange = function (left, right) {
    return this.prefixsum[right] - (left > 0 ? this.prefixsum[left - 1] : 0);
};

// Initialize a NumArray object with an array
var numArray = new NumArray([-2, 0, 3, -5, 2, -1]);

// Call the sumRange method with different indices
console.log(numArray.sumRange(0, 2)); // Outputs: 1
console.log(numArray.sumRange(2, 5)); // Outputs: -1
console.log(numArray.sumRange(0, 5)); // Outputs: -3
