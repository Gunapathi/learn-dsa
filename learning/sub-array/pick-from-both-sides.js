function pickFromBothSide(A, B) {
    let start = B;
    let end = A.length - 1;
    let maxSum = 0;
    for (let i = 0; i < B; i++) {
        maxSum += A[i];
    }
    start--
    end--
    let sum = maxSum;
    while (start >= 0) {
        sum = sum - A[start] + A[end + 1];
        if (sum > maxSum) {
            maxSum = sum
        }
        start--;
        end--;
    }
    return maxSum;
}

console.log(pickFromBothSide([2, 3, -1, 4, 2, 1], 4));