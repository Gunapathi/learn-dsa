function specialIndex(A) {
    const evenPrefix = [0];
    const oddPrefix = [0];

    for (let i = 0; i < A.length; i++) {
        evenPrefix[i + 1] = evenPrefix[i] + (i % 2 === 0 ? A[i] : 0);
        oddPrefix[i + 1] = oddPrefix[i] + (i % 2 !== 0 ? A[i] : 0);
    }

    let count = 0;

    for (let i = 0; i < A.length; i++) {
        const evenIndexSum =
            evenPrefix[i] + (oddPrefix[A.length] - oddPrefix[i + 1]);
        const oddIndexSum =
            oddPrefix[i] + (evenPrefix[A.length] - evenPrefix[i + 1]);

        if (evenIndexSum === oddIndexSum) count++;
    }

    return count;
}

console.log(specialIndex([2, 1, 6, 4]))