/**Problem Description
Given a string A of size N, find and return the longest palindromic substring in A.

Substring of string A is A[i...j] where 0 <= i <= j < len(A)

Palindrome string:
A string which reads the same backwards. More formally, A is palindrome if reverse(A) = A.

Incase of conflict, return the substring which occurs first ( with the least starting index).



Problem Constraints
1 <= N <= 6000



Input Format
First and only argument is a string A.



Output Format
Return a string denoting the longest palindromic substring of string A.



Example Input
Input 1:
A = "aaaabaaa"
Input 2:
A = "abba


Example Output
Output 1:
"aaabaaa"
Output 2:
"abba"


Example Explanation
Explanation 1:
We can see that longest palindromic substring is of length 7 and the string is "aaabaaa".
Explanation 2:
We can see that longest palindromic substring is of length 4 and the string is "abba". */

function longestSubstring(A) {
    let maxLen = 0;
    let arr = A.split('');
    let n = arr.length;
    let longestSubstr = '';

    // simplified version
    for (let i = 0; i < n; i++) {
        // For odd length palindromes
        let left = i, right = i;
        while (left >= 0 && right < n && arr[left] === arr[right]) {
            if (right - left + 1 > maxLen) {
                maxLen = right - left + 1;
                longestSubstr = arr.slice(left, right + 1).join('');
            }
            left--;
            right++;
        }

        // For even length palindromes
        left = i;
        right = i + 1;
        while (left >= 0 && right < n && arr[left] === arr[right]) {
            if (right - left + 1 > maxLen) {
                maxLen = right - left + 1;
                longestSubstr = arr.slice(left, right + 1).join('');
            }
            left--;
            right++;
        }
    }

    return longestSubstr;
}

// console.log(longestSubstring('aaaabaaa'));
console.log(longestSubstring('adaebcdfdcbetggte'));
console.log(longestSubstring('abb'));