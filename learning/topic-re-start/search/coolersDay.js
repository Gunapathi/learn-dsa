function coolerDays(A) {
    const N = A.length;
    const result = new Array(N).fill(0);
    const stack = [];

    // Traverse the array from right to left
    for (let i = N - 1; i >= 0; i--) {
        // Maintain the stack with only cooler days in the future
        while (stack.length > 0 && A[stack[stack.length - 1]] >= A[i]) {
            stack.pop();
        }

        // If the stack is not empty, calculate the days to the next cooler day
        if (stack.length > 0) {
            result[i] = stack[stack.length - 1] - i;
        }

        // Push the current day onto the stack
        stack.push(i);
    }

    return result;
}

// Example input
console.log(coolerDays([73, 72, 75, 71, 77, 70, 79, 80])); // []
