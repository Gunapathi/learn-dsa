function solve(A) {
    const count = A.length;

    function findMax(c, max) {
        if (c < 0) {
            return max
        }

        if (A[c] > max) {
            max = A[c];
        }

        return findMax(c - 1, max)
    }

    return findMax(count - 1, A[count - 1])
}

console.log(solve([12, 10, 3, 4, 5])) // 12
console.log(solve([1, 5, 80, 40])) // 80