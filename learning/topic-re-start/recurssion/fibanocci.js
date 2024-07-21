function fibonacci(n, memo = {}) {
    if (n <= 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else if (memo[n]) {
        return memo[n];
    } else {
        memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
        return memo[n];
    }
}

console.log(fibonacci(2)) // 1
console.log(fibonacci(9)) // 34