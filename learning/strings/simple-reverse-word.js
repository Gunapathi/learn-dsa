/**Problem Description
Given a string A, you are asked to reverse the string and return the reversed string. */

function simpleReverseWord(A) {
    let i = 0;
    let arr = A.split(' ');
    let j = arr.length - 1;

    while (i <= j) {
        let temp = arr[i];
        arr[i] = arr[j]
        arr[j] = temp;
        i++; j--;
    }

    return arr.join(' ');
}

console.log(simpleReverseWord("the sky is blue"));