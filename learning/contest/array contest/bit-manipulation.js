function countPairs(A, B) {
    let N = A.length;
    let MAX = 32; // Maximum number of bits in A[i]
    let count = new Array(MAX).fill(0); // count[i] stores count of numbers having i-th bit set
    let result = [];

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < MAX; j++) {
            if ((A[i] & (1 << j)) > 0) {
                count[j]++;
            }
        }
    }

    for (let i = 0; i < B.length; i++) {
        let totalPairs = 0;
        if (B[i] < MAX) {
            totalPairs = count[B[i]] * (count[B[i]] - 1) / 2; // nC2
        }
        // Check for -0 and convert it to 0
        if (Object.is(totalPairs, -0)) {
            totalPairs = 0;
        }
        result.push(totalPairs);
    }

    return result;
}

console.log(countPairs([1, 2, 3], [0, 1, 2]));  // Output: [1, 1, 0]
console.log(countPairs([2, 5, 6, 7], [1, 2]));  // Output: [3, 3]
