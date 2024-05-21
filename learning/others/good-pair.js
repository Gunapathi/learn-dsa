function goodPair(A, B) {
    for (let i = 0; i <= A.length - 1; i++) {
        for (let j = i + 1; j <= A.length - 1; j++) {
            if (A[i] + A[j] === B && i != j) {
                return 1
            }
        }
    }

    return 0
}

const A = [1, 2, 3, 4]
const B = 7
console.log(goodPair(A, B))