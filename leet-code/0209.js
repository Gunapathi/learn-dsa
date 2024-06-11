var minSubArrayLen = function (target, nums) {
    const n = nums.length;
    let start = 0;
    let end = 0;
    let windowSum = 0;
    let minLen = Infinity;

    while (end < n) {
        while (windowSum < target && end < n) {
            windowSum += nums[end];
            end++;
        }

        while (windowSum >= target) {
            minLen = Math.min(minLen, end - start);
            windowSum -= nums[start];
            start++;
        }
    }

    return minLen === Infinity ? 0 : minLen;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); // Output should be 2
