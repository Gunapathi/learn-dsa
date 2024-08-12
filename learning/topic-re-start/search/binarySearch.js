function binarySearch(arr, low, high, target) {
    // if low and high are crossed return -1, element is not found
    if (low > high) {
        return -1;
    }

    const mid = Math.floor(low + high) / 2;

    if (arr[mid] === target) {
        // return mid, if mid === target
        return mid
    } else if (arr[mid] < target) {
        // if mid < target, target is on right side, so eleminate left side and move target right, by mid + 1
        return binarySearch(arr, mid + 1, high, target);
    }

    // if mid > high, target should be on left side, so eleminate right side and move target left, by mid - 1
    return binarySearch(arr, low, high - 1, target);
}

function solve(A, target) {
    return binarySearch(A, 0, A.length - 1, target);
}

console.log(solve([1, 3, 7, 9, 11, 12, 45], 13)) // -1
console.log(solve([1, 3, 7, 9, 11, 12, 45], 12)) // 5