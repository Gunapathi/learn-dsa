/**
 * remove uppercase
 * change vowels to #
 * concancate string with same characters
 */

function stringManipulation(A) {
    let result = ''

    for (let i = 0; i < A.length; i++) {
        let charCode = A.charCodeAt(i)

        // If the character is not an uppercase letter, add it to the result
        if (charCode < 'A'.charCodeAt(0) || charCode > 'Z'.charCodeAt(0)) {
            // If the character is a vowel, replace it with '#'
            if ('aeiou'.includes(A[i])) {
                result += '#'
            } else {
                result += A[i]
            }
        }
    }

    return result + result
}

console.log(stringManipulation('aeiOUz')) // ###z###z
