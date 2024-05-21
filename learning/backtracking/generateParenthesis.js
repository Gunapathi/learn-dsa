function generateParenthesis(A) {
    const result = [];

    function rec(open, close, str) {
        if (str.length === 2 * A) {
            result.push(str.join(''));
            return;
        }

        if (open < A) {
            str.push('(');
            rec(open + 1, close, str);
            str.pop();
        }

        if (close < open) {
            str.push(')');
            rec(open, close + 1, str);
            str.pop();
        }
    }

    rec(0, 0, []);
    return result;
}


console.log(generateParenthesis(3))
console.log(generateParenthesis(1))