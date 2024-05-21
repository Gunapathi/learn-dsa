function checkPalindrome(A) {
    // if (A.length <= 1) {
    //     return 1
    // }

    // if (A[0] === A[A.length - 1]) {
    //     return checkPalindrome(A.slice(1, A.length - 1))
    // }

    // return 0

    function isPalindrome(start, end) {
        // Base case: If start index is greater than or equal to end index, return 1
        if (start >= end) {
            return 1;
        }

        // Check if characters at start and end indices are equal
        if (A[start] === A[end]) {
            // Recursively check the substring between start and end indices
            return isPalindrome(start + 1, end - 1);
        } else {
            // If characters are not equal, return 0 immediately
            return 0;
        }
    }

    // Start the palindrome check from the first and last characters of the string
    return isPalindrome(0, A.length - 1);
}

console.log(checkPalindrome('naman'))
console.log(checkPalindrome('strings'))
console.log(checkPalindrome('grrrrg'))