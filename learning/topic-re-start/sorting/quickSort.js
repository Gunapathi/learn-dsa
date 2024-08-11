function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function partition(arr, low, high) {
    let pivot = arr[low];
    let left = low + 1;
    let right = high;

    while (left <= right) {
        // Move left pointer to the right until you find an element greater than the pivot
        while (arr[left] <= pivot && left <= high) {
            left++;
        }

        // Move right pointer to the left until you find an element less than or equal to the pivot
        while (arr[right] > pivot && right >= low) {
            right--;
        }

        if (left < right) {
            swap(arr, left, right);
        }
    }

    // Swap pivot with the right pointer element
    swap(arr, low, right);

    return right;
}

function quickSort(arr, low, high) {
    if (low < high) {
        let pIndex = partition(arr, low, high);
        quickSort(arr, low, pIndex - 1);
        quickSort(arr, pIndex + 1, high);
    }

    return arr;
}

function solve(A) {
    return quickSort(A, 0, A.length - 1);
}

console.log(solve([3, 2, 4, 5, 1, 8, 1]))
console.log(solve([1, 3, 2, 3, 1]))