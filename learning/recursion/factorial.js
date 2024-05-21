function factorial(A) {
    if (A === 1) {
        return 1
    }

    return A * factorial(A - 1)
}

console.log(factorial(4))
console.log(factorial(1))