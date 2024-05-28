function leaderInArray(A) {
    let n = A.length;
    let rightMax = A[n - 1]
    let ans = [A[n - 1]]

    if (n === 1) {
        return A
    }

    for (let i = n - 2; i >= 0; i--) {
        if (A[i] > rightMax) {
            rightMax = A[i]
            ans.unshift(A[i])
        }
    }

    return ans;
}

console.log(leaderInArray([16, 17, 4, 3, 5, 2]))