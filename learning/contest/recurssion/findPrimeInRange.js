function findPrime(A, B) {
    function countPrime(n) {
        const prime = Array(n + 1).fill(true);
        prime[0] = prime[1] = false

        for (let p = 2; p * p <= n; p++) {
            if (prime[p]) {
                for (let i = p * p; i <= n; i += p) {
                    prime[i] = false;
                }
            }
        }
        return prime;
    }

    if (B < 2) {
        return 0
    }

    const primseUpToR = countPrime(B);

    // let count = 0;
    let primeList = [];
    for (let i = Math.max(A, 2); i <= B; i++) {
        if (primseUpToR[i]) {
            // count += 1;
            primeList.push(i)
        }
    }

    return primeList;
}

console.log(findPrime(1, 5))