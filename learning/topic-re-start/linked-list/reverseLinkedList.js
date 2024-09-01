function solve(A) {
    let tail = A, nextNode = tail.next;

    while (nextNode !== null) {
        tail.next = nextNode.next;
        nextNode.next = A;
        A = nextNode;
        nextNode = tail.next;
    }
    return A;
}