var twoSum = function (nums, target) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];

        if (map.has(complement)) { // check if the key(diff value) is already in the map
            return [map.get(complement), i]; // get the value(index of the diff value) present in that map using key(diff value)
        }

        map.set(nums[i], i) // key : value
    }
}

// const A = twoSum([2, 7, 11, 15], 9);
// const A = twoSum([2, 5, 5, 11], 10);
const A = twoSum([-1, -2, -3, -4, -5], -8);

console.log(A);