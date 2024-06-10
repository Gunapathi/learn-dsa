var maximumPopulation = function (logs) {
    let years = new Array(101).fill(0);

    for (const log of logs) {
        years[log[0] - 1950]++;
        years[log[1] - 1950]--;
    }

    let res = 1950;
    let maxPop = years[0];

    for (i = 1; i < years.length; i++) {
        years[i] = years[i - 1] + years[i]
        if (years[i] > maxPop) {
            maxPop = years[i];
            res = i + 1950;
        }
    }

    return res;
};

console.log(maximumPopulation([[1993, 1999], [2000, 2010]]));
console.log(maximumPopulation([[1950, 1961], [1960, 1971], [1970, 1981]]));