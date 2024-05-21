function longestConsecutiveOnes(A) {
    let zeroCount = 0, k = 1; // k: maximum number of zeros allowed
    let left = 0, right = 0;
    let maxLength = 0;

    while (right < A.length) {
        if (A[right] === '0') {
            zeroCount++;
        }

        while (zeroCount > k) {
            if (A[left] === '0') {
                zeroCount--;
            }
            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
        right++;
    }

    return maxLength;
}

const res = longestConsecutiveOnes('000000000000');
const res1 = longestConsecutiveOnes('111011101');

console.log(res);
console.log(res1);