// contribution technique

var sumOddLengthSubarrays = function (arr) {
    let sum = 0;
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        let totalSubarrays = (i + 1) * (n - i);
        let oddLengthSubarrays = Math.ceil(totalSubarrays / 2);
        sum += oddLengthSubarrays * arr[i];
    }

    return sum;
};

// Test cases
console.log(sumOddLengthSubarrays([1, 4, 2, 5, 3])); // Output: 58
console.log(sumOddLengthSubarrays([1, 2])); // Output: 3
console.log(sumOddLengthSubarrays([10, 11, 12])); // Output: 66
