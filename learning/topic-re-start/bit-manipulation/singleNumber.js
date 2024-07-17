/**
 * Problem Description
Given an array of integers A, every element appears twice except for one. Find that integer that occurs once.

NOTE: Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
 */

function singleNumber(A) {
    let ans = BigInt(0);

    for (let i = 0; i < A.length; i++) {
        ans = ans ^ BigInt(A[i]);
    }

    return Number(ans);
}

console.log(singleNumber([1, 2, 2, 3, 1])) // 3
console.log(singleNumber([1, 2, 2])) // 1