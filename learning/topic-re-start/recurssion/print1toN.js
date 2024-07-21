function printNum(A) {
    if (A === 0) {
        console.log("");
        return;
    }

    printNum(A - 1);
    process.stdout.write(A + " ");
}

printNum(10)
process.stdout.write('\n');

printNum(5)
process.stdout.write('\n');