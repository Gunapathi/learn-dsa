function numSetBits(A) {
    let count = 0;

    while (A > 0) {
        if ((A & 1) == 1)
            count += 1;
        
        A = A >> 1;
    }
    return count;
}

console.log(numSetBits(11))
console.log(numSetBits(6))