function equlibrium(A) {
    let sum = 0, lsum = 0;

    for (let i = 0; i < A.length; i++) {
        sum += A[i];
    }

    for (let i = 0; i < A.length; i++) {
        sum -= A[i];

        if (sum === lsum)
            return i

        lsum += A[i];
    }

    return -1
}

console.log(equlibrium([-7, 1, 5, 2, -4, 3, 0]))