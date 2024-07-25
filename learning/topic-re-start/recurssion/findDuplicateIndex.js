function solve(A, B) {
    const arrLen = A.length - 1;
    let ans = [];

    function duplicateIndex(c) {
        if (c < 0) {
            return ans
        }

        if (A[c] === B) {
            ans.push(c);
        }

        return duplicateIndex(c - 1)
    }

    return duplicateIndex(arrLen)
}

console.log(solve([1, 2, 3, 4, 5], 1)) // [0]
console.log(solve([8, 9, 5, 6, 5, 5], 5)) // [2, 4, 5]