function elementsRemoval(A) {
    const arr = A.sort((a, b) => a - b);
    let sum = 0;

    for (let i = arr.length - 1; i >= 0; i--) {
        for (let j = i; j >= 0; j--) {
            sum += arr[j];
        }
    }

    return sum;
}

// console.log(elementsRemoval([2, 1]));
console.log(elementsRemoval([8, 0, 10]));