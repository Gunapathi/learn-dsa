function smallestSubArray(A) {
    // const minValue = Math.min(...A)
    // const maxValue = Math.max(...A)

    // let last_min_index = -1;
    // let last_max_index = -1;

    // let result = 0;

    // console.log(`minValue = ${minValue}, maxValue = ${maxValue}`);

    // // console.log(A.length - 1, A[A.length - 1])

    // for (let i = 0; i <= (A.length - 1); i++) {
    //     if (A[i] == minValue) {
    //         console.log(`min ${A[i]} == ${minValue}`)
    //         last_min_index = i;
    //         console.log(A[i] ,'minIndex', last_min_index, 'maxIndex', last_max_index)
    //         console.log('minIndex', last_min_index)
    //         if (last_max_index != -1) {
    //             result = ((i - last_max_index + 1));
    //         }
    //     }
    //     console.log(`i = ${i}, comp ${A[i]} == ${maxValue}`)
    //     if (A[i] == maxValue) {
    //         console.log(`max ${A[i]} == ${maxValue}`)
    //         last_max_index = i;
    //         console.log(A[i] ,'minIndex', last_min_index, 'maxIndex', last_max_index)
    //         if (last_min_index != -1) {
    //             console.log(`${i} - ${last_min_index} - 1`)
    //             result = ((i - last_min_index + 1));
    //         }
    //     }
    // }
    // console.log(result);

    const minValue = Math.min(...A)
    const maxValue = Math.max(...A)
    let last_min_index = -1;
    let last_max_index = -1;
    let result = 0;

    for (let i = 0; i <= (A.length - 1); i++) {
        if (A[i] == minValue) {
            last_min_index = i;
            if (last_max_index != -1) {
                result = ((i - last_max_index + 1));
            }
        }

        if (A[i] == maxValue) {
            last_max_index = i;
            if (last_min_index != -1) {
                result = ((i - last_min_index + 1));
            }
        }
    }
    return result;
}

// smallestSubArray([1, 3, 2])
smallestSubArray([814, 761, 697, 483, 981])
// console.log(smallestSubArray([1, 3, 2]))