// `
// Problem Description
// Given string A denoting an infix expression. Convert the infix expression into a postfix expression.

// String A consists of ^, /, *, +, -, (, ) and lowercase English alphabets where lowercase English alphabets are operands and ^, /, *, +, - are operators.

// Find and return the postfix expression of A.

// NOTE:

// ^ has the highest precedence.
// / and * have equal precedence but greater than + and -.
// + and - have equal precedence and lowest precedence among given operators.


// Problem Constraints
// 1 <= length of the string <= 500000



// Input Format
// The only argument given is string A.



// Output Format
// Return a string denoting the postfix conversion of A.



// Example Input
// Input 1:

//  A = "x^y/(a*z)+b"
// Input 2:

//  A = "a+b*(c^d-e)^(f+g*h)-i"


// Example Output
// Output 1:

//  "xy^az*/b+"
// Output 2:

//  "abcd^e-fgh*+^*+i-"


// Example Explanation
// Explanation 1:

//  Ouput dentotes the postfix expression of the given input.
// `

function prec(a) {
    if (a === '^') {
        return 3;
    } else if (a === '*' || a === '/') {
        return 2;
    } else if (a === '+' || a === '-') {
        return 1;
    } else {
        return 0;
    }
}

function solve(A) {
    let n = A.length;
    let ans = [];
    let st = [];

    for (let i = 0; i < n; i++) {
        let ch = A[i];

        // If the character is an operand (lowercase letter)
        if (ch >= 'a' && ch <= 'z') {
            ans.push(ch);
        }
        // If the character is an operator
        else if (ch === '*' || ch === '/' || ch === '+' || ch === '-' || ch === '^') {
            while (st.length !== 0 && prec(st[st.length - 1]) >= prec(ch)) {
                ans.push(st.pop());
            }
            st.push(ch);
        }
        // If the character is an opening parenthesis
        else if (ch === '(') {
            st.push(ch);
        }
        // If the character is a closing parenthesis
        else if (ch === ')') {
            while (st.length !== 0 && st[st.length - 1] !== '(') {
                ans.push(st.pop());
            }
            if (st.length !== 0) {
                st.pop(); // Pop the '('
            }
        }
    }

    // Pop the remaining operators from the stack
    while (st.length !== 0) {
        ans.push(st.pop());
    }

    return ans.join('');
}

console.log(solve('c*(u-p)^e/(w*x^p)^k^(d^o)')); // Output: "cup-e^*wxp^*k^do^^/"
console.log(solve("x^y/(a*z)+b")); // Output: "xy^az*/b+"
console.log(solve("a+b*(c^d-e)^(f+g*h)-i")); // Output: "abcd^e-fgh*+^*+i-"
