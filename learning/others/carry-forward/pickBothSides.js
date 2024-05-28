function pickBothSides(A, B) {
    const N = A.length;
    let pSum = new Array(N).fill(0),
        sSum = new Array(N).fill(0);

    pSum[0] = A[0];
    for (let i = 1; i < N; i++) {
        pSum[i] = A[i] + pSum[i - 1];
    }

    sSum[N - 1] = A[N - 1];
    for (let i = N - 2; i >= 0; i--) {
        sSum[i] = sSum[i + 1] + A[i];
    }

    let ans = Math.max(pSum[B - 1], sSum[N - B]);
    for (let i = 1; i < B; i++) {
        let sum = pSum[i - 1] + sSum[N - (B - i)];
        ans = Math.max(ans, sum);
    }

    return ans;
}

console.log(pickBothSides([5, -2, 3, 1, 2], 3));