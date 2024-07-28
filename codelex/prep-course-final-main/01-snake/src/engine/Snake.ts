import {Cell} from "./Cell";
import {Direction} from "./Direction";

export class Snake {
    head: Cell = new Cell(2, 0);
    tail: Cell[] = [new Cell(0, 0), new Cell(1, 0)]
    direction: Direction = 'Right'

    setDirection(newDirection: Direction) {

    }

    move() {
        const oldHead = new Cell(this.head.x, this.head.y);
        this.tail.push(oldHead);
        this.tail.shift();
        this.head = new Cell(this.head.x++, 0)

        if (this.direction === 'Right') {
            this.head = new Cell(this.head.x++, this.head.y)
        } else if (this.direction === 'Down') {
            this.head = new Cell(this.head.x, this.head.y++)
        }

    }

    grow() {
    }

    getHead(): Cell {
        return new Cell(2, 0);
    }

    getDirection(): Direction {
        return this.direction;
    }

    getTail(): Cell[] {
        return;
    }

    isTakenBySnake(cell: Cell): boolean {
        return false;
    }
}
