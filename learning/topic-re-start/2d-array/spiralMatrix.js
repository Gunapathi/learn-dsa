function solve(A) {
    let res = new Array(A).fill(0).map(() => Array(A).fill(0));
    let i = 0, j = 0, val = 1;

    while (A > 1) {
        for (let idx = 1; idx < A; idx++) {
            res[i][j] = val;
            j++;
            val++;
        }

        for (let idx = 1; idx < A; idx++) {
            res[i][j] = val;
            i++;
            val++;
        }

        for (let idx = 1; idx < A; idx++) {
            res[i][j] = val;
            j--;
            val++;
        }

        for (let idx = 1; idx < A; idx++) {
            res[i][j] = val;
            i--;
            val++;
        }

        i++;
        j++
        A -= 2;
    }

    if (A === 1) {
        res[i][j] = val;
    }

    return res;
}

console.log(solve(4));