function findI(A, B) {
    let obj = {};
    let res = [];

    for (let i = 0; i < A.length; i++) {
        if (obj.hasOwnProperty(A[i])) {
            obj[A[i]] += 1;
        } else {
            obj[A[i]] = 1;
        }
    }

    for (let i = 0; i < B.length; i++) {
        if (obj.hasOwnProperty(B[i])) {
            res.push(obj[B[i]]);
        } else {
            res.push(0);
        }
    }

    return res;
}

console.log(findI([1, 2, 1, 1], [1, 2]))