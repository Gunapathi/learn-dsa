/** 
 * Problem Description
Given an array of integers, every element appears thrice except for one, which occurs once.

Find that element that does not appear thrice.

NOTE: Your algorithm should have a linear runtime complexity.

Could you implement it without using extra memory?
 */

function solve(A) {
    let ans = BigInt(0);

    for (let i = 0; i < 32; i++) {
        let count = BigInt(0);

        for (let j = 0; j < A.length; j++) {
            if ((BigInt(A[j]) & (BigInt(1) << BigInt(i))) !== BigInt(0)) {
                count++;
            }
        }

        if (count % BigInt(3) !== BigInt(0)) {
            ans = ans | (BigInt(1) << BigInt(i));
        }
    }

    return Number(ans);
}

console.log(solve([1, 2, 4, 3, 3, 2, 2, 3, 1, 1])) // 4
console.log(solve([0, 0, 0, 1])) // 1