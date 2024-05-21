function majorityElement(A) {
    // brute force - tc -> (n logn)
    // A.sort(); // Sort the array in ascending order
    // let max = 0; // Initialize the maximum count
    // let count = 1; // Start counting from the first element
    // let majorityElement = A[0]; // Initialize the majority element with the first element

    // for (let i = 1; i < A.length; i++) {
    //     if (A[i] === A[i - 1]) { // If the current element is the same as the previous one
    //         count++; // Increment the count
    //     } else {
    //         // If the count exceeds max, update the max count and majority element
    //         if (count > max) {
    //             max = count;
    //             majorityElement = A[i - 1];
    //         }
    //         count = 1; // Reset the count for the new element
    //     }

    //     if (max > A.length / 2) {
    //         return majorityElement; // Return the majority element
    //     }
    // }

    // // Check for the last element
    // if (count > max) {
    //     max = count;
    //     majorityElement = A[A.length - 1];
    // }

    // // Check if the majority element appears more than n/2 times
    // if (max > A.length / 2) {
    //     return majorityElement; // Return the majority element
    // } else {
    //     return null; // No majority element
    // }

    let count = 0;
    let candidate = null;

    for (let i = 0; i < A.length; i++) {
        if (count === 0) {
            candidate = A[i];
        }
        count += (A[i] === candidate) ? 1 : -1;
    }

    // Verify if candidate is the majority element
    count = 0;
    for (let i = 0; i < A.length; i++) {
        if (A[i] === candidate) {
            count++;
        }
    }

    if (count > Math.floor(A.length / 2)) {
        return Number(candidate);
    } else {
        return null; // No majority element
    }
}


// Test cases
console.log(majorityElement([2, 1, 2])); // Output: 2
console.log(majorityElement([100])); // Output: 100
console.log(majorityElement([1, 1, 1])); // Output: 1
console.log(majorityElement([3, 4, 4, 2, 4, 4, 4, 4])); // Output: 4
