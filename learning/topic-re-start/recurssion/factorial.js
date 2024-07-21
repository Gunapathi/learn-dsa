function solve(A) {
    function fact(num) {
        if (num === 1) {
            return 1
        }
        return num * fact(num - 1)
    }

    return fact(A)
}

console.log(solve(4)) // 24
console.log(solve(1)) // 1