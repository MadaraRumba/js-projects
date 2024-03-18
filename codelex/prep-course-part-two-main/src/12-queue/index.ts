/**
 * Queue
 *
 * Create a queue data structure. The queue
 * should be a class with methods 'add' and 'remove'.
 * Adding to the queue should store an element until
 * it is removed.
 *
 * Examples:
 * const q = new Queue();
 * q.add(1);
 * q.remove(); // returns 1
 */

class Queue {
    queue: number[] = [];

    add(n: number) { //funkcija
        this.queue.push(n);
    }

    remove() { // funkcija
        return this.queue.shift() //nonem pirmo elementu un atgriez iznemto
    }
}

export {Queue};
