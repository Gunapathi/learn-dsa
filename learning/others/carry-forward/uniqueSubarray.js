function uniqueSubarray(A) {
    const mod = 1e9 + 7;
    let result = 0;
    let left = 0;
    const seen = new Set();

    for (let right = 0; right < A.length; right++) {
        while (seen.has(A[right])) {
            seen.delete(A[left]);
            left++;
        }
        seen.add(A[right]);
        result = (result + (right - left + 1)) % mod;
    }

    return Number(result);
}

console.log(uniqueSubarray([1, 1, 3]));