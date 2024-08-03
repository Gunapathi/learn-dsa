function findPosition(A, B) {
    const rows = A.length;
    const cols = A[0].length;

    let minIndex = -1; // Initialize minIndex to -1

    for (let i = 0; i < rows; i++) {
        let low = 0;
        let high = cols - 1;
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (A[i][mid] === B) {
                let index = (i + 1) * 1009 + (mid + 1); // Calculate index
                minIndex = minIndex === -1 ? index : Math.min(minIndex, index); // Update minIndex
                // Continue searching in the row to ensure the smallest index is found
                high = mid - 1;
            } else if (A[i][mid] < B) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    }

    return minIndex; // Return minIndex, which will be -1 if B is not found

    // const rows = A.length;
    // const cols = A[0].length;

    // // Start from the top-right corner
    // let i = 0;
    // let j = cols - 1;
    // let position = -1;

    // while (i < rows && j >= 0) {
    //     if (A[i][j] === B) {
    //         position = (i + 1) * 1009 + (j + 1); // Adjusting to 1-based indexing
    //         j--; // Move left to find smaller position
    //     } else if (A[i][j] < B) {
    //         i++; // Move down
    //     } else {
    //         j--; // Move left
    //     }
    // }

    // return position; // Returns the smallest position if found, -1 otherwise
}

console.log(findPosition([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 2));  // Output: 1011
console.log(findPosition([[1, 2], [3, 3]], 3));  // Output: 2019
console.log(findPosition([[3, 3, 3], [3, 3, 3], [3, 3, 3]], 3));  // Output: 1010


// fix the issue for last console since im getting 1012 as answer