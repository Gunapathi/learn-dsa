/**Given a binary string A. It is allowed to do at most one swap between any 0 and 1. Find and return the length of the longest consecutive 1’s that can be achieved.


Input Format

The only argument given is string A.
Output Format

Return the length of the longest consecutive 1’s that can be achieved.
Constraints

1 <= length of string <= 1000000
A contains only characters 0 and 1.
For Example

Input 1:
    A = "111000"
Output 1:
    3

Input 2:
    A = "111011101"
Output 2:
    7 */

function longestConsecutiveOnes(A) {
    const arr = A.split('');
    const n = arr.length;
    let max = 0, totalOnes = 0;

    for (let i = 0; i < n; i++) {
        if (arr[i] === '1') {
            totalOnes += 1;
        }
    }

    if (totalOnes === n) {
        return n;
    }

    for (let i = 0; i < n; i++) {
        let j = 0, l = 0, r = 0;
        if (arr[i] === '0') {
            j = i - 1;
            while (j >= 0 && arr[j] === '1') {
                j--; l++;
            }

            j = i + 1;
            while (j < n && arr[j] === '1') {
                j++; r++;
            }

        }
        // Update max length considering different scenarios
        if (l + r === totalOnes) {
            max = Math.max(max, totalOnes);
        } else {
            max = Math.max(max, l + r + 1);
        }

    }

    return max;
}

const res = longestConsecutiveOnes('111000');
// const res = longestConsecutiveOnes('11010110000000000');
// const res = longestConsecutiveOnes('000000000000');
// const res = longestConsecutiveOnes('00000011111111');
// const res = longestConsecutiveOnes('111011101');

console.log(res);