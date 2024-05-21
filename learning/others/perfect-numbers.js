function solve(A) {
    function primeNumberFinder(A) {
        let count = 0;

        for (let i = 1; i <= A / i; i++) {
            if (A % i === 0) {
                count += 1;
                if (i !== A / i) {
                    count += 1;
                }
            }
        }

        return count === 2 ? 1 : 0
    }

    let result = 0;

    for (let i = 1; i <= A; i++) {
        result += primeNumberFinder(i);
    }

    return result;
}

// console.log(solve(4))
// console.log(solve(6))
console.log(solve(19))