class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

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

function createLinkedList(arr) {
    if (arr.length === 0) return null;

    let head = new Node(arr[0]),
        current = head;

    for (let i = 1; i < arr.length; i++) {
        current.next = new Node(arr[i]);
        current = current.next;
    }

    return head;
}

function printList(list) {
    let current = list,
        result = [];

    while (current != null) {
        result.push(current.data);
        current = current.next;
    }

    console.log(result.join(' -> '));
}

let list1 = createLinkedList([1, 2, 3, 4])
let result1 = solve(list1);
printList(result1);