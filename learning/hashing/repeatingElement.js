function repeatingElement(A) {
    let obj = {};
    let firstRepeatingIndex = Infinity;
    let firstRepeatingElement = -1;

    for (let i = 0; i < A.length; i++) {
        if (obj.hasOwnProperty(A[i])) {
            if (obj[A[i]] < firstRepeatingIndex) {
                firstRepeatingIndex = obj[A[i]];
                firstRepeatingElement = A[i];
            }
        } else {
            obj[A[i]] = i;
        }
    }

    return firstRepeatingElement;
}

console.log(repeatingElement([10, 5, 3, 4, 3, 5, 6]));