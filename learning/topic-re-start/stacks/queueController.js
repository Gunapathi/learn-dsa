/**
 * Problem Description

Implement a First In First Out (FIFO) queue using stacks only.

The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

Implement the UserQueue class:

void push(int X) : Pushes element X to the back of the queue.
int pop() : Removes the element from the front of the queue and returns it.
int peek() : Returns the element at the front of the queue.
boolean empty() : Returns true if the queue is empty, false otherwise.
NOTES:

You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.


Problem Constraints

1 <= X <= 109

At most 1000 calls will be made to push, pop, peek, and empty function.

All the calls to pop and peek are valid. i.e. pop and peek are called only when the queue is non-empty.



Example Input

Input 1:

 1) UserQueue()
 2) push(20)
 3) empty()
 4) peek()
 5) pop()
 6) empty()
 7) push(30)
 8) peek()
 9) push(40)
 10) peek()
Input 2:

 1) UserQueue()
 2) push(10)
 3) push(20)
 4) push(30)
 5) pop()
 6) pop()


Example Output

Output 1:

 false
 20
 20
 true
 30
 30 
Output 2:

 10
 20


Example Explanation

Explanation 1:

 Queue => 20
 Queue => -
 Queue => 30
 Queue => 30, 40 
Explanation 2:

 Queue => 10
 Queue => 10, 20
 Queue => 10, 20, 30
 Queue => 20, 30
 Queue => 30
 */

class UserQueue {

    constructor() {
        // Initialize your data structure here.
        this.queue = [];
    }

    push(X) {
        // Push element X to the back of queue.
        this.queue.push(X);
        return;
    }

    pop() {
        // Removes the element from in front of queue and returns that element.
        if (this.queue.length > 0)
            return this.queue.shift();
        return -1;
    }

    peek() {
        // Get the front element of the queue.
        if (this.queue.length > 0)
            return this.queue[0]
        return -1;
    }

    empty() {
        // Returns whether the queue is empty.
        return this.queue.length === 0;
    }
}
