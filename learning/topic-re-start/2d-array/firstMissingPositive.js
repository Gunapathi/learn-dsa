function firstMissingPositive(A) {
    let n = A.length;

    for (let i = 0; i < n; i++) {
        if (A[i] <= 0) {
            A[i] = n + 2;
        }
    }

    for (let i = 0; i < n; i++) {
        let index = Math.abs(A[i]);

        if (index >= 1 && index <= n) {
            A[index - 1] = (-1) * Math.abs(A[index - 1])
        }
    }

    for (let i = 0; i < n; i++) {
        if (A[i] > 0) {
            return i + 1;
        }
    }

    return n + 1
}

// console.log(firstMissingPositive([1, 2, 0]));
// console.log(firstMissingPositive([3, 4, -1, 1]))
console.log(firstMissingPositive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 20])) //18