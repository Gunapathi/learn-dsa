function sumOfDigits(A) {
    if (A < 10)
        return A;

    return (A % 10) + sumOfDigits(Math.floor(A / 10));
}

console.log(sumOfDigits(46))
console.log(sumOfDigits(11))