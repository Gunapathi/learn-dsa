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

function waterTrap(A) {
    let ans = 0;
    let lmax = new Array(A.length).fill(0);
    lmax[0] = A[0];
    for (let i = 1; i < A.length; i++) {
        lmax[i] = Math.max(A[i], lmax[i - 1]);
    }

    let rmax = new Array(A.length).fill(0);
    rmax[A.length - 1] = A[A.length - 1];
    for (let i = A.length - 2; i >= 0; i--) {
        rmax[i] = Math.max(A[i], rmax[i + 1]);
    }

    for (let i = 0; i < A.length; i++) {
        ans += Math.min(lmax[i], rmax[i]) - A[i];
    }

    return ans
}

console.log(waterTrap([0, 1, 0, 2])) // 1