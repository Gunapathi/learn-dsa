function count1InList(A) {
    let ans = 0;
    let curr = 1;
    let prev = curr * 10;
    let N = A;
    while (N / curr > 0) {
        let left = Math.floor(N / prev);
        let curr_digit = Math.floor((N % prev) / curr);
        let right = (N % prev) % curr;

        if (curr_digit < 1) ans += left * curr;
        else if (curr_digit === 1) ans += (left * curr) + right + 1;
        else if (curr_digit > 1) ans += (left * curr) + curr;

        curr *= 10;
        prev *= 10;
    }
    return ans;
}

console.log(count1InList(10));
console.log(count1InList(11));