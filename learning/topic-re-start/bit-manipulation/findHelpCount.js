/**Problem Description
Alex and Sam are good friends. Alex is doing a lot of programming these days. He has set a target score of A for himself.
Initially, Alex's score was zero. Alex can double his score by doing a question, or Alex can seek help from Sam for doing questions that will contribute 1 to Alex's score. Alex wants his score to be precisely A. Also, he does not want to take much help from Sam.

Find and return the minimum number of times Alex needs to take help from Sam to achieve a score of A. */

function solve(A, B) {
    let count = 0;

    while (A > 0) {
        count = count + (A & 1); // find last digit is even or odd -> LSB using & operator
        A = A >> 1;
    }

    return count;
}

console.log(solve(5)) // 2
console.log(solve(3)) // 2