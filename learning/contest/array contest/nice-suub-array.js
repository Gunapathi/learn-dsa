function countNiceSubarrays(A) {
    const counts = { 0: 0, 1: 0, 2: 0 }; // Store the count of 0s, 1s, and 2s
    let niceSubarrays = 0; // Initialize the count of nice subarrays
    let left = 0; // Left pointer of the window

    for (let right = 0; right < A.length; right++) {
        counts[A[right]]++; // Update the count of the current number

        // Shrink the window from the left until it becomes nice
        while (counts[0] > 0 && counts[1] > 0 && counts[2] > 0) {
            niceSubarrays += A.length - right; // Count the subarrays ending at the current right pointer
            counts[A[left]]--; // Remove the leftmost element from the window
            left++; // Move the left pointer to the right
        }
    }

    return niceSubarrays;
}

console.log(countNiceSubarrays([0, 1, 2, 0])); // Output: 3
console.log(countNiceSubarrays([0, 1, 0, 0, 2])); // Output: 20
