function solve(A) {
    return reverseArray(A, 0, A.length - 1)
}

function reverseArray(arr, start, end) {
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end]
        arr[end] = temp;
        start++;
        end--;
    }

    return arr;
}

console.log(solve([1, 2, 3, 4, 5]))
console.log(solve([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]))