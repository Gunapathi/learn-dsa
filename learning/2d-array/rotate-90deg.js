function transpose(A, N, M) {
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (i < j) {
                [A[i][j], A[j][i]] = [A[j][i], A[i][j]]
            }
        }
    }
    return A;
}

function reverseRow(A, N, M) {
    for (let i = 0; i < N; i++) {
        let start = 0, end = M - 1;

        while (start < end) {
            const temp = A[i][start];
            A[i][start] = A[i][end];
            A[i][end] = temp;

            start++;
            end--;
        }
    }
    return A;
}

function rotate90Deg(A) {
    const N = A.length;
    const M = A[0].length;

    const transposeArray = transpose(A, N, M);

    return reverseRow(transposeArray, N, M);
}

console.log(rotate90Deg([
    [1, 2],
    [3, 4]
]))