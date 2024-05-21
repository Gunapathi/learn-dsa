/**Problem Description
Say you have an array, A, for which the ith element is the price of a given stock on day i.
If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Return the maximum possible profit.



Problem Constraints
0 <= A.size() <= 700000
1 <= A[i] <= 107



Input Format
The first and the only argument is an array of integers, A.


Output Format
Return an integer, representing the maximum possible profit.


Example Input
Input 1:
A = [1, 2]
Input 2:

A = [1, 4, 5, 2, 4]


Example Output
Output 1:
1
Output 2:

4


Example Explanation
Explanation 1:
Buy the stock on day 0, and sell it on day 1.
Explanation 2:

Buy the stock on day 0, and sell it on day 2. */

function maxProfit(prices) {
    if (prices.length < 2) {
        return 0; // Not enough prices to make a profit
    }

    let minPrice = prices[0]; // Initialize minimum price
    let maxProfit = 0; // Initialize maximum profit

    for (let i = 1; i < prices.length; i++) {
        // Update minimum price if current price is lower
        minPrice = Math.min(minPrice, prices[i]);
        // Update maximum profit if selling at current price gives higher profit
        maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    }

    return maxProfit;
}

// Example usage:
const stockPrices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(stockPrices)); // Output: 5 (buy at 1, sell at 6)
