/**Problem Description
There are A beggars sitting in a row outside a temple. Each beggar initially has an empty pot. When the devotees come to the temple, they donate some amount of coins to these beggars. Each devotee gives a fixed amount of coin(according to their faith and ability) to some K beggars sitting next to each other.

Given the amount P donated by each devotee to the beggars ranging from L to R index, where 1 <= L <= R <= A, find out the final amount of money in each beggar's pot at the end of the day, provided they don't fill their pots by any other means.
For ith devotee B[i][0] = L, B[i][1] = R, B[i][2] = P, given by the 2D array B


Problem Constraints
1 <= A <= 2 * 105
1 <= L <= R <= A
1 <= P <= 103
0 <= len(B) <= 105


Input Format
The first argument is a single integer A.
The second argument is a 2D integer array B.


Output Format
Return an array(0 based indexing) that stores the total number of coins in each beggars pot.


Example Input
Input 1:-
A = 5
B = [[1, 2, 10], [2, 3, 20], [2, 5, 25]]


Example Output
Output 1:-
10 55 45 25 25


Example Explanation
Explanation 1:-
First devotee donated 10 coins to beggars ranging from 1 to 2. Final amount in each beggars pot after first devotee: [10, 10, 0, 0, 0]
Second devotee donated 20 coins to beggars ranging from 2 to 3. Final amount in each beggars pot after second devotee: [10, 30, 20, 0, 0]
Third devotee donated 25 coins to beggars ranging from 2 to 5. Final amount in each beggars pot after third devotee: [10, 55, 45, 25, 25] */

function solve(A, B) {
    // Initialize the result array with zeros
    let result = new Array(A).fill(0);

    // Apply the difference array technique
    for (let i = 0; i < B.length; i++) {
        const L = B[i][0] - 1, // Convert to zero-indexed
            R = B[i][1], // This will be used as is in zero-indexed
            P = B[i][2]; // rupee

        result[L] += P;
        if (R < A) { // Ensure we don't go out of bounds on right hand side
            result[R] -= P; // since we dont need the amt to be added after right end, reduce same amount after right end to make sure value remains same -> add and reduce same amount after right end
            // (L)(0+10) (0+10) (R)(0+10) (R+1)(0+10-10) (0+10-10) (0+10-10)
        }
    }

    // Compute the prefix sums to get the final amounts
    for (let i = 1; i < A; i++) {
        result[i] += result[i - 1];
    }

    return result;
}

console.log(solve(5, [[1, 2, 10], [2, 3, 20], [2, 5, 25]]))