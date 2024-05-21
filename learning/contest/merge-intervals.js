/**Problem Description
You have a set of non-overlapping intervals. You are given a new interval [start, end], insert this new interval into the set of intervals (merge if necessary).

You may assume that the intervals were initially sorted according to their start times.



Problem Constraints
0 <= |intervals| <= 105



Input Format
First argument is the vector of intervals

second argument is the new interval to be merged



Output Format
Return the vector of intervals after merging



Example Input
Input 1:

Given intervals [1, 3], [6, 9] insert and merge [2, 5] .
Input 2:

Given intervals [1, 3], [6, 9] insert and merge [2, 6] .


Example Output
Output 1:

 [ [1, 5], [6, 9] ]
Output 2:

 [ [1, 9] ]


Example Explanation
Explanation 1:

(2,5) does not completely merge the given intervals
Explanation 2:

(2,6) completely merges the given intervals */

function insert(A, B) {
    const merged = [];
    let [l, r] = B;
    let inserted = false;

    for (let i = 0; i < A.length; i++) {
        let [currStart, currEnd] = A[i];

        if (currEnd < l) {
            // If current interval ends before new interval starts, add it to the result
            merged.push(A[i]);
        } else if (currStart > r) {
            // If current interval starts after new interval ends, insert the new interval and then add the current one
            if (!inserted) {
                merged.push([l, r]);
                inserted = true;
            }
            merged.push(A[i]);
        } else {
            // If there is an overlap, merge the intervals
            l = Math.min(l, currStart);
            r = Math.max(r, currEnd);
        }
    }

    // If the new interval was not inserted, add it at the end
    if (!inserted) {
        merged.push([l, r]);
    }

    return merged;
}

console.log(insert([[1, 3], [6, 9]], [2, 5]))
console.log(insert([[1, 3], [6, 9]], [2, 6]))
console.log(insert([[6037774, 6198243], [6726550, 7004541], [8842554, 10866536], [11027721, 11341296], [11972532, 14746848], [16374805, 16706396], [17557262, 20518214], [22139780, 22379559], [27212352, 28404611], [28921768, 29621583], [29823256, 32060921], [33950165, 36418956], [37225039, 37785557], [40087908, 41184444], [41922814, 45297414], [48142402, 48244133], [48622983, 50443163], [50898369, 55612831], [57030757, 58120901], [59772759, 59943999], [61141939, 64859907], [65277782, 65296274], [67497842, 68386607], [70414085, 73339545], [73896106, 75605861], [79672668, 84539434], [84821550, 86558001], [91116470, 92198054], [96147808, 98979097]], [36210193, 61984219])) // [6037774 6198243 ] [6726550 7004541 ] [8842554 10866536 ] [11027721 11341296 ] [11972532 14746848 ] [16374805 16706396 ] [17557262 20518214 ] [22139780 22379559 ] [27212352 28404611 ] [28921768 29621583 ] [29823256 32060921 ] [33950165 64859907 ] [65277782 65296274 ] [67497842 68386607 ] [70414085 73339545 ] [73896106 75605861 ] [79672668 84539434 ] [84821550 86558001 ] [91116470 92198054 ] [96147808 98979097 ] 