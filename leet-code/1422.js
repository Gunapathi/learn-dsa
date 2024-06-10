/**function maxScore(s) {
    let zeros = 0, ones = 0, maxScore = 0;
    
    // First pass
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '0') zeros++;
        else ones++;
    }
    
    // Second pass
    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === '0') maxScore = Math.max(maxScore, ++zeros + ones);
        else maxScore = Math.max(maxScore, zeros + --ones);
    }
    
    return maxScore;
}
 */

function maxScore(s) {
    let ones = 0, zeros = 0, res = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '1') ones++;
    }

    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === '0') {
            res = Math.max(res, ++zeros + ones)
        } else {
            res = Math.max(res, zeros + --ones)
        }
    }

    return res
}

console.log(maxScore("011101")); // 5 
console.log(maxScore("011101")); // 5
console.log(maxScore("1111")); // 3
console.log(maxScore("00")); // 2