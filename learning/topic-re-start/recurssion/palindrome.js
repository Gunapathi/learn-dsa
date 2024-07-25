function solve(A) {
    const strLen = A.length - 1;  // Determine the zero-based index of the last character

    function palindrome(c) {
        // Base case: if the current index is greater than or equal to half the string length, it's a palindrome
        if (c >= Math.floor(A.length / 2)) {
            return 1;
        }

        // If characters at the current index and its mirror index don't match, it's not a palindrome
        if (A[c] !== A[strLen - c]) {
            return 0;
        }

        // Recursive case: check the next pair of characters
        return palindrome(c + 1);
    }

    // Start the recursive palindrome check from the beginning of the string
    return palindrome(0);
}

console.log(solve("naman"));  // Output: 1 (Palindrome)
console.log(solve("strings"));  // Output: 0 (Not a palindrome)
console.log(solve("maddam"));  // Output: 1 (Palindrome)
