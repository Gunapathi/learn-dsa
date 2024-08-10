function merge(arr, low, mid, high) {
    let temp = [];
    let left = low;
    let right = mid + 1;

    while (left <= mid && right <= high) {
        if (arr[left] <= arr[right]) {
            temp.push(arr[left]);
            left++;
        } else {
            temp.push(arr[right]);
            right++;
        }
    }

    while (left <= mid) {
        temp.push(arr[left]);
        left++;
    }

    while (right <= high) {
        temp.push(arr[right]);
        right++;
    }

    for (let i = low; i <= high; i++) {
        arr[i] = temp[i - low];
    }

    return arr;
}

function mergeSort(arr, low, high) {
    if (low === high) {
        return;
    }

    const mid = Math.floor((low + high) / 2);
    mergeSort(arr, low, mid); // first half
    mergeSort(arr, mid + 1, high); // second half
    merge(arr, low, mid, high) // merge first and second half;

    return arr;
}

function solve(arr) {
    mergeSort(arr, 0, arr.length - 1)

    return arr;
}

console.log(solve([3, 2, 4, 5, 1, 8, 1]))
