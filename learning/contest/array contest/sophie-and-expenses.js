function absoluteDifference(A) {
    const n = A.length;
    const leftSum = new Array(n).fill(0);
    const rightSum = new Array(n).fill(0);
    const result = [];

    // Calculate the cumulative sum from left to right
    leftSum[0] = 0;
    for (let i = 1; i < n; i++) {
        leftSum[i] = leftSum[i - 1] + A[i - 1];
    }

    // Calculate the cumulative sum from right to left
    rightSum[n - 1] = 0;
    for (let i = n - 2; i >= 0; i--) {
        rightSum[i] = rightSum[i + 1] + A[i + 1];
    }

    // Calculate the absolute difference for each element
    for (let i = 0; i < n; i++) {
        result.push(Math.abs(leftSum[i] - rightSum[i]));
    }

    return result;
}

// Test cases
console.log(absoluteDifference([6, 3, 3, 6, 7, 8, 7, 3, 7])); // Output: [44,35,29,20,7,8,23,33,43]
// console.log(absoluteDifference([2, 5, 1])); // Output: [6, 1, 7]
// console.log(absoluteDifference([1, 5, 3, 4])); // Output: [12, 6, 2, 9]
