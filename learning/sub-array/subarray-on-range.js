function smallestSubArray(A, B, C) {
    let arr = [];
    for (let i = B; i <= C; i++) {
        arr.push(A[i]);
    }
    console.log(arr);
}

smallestSubArray([4, 3, 2, 6], 1, 3)
// smallestSubArray([814, 761, 697, 483, 981])
// console.log(smallestSubArray([1, 3, 2]))