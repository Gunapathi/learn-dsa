function solve(A) {
    let res = [];

    function permutation(str, n, perm = "", set = new Set()) {
        if (perm.length === n) {
            res.push(perm.split('')); // Split the string into an array of characters
            return;
        }

        for (let i = 0; i < str.length; i++) {
            if (!set.has(str[i])) {
                set.add(str[i]);
                permutation(str, n, perm + str[i], set);
                set.delete(str[i]);
            }
        }
    }

    permutation(A, A.length);
    return res; // Return the result array after filling it with permutations
}

// Example usage:
console.log(solve(['A', 'B', 'C']));
