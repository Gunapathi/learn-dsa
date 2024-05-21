function findAthFibonacci(A) {
    if (A <= 1) {
        return A;
    }

    return findAthFibonacci(A - 1) + findAthFibonacci(A - 2)
}

console.log(findAthFibonacci(2))
console.log(findAthFibonacci(9))