function subsets(A) {
    let res = [];
    A = A.sort((a, b) => {
        return a - b;
    })
    res.push([]);

    // Helper function to generate and print subsets
    function generateSubsets(arr, idx, currentSet) {
        // Base case: If idx reaches the length of arr, print the current subset
        if (idx === arr.length) {
            return;
        }

        // Include the current element and move to the next index
        currentSet.push(arr[idx]);
        res.push([...currentSet]);
        generateSubsets(arr, idx + 1, currentSet);

        // Exclude the current element and move to the next index
        currentSet.pop();
        generateSubsets(arr, idx + 1, currentSet);
    }

    // Start the recursive generation with an empty subset
    generateSubsets(A, 0, []);
    return res;
}

console.log(subsets([9, -20, -11, -8, -4, 2, -12, 14, 1, -18]))
// console.log(subsets([1]))
// console.log(subsets([1, 2, 3]))

