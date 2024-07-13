function solve(A) {
    let res = -1;
    let row = 0;
    let col = A[0].length;

    while (row < A.length && col >= 0) {
        if (A[row][col] === 0) {
            row++;
        } else {
            res = row;
            col--;
        }
    }

    return res;
}

console.log(solve([[0, 1, 1], [0, 0, 1], [0, 1, 1]]))