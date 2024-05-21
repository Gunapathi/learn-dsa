function count(A) {
    let max_value = 0,
        max_count = 0;
    for (let i = 0; i < A.length; i++) {
        if (A[i] > max_value) {
            max_value = A[i];
            max_count = 1;
        } else if (A[i] == max_value) {
            max_count += 1;
        }
    }
    return A.length - max_count;;
}

console.log(count([3, 1, 2]))