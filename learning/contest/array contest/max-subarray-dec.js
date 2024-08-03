function max(A) {
    let maxSum = 0;
    let currSum = 0;

    for (let i = 0; i < A.length; i++) {
        if (i === 0 || A[i] < A[i - 1]) {
            currSum += A[i];
        } else {
            currSum = A[i];
        }
        maxSum = Math.max(maxSum, currSum);
    }

    return maxSum;
}

console.log(max([3, 2, 1])); // Output: 6
console.log(max([3, 3, 5, 0, 1])); // Output: 6
