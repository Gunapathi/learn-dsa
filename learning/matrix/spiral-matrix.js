function spiralMatrix(A) {
    let ans = new Array(A).fill(0).map(() => Array(A));
    let val = 1, i = 0, j = 0;

    while (A > 1) {
        for (let idx = 1; idx < A; idx++) {
            ans[i][j] = val;
            j++;
            val++;
        }

        for (let idx = 1; idx < A; idx++) {
            ans[i][j] = val;
            i++;
            val++;
        }

        for (let idx = 1; idx < A; idx++) {
            ans[i][j] = val;
            j--;
            val++;
        }

        for (let idx = 1; idx < A; idx++) {
            ans[i][j] = val;
            i--;
            val++;
        }

        i++;
        j++;
        A -= 2;
    }

    if (A == 1) {
        ans[i][j] = val;
    }

    return ans;
}

console.log(spiralMatrix(1));
console.table(spiralMatrix(2));
console.table(spiralMatrix(5));