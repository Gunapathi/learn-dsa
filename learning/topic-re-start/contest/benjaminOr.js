/**
 * Problem Description
One sunny morning, the town's esteemed professor of mathematics, Dr. Benjamin, presented a captivating challenge to his students. He introduced them to an array A of N integers, representing a sequence of numbers with each element holding a special significance.
Dr. Benjamin explained that the students' task was to analyze the array and determine the count of pairs that satisfied a unique condition. The condition revolved around the OR operation on the ith bit of the pair's elements. The goal was to count the pairs for which the OR of the ith bit resulted in one. You have to answer for Q queries given in array B, each query denotes the index for which you need to find the count of pairs with OR of that index equals 1.
 */

function countPairsWithOrOne(A, B) {
    let n = A.length;
    let results = [];

    B.forEach(bitIndex => {
        let countSetBit = 0;
        let countUnsetBit = 0;

        // Single pass to count set and unset bits for the current bitIndex
        for (let i = 0; i < n; i++) {
            if (A[i] & (1 << bitIndex)) {
                countSetBit++;
            } else {
                countUnsetBit++;
            }
        }

        // Calculate the number of valid pairs
        // Pairs with both bits set: (countSetBit * (countSetBit - 1)) / 2
        // Pairs with one bit set and one bit unset: countSetBit * countUnsetBit
        let pairsWithSetBits = (countSetBit * (countSetBit - 1)) / 2;
        let pairsWithMixedBits = countSetBit * countUnsetBit;

        results.push(pairsWithSetBits + pairsWithMixedBits);
    });

    return results;
}

console.log(countPairsWithOrOne([4, 5, 3, 1], [2, 0])); // [5,6]
console.log(countPairsWithOrOne([2, 2, 2], [2, 1, 0])); // [0,3,0]
console.log(countPairsWithOrOne([6, 7, 4, 1], [1, 2, 3])); // [5,6,0]