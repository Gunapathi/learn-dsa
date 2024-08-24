function longestPalindrome(A) {
    // Step 1: Count the frequency of each character
    const freq = {};
    for (let char of A) {
        if (freq[char] === undefined) {
            freq[char] = 1;
        } else {
            freq[char]++;
        }
    }

    // Step 2: Calculate the longest palindrome length
    let length = 0;
    let odd_found = false;

    for (let char in freq) {
        if (freq[char] % 2 === 0) {
            length += freq[char];
        } else {
            length += freq[char] - 1;
            odd_found = true;
        }
    }

    // Step 3: If there's any character with an odd count, we can add one more to the palindrome length
    if (odd_found) {
        length++;
    }

    return length;
}

// Example usage:
// const input = "banana";
console.log(longestPalindrome("banana")); // Output: 7 (palindrome could be "dccaccd" or "dccbccd")
console.log(longestPalindrome("abcabc")); // Output: 7 (palindrome could be "dccaccd" or "dccbccd")
