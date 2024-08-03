function checkPairDiff(A, B) {
    // find frequency map of each element in A
    let map = new Map();
    for (let i = 0; i < A.length; i++) {
        let element = BigInt(A[i]);
        map.set(element, (map.get(element) || 0n) + 1n);
    }
    // For each element in A,
    //
    // - get its compliment
    // - check if compliment exists in frequency map
    // - if exists, get its frequency value and add to final count
    let count = 0n;
    for (let i = 0; i < A.length; i++) {
        let comp = BigInt(A[i]) - BigInt(B);
        count += map.get(comp) || 0n;
    }
    // return count
    return Number(count % BigInt(1000000007));
}

console.log(checkPairDiff([3, 5, 1, 2], 4))
// console.log(checkPairDiff([1, 2, 1, 2], 1))