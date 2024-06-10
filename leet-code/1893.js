var isCovered = function (ranges, left, right) {
    let set = new Set();

    for (let range of ranges) {
        for (let i = range[0]; i <= range[1]; i++) {
            set.add(i);
        }
    }

    for (let i = left; i <= right; i++) {
        if (!set.has(i)) {
            return false;
        }
    }

    return true;
};

console.log(isCovered([[1, 2], [3, 4], [5, 6]], 2, 5));
console.log(isCovered([[1, 10], [10, 20]], 21, 21));