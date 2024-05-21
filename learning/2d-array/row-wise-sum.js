function rowWiseSums(A) {
    const rows = A.length;
    const cols = A[0].length;

    let sums = [];

    for (let i = 0; i < rows; i++) {
        let sum = 0;
        for (let j = 0; j < cols; j++) {
            sum += A[i][j];
        }
        sums.push(sum);
    }

    return sums;
}

// Example usage:
const A = [[1, 2, 3, 4],
[5, 6, 7, 8],
[9, 2, 3, 4]
];
console.log(rowWiseSums(A)); // Output: [4, 6, 10, 12]