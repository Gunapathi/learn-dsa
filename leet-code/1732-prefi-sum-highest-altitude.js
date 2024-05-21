var largestAltitude = function (gain) {
    // brute force
    // const prefixArr = [];

    // prefixArr[0] = gain[0];

    // for (let i = 1; i < gain.length; i++) {
    //     let curr = prefixArr[i - 1] + gain[i];
    //     prefixArr.push(curr);
    // }

    // let ans = 0;

    // for (let i = 0; i < prefixArr.length; i++) {
    //     ans = Math.max(ans, prefixArr[i]);
    // }

    // return ans;

    // optimized
    let maxAltitude = 0, currAltitude = 0;

    for (let i = 0; i < gain.length; i++) {
        currAltitude += gain[i];
        maxAltitude = Math.max(maxAltitude, currAltitude);
    }

    return maxAltitude;
};

console.log(largestAltitude([-5, 1, 5, 0, -7]));