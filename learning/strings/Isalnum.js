function isalnum(A) {
    if (A.length < 1) return 0;

    for (let i = 0; i < A.length - 1; i++) {
        let ascii = A[i].charCodeAt(0);
        if (!(ascii >= 48 && ascii <= 57) && // numeric (0-9)
            !(ascii >= 65 && ascii <= 90) && // upper alpha (A-Z)
            !(ascii >= 97 && ascii <= 122)) { // lower alpha (a-z)
            return 0;
        }
    }

    return 1;
}

const a = isalnum(['S', 'c', 'a', 'l', 'e', 'r', 'A', 'c', 'a', 'd', 'e', 'm', 'y', '2', '0', '2', '0']);
const b = isalnum(['S', 'c', 'a', 'l', 'e', 'r', '#', '2', '0', '2', '0']);

console.log(a);
console.log(b);