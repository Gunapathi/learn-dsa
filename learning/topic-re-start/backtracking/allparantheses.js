/**
 * Problem Description

Given an integer A pairs of parentheses, write a function to generate all combinations of well-formed parentheses of length 2*A.



Problem Constraints

1 <= A <= 10



Input Format

First and only argument is integer A.



Output Format

Return a sorted list of all possible parenthesis.



Example Input

Input 1:

A = 3
Input 2:

A = 1


Example Output

Output 1:

[ "((()))", "(()())", "(())()", "()(())", "()()()" ]
Output 2:

[ "()" ]


Example Explanation

Explanation 1:

 All paranthesis are given in the output list.
Explanation 2:

 All paranthesis are given in the output list.
 */

function generateParenthesis(A) {
    let res = [];

    function printParenthesis(result, open, close, maxLen) {
        if (result.length === 2 * maxLen && open === close) {
            res.push(result);
        }

        if (open < maxLen) {
            printParenthesis(result + '(', open + 1, close, maxLen)
        }

        if (close < open) {
            printParenthesis(result + ')', open, close + 1, maxLen)
        }
    }

    printParenthesis('', 0, 0, A);

    return res;
}

console.log(generateParenthesis(3)) // [ "((()))", "(()())", "(())()", "()(())", "()()()" ]
console.log(generateParenthesis(1)) // [ "()" ]