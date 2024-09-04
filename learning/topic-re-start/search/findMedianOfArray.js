// SUM REF VIDEO - https://www.youtube.com/watch?v=F9c7LpRZWVQ

function findMedianSortedArrays(A, B) {
    //   checking for condition A.size < B.size, allways keep A array smaller
    if (A.length > B.length) return findMedianSortedArrays(B, A);

    // calculating size of arrays
    let n1 = A.length,
        n2 = B.length;

    // calculating low and high & left and total length of the array
    let low = 0,
        high = n1,
        left = Math.floor((n1 + n2 + 1) / 2),
        n = n1 + n2;

    while (low <= high) {
        // calc the count of elements to be picked from array1 and rest from array2
        let mid1 = (low + high) >> 1,
            mid2 = left - mid1;

        // calculate l1, r1 and l2 and r2
        let l1 = mid1 === 0 ? Number.MIN_SAFE_INTEGER : A[mid1 - 1],
            r1 = mid1 === n1 ? Number.MAX_SAFE_INTEGER : A[mid1],
            l2 = mid2 === 0 ? Number.MIN_SAFE_INTEGER : B[mid2 - 1],
            r2 = mid2 === n2 ? Number.MAX_SAFE_INTEGER : B[mid2];

        // if l1 <= r2 && l2 <= r1 is TRUE then all numbers on left side are smaller than right side
        // which means, now all numbers are arranged in ascending order
        if (l1 <= r2 && l2 <= r1) {
            // if total count of A and B is odd
            if (n % 2 === 1) {
                return Math.max(l1, l2).toFixed(1);
            }

            // if total count of A and B is even
            return ((Math.max(l1, l2) + Math.min(r1, r2)) / 2).toFixed(1);
        } else if (l1 > r2) {
            // checking for when left1 > right2, it means we have to reduce left1, so we will move left
            // array1 still has some larger elements on the order
            high = mid1 - 1;
        } else {
            // when left2 > right1, it means we have to increase right1, so we will move right
            // array2 still has some larger elements on right side
            low = mid1 + 1;
        }
    }

    return 0;
}

// Test cases
console.log(findMedianSortedArrays([1, 3], [2])); // Output: 2.0
console.log(findMedianSortedArrays([1, 2], [3, 4])); // Output: 2.5
console.log(findMedianSortedArrays([0, 0], [0, 0])); // Output: 0.0
console.log(findMedianSortedArrays([], [1])); // Output: 1.0
console.log(findMedianSortedArrays([2], [])); // Output: 2.0
