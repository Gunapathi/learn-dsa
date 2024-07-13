function solve(A, B) {
    let count = 0;

    // Count elements less than or equal to B
    for (let i = 0; i < A.length; i++) {
        if (A[i] <= B) {
            count++;
        }
    }

    // If there are 0 or 1 elements <= B, no swaps needed
    if (count <= 1) {
        return 0;
    }

    let l = 0, r = 0, x = 0;

    // Count elements greater than B in the first window of size count
    while (r < count) {
        if (A[r] > B) {
            x++;
        }
        r++;
    }

    let ans = x;

    // Slide the window across the array and find the minimum number of swaps
    while (r < A.length) {
        if (A[r] > B) {
            x++;
        }

        if (A[l] > B) {
            x--;
        }

        ans = Math.min(ans, x);
        r++;
        l++;
    }

    return ans;
}

console.log(solve([1, 12, 10, 3, 14, 10, 5], 8)); // Expected output: 2
console.log(solve([52, 7, 93, 47, 68, 26, 51, 44, 5, 41, 88, 19, 78, 38, 17, 13, 24, 74, 92, 5, 84, 27, 48, 49, 37, 59, 3, 56, 79, 26, 55, 60, 16, 83, 63, 40, 55, 9, 96, 29, 7, 22, 27, 74, 78, 38, 11, 65, 29, 52, 36, 21, 94, 46, 52, 47, 87, 33, 87, 70], 19)); // Expected output: 2
console.log(solve([5, 17, 100, 11], 20)); // Expected output: 0
