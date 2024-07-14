function solve(A, B) {
    let res = [];
    let [newStart, newEnd] = B;
    let merged = false;

    for (let i = 0; i < A.length; i++) {
        let [currStart, currEnd] = A[i];

        if (currEnd < newStart) {
            res.push(A[i])
        } else if (currStart > newEnd) {
            if (!merged) {
                res.push([newStart, newEnd])
                merged = true;
            }
            res.push([currStart, currEnd])
        } else {
            newStart = Math.min(currStart, newStart);
            newEnd = Math.max(currEnd, newEnd);
        }
    }

    if (!merged) {
        res.push([newStart, newEnd]);
    }

    return res
}

console.log(solve([[1, 3], [6, 9]], [2, 5]))
console.log(solve([[1, 3], [6, 9]], [2, 6]))