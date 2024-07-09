/**Problem Description
Given a vector A of non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.

Problem Constraints
1 <= |A| <= 100000

Input Format
First and only argument is the vector A

Output Format
Return one integer, the answer to the question

Example Input
Input 1:
A = [0, 1, 0, 2]

Input 2:
A = [1, 2]

Example Output
Output 1:
1
Output 2:
0

Example Explanation
Explanation 1:

1 unit is trapped on top of the 3rd element.
Explanation 2:

No water is trapped. */

function rainWaterTrap(A) {
    const n = A.length;

    if (n === 0) return 0;

    let lMax = new Array(n).fill(0);
    let rMax = new Array(n).fill(0);
    let ans = 0;

    lMax[0] = A[0];
    for (let i = 1; i < n; i++) {
        lMax[i] = Math.max(lMax[i - 1], A[i]) // create a prefixsum of max value from left to right
    }

    rMax[n - 1] = A[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        rMax[i] = Math.max(rMax[i + 1], A[i]) // create a sufixsum of max value from right to left
    }

    for (let i = 0; i < n; i++) {
        let water = Math.min(lMax[i], rMax[i]) - A[i]; // find min (prefix[i], suffix[i]) - current height
        if (water > 0) {
            ans += water; // if water value is (> 0), then add that to ans
        }
    }

    return ans;
}

console.log(rainWaterTrap([0, 1, 0, 2])) // 1
console.log(rainWaterTrap([1, 2])) // 0