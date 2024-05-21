function factorial(A) {
    let ans = [];
    let count = 0;

    for (let i = 1; i <= A / i; i++) {
        if (A % i === 0) {
            ans.push(i);
            count++;
            ans.push(A / i);
            if (i != A / i) {
                count++;
            }
        }
    }

    return [count, ans];

}

console.log(factorial(24));