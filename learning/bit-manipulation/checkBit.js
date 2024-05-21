function checkBit(A, B) {
    // return (A & (1 << B)) > 0 ? 1 : 0
    return (A & (1 << B)) !== 0 ? 1 : 0
}

console.log(checkBit(4, 1))
console.log(checkBit(13, 2))
console.log(checkBit(26, 1)) // 0