function solve(A) {
    return A.sort((a, b) => b.length - a.length);

    // // Bubble Sort: sort the array based on the length of strings in decreasing order
    // let n = A.length;
    // for (let i = 0; i < n - 1; i++) {
    //     for (let j = 0; j < n - i - 1; j++) {
    //         if (A[j].length < A[j + 1].length) {
    //             // Swap A[j] and A[j + 1] if the next string is longer
    //             let temp = A[j];
    //             A[j] = A[j + 1];
    //             A[j + 1] = temp;
    //         }
    //     }
    // }

    // return A;
}

console.log(solve(["hi", "he", "hello"])) // hello, hi, he
console.log(solve(["cat", "bat", "could", "but"])) // could, cat, bat, but

