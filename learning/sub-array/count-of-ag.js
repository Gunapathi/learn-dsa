function smallestSubArray(A) {
    let countA = 0;
    let result = 0;

    for (let i = 0; i < A.length; i++) {
        if (A[i] == 'A') {
            countA += 1;
        } else if (A[i] == 'G') {
            result += countA;
        }
    }
    console.log(result);
}

smallestSubArray('ABCGAG')
// smallestSubArray([814, 761, 697, 483, 981])
// console.log(smallestSubArray([1, 3, 2]))