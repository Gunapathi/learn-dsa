function solve(A, B, C) {
    function power(A, B) {
        if (B === 0) return BigInt(1) % C;
        let p = power(A % C, Math.floor(B / 2), C) % C;
        if (B % 2) {
            return (((p * p) % C) * (A % C)) % C
        }
        else {
            return (p * p) % C
        }
    }

    A = BigInt(A);
    C = BigInt(C)
    let ans = power(A, B, C);
    if (ans < BigInt(0)) ans = (ans + C) % C;
    return Number(ans)
}

console.log(solve(2, 3, 3)) // 2
console.log(solve(3, 3, 1)) // 0