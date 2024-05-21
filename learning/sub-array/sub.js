function smallestSubArray(A) {
    let mx = Math.max(...A), mn = Math.min(...A), ans = A.length;
    // mx and mn stores the max and min value of the array
    let max_index = -1e9, min_index = -1e9 / 2;
    // index of the last element having value equal to mx and mn
    for (let i = 0; i < A.length; i++) {
        if (A[i] == mx) {
            max_index = i;
        }
        if (A[i] == mn) {
            min_index = i;
        }
        ans = Math.min(ans, Math.abs(min_index - max_index) + 1);
    }
    return ans;
}

smallestSubArray([814, 761, 697, 483, 700, 981])