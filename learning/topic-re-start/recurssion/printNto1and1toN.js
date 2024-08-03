/**
 * Problem Description
Print N numbers in Decreasing Order and then in Increasing Order.

You are given a positive number N.
You are required to print the numbers from N to 1.
You are required to not use any loops. Don't change the signature of the function DecThenInc function.
Note : Please print an new line after printing the output.


Problem Constraints
1 <= N <= 100


Input Format
The first line contains a single integer N.


Output Format
A single line having number printed from N to 1 and then from 1 to N.


Example Input
Input 2:
1
Input 1:
4


Example Output
Output 1:
1 1
Output 2:
4 3 2 1 1 2 3 4


Example Explanation
Elements are First printer from N down to 1 and then 1 upto N.
 */

function solve(A) {
    // function printNto1(A) {
    //     if (A === 0) {
    //         return
    //     }

    //     process.stdout.write(A + " ")
    //     printNto1(A - 1)
    // }

    // function print1toN(A) {
    //     if (A === 0) {
    //         return
    //     }

    //     print1toN(A - 1)
    //     process.stdout.write(A + " ")
    // }

    // printNto1(A);

    // print1toN(A)
    // process.stdout.write("\n")

    // OPTIMIZED CODE
    function printNum(num) {
        if (num === 0) {
            return
        }

        process.stdout.write(num + " ");
        printNum(num - 1);

        if (num <= A) {
            process.stdout.write(num + " ");
        }
    }

    printNum(A);
    process.stdout.write("\n");
}

console.log(solve(1)) // 1 1
console.log(solve(4)) // 4 3 2 1 1 2 3 4