function plusOne(A) {
    if (A.length === 1 && A[0] === 0) {
        return [1];
    }
    A = BigInt(A.join('')) + BigInt(1);
    return A.toString().split('')
}

console.log(plusOne([1, 2, 3])) // [1,2,4]
console.log(plusOne([0])) // [1]