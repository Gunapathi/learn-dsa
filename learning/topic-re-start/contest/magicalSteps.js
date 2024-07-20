function solve(A) {
    let count = 1;
    let max = 1;

    for (let i = 1; i < A.length; i++) {
        if (A[i] !== A[i - 1]) {
            count++;
            max = Math.max(max, count);
        } else {
            count = 1;
        }
    }

    return max;
}

console.log(solve([5, 4, 4, 3, 2, 4, 3, 5, 5])) // 6
console.log(solve([1, 1, 1, 1])) // 1
console.log(solve([1, 1, 2, 2])) // 2