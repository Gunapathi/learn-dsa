function singleNumber(A) {
    let result = 0n;
    for (let i = 0; i < A.length; i++) {
        result ^= BigInt(A[i]);
    }
    return Number(result);
}

console.log(singleNumber([1, 2, 2, 3, 1]))
console.log(singleNumber([1, 2, 2]))