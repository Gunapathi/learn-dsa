function allSubArray(A) {
    const main_arr = [];

    for (let i = 0; i < A.length; i++) {
        let sub_arr = [];
        for (let j = i; j < A.length; j++) {
            sub_arr.push(A[j]);
            main_arr.push([...sub_arr])
        }
    }
    console.log(main_arr);
}

allSubArray([5, 2, 1, 4])