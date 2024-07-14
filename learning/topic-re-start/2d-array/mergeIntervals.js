function solve(A) {
    let prevStart = A[0][0];
    let prevEnd = A[0][1];

    let res = [];

    for (let i = 1; i < A.length; i++) {
        const currStart = A[i][0];
        const currEnd = A[i][1];
        if (currStart <= prevEnd) {
            prevEnd = Math.max(currEnd, prevEnd);
        } else {
            res.push([prevStart, prevEnd]);
            prevStart = currStart;
            prevEnd = currEnd;
        }
    }

    res.push([prevStart, prevEnd]);

    return res;
}

console.log(solve([[1, 3], [2, 6], [8, 10], [15, 18]]))
console.log(solve([[2, 10], [4, 9], [6, 7]]))