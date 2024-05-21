function anagram(A, B) {
    A = A.split('');
    B = B.split('');

    if (A.length != B.length) return 0

    let charCount = {};
    for (let i = 0; i < A.length; i++) {
        charCount[A[i]] = (charCount[A[i]] || 0) + 1;
    }

    for (let i = 0; i < B.length; i++) {
        if (!charCount[B[i]]) return 0;
        charCount[B[i]]--;
    }

    return 1
}

console.log(anagram('cat', 'bat')) // 0
console.log(anagram('secure', 'rescue')) // 1