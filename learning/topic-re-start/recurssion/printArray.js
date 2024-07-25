function solve(A) {
    const count = A.length;

    function printNum(c) {
        if (c < 0) {
            return
        }

        printNum(c - 1);
        process.stdout.write(A[c] + " ");
    }

    printNum(count - 1)
    process.stdout.write("\n");
}

console.log(solve([6, -2, 5, 3]))