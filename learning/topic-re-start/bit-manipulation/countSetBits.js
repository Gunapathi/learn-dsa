function solve(A) {
    let count = 0;

    while (A != 0) {
        A = A & (A - 1);
        count++;
    }

    return count;
}

console.log(solve(11)); // 3
console.log(solve(6)); // 2