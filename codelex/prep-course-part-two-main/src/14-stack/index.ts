/**
 * Stack
 *
 * Create a stack data structure. The stack
 * should be a class with methods 'push', 'pop', and
 * 'peek'.  Adding an element to the stack should
 * store it until it is removed.
 *
 * Examples:
 * const s = new Stack();
 * s.push(1);
 * s.push(2);
 * s.pop(); // returns 2
 * s.pop(); // returns 1
 */

class Stack {

    stack: number[] = []; // liekam bez keyworda un bez let un const

    push(n: number) {
        this.stack.push(n);
    }

    pop() {
        return this.stack.pop(); //removes the last element from an array and returns that element
    }

    peek() {
        return this.stack[this.stack.length - 1];

    }
}

export {Stack};
