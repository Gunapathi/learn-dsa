function findUniqueKey(A) {
    let obj = {};
    let res = 0;

    for (let i = 0; i < A.length; i++) {
        if (!obj.hasOwnProperty(A[i])) {
            obj[A[i]] = 1;
            res += 1;
        }
    }

    return res;
}

console.log(findUniqueKey([3, 4, 3, 6, 6]))