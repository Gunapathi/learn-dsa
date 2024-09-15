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

function precedence(a) {
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
    let stack = [];
    let result = [];

    for (let i = 0; i < A.length; i++) {
        const char = A[i];

        if (char >= 'a' && char <= 'z') {
            result.push(char);
        } else if (char === '+' || char === '-' || char === '*' || char === '/' || char === '^') {
            while (stack.length !== 0 && precedence(stack[stack.length - 1]) >= precedence(char)) {
                result.push(stack.pop()); // pop high precedence operators & push to result
            }
            stack.push(char); // push current low precedence operator to stack
        } else if (char === '(') {
            stack.push(char);
        } else if (char === ')') {
            while (stack.length !== 0 && stack[stack.length - 1] !== ')') {
                result.push(stack.pop());
            }
            if (stack.length !== 0) {
                stack.pop(); // remove '(' => function closed
            }
        }
    }

    return result.join('');
}

console.log(solve('c*(u-p)^e/(w*x^p)^k^(d^o)')); // Output: "cup-e^*wxp^*k^do^^/"
console.log(solve("x^y/(a*z)+b")); // Output: "xy^az*/b+"
console.log(solve("a+b*(c^d-e)^(f+g*h)-i")); // Output: "abcd^e-fgh*+^*+i-"
