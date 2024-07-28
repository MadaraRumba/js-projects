export type XO = "X" | "O" | "-";

export class Game {
    cells: XO[] = ["-", "-", "-", "-", "-", "-", "-", "-", "-"]
    turn: XO = 'X';

    getCells(): XO[] {
        return this.cells;
    }

    getTurn(): XO {
        return this.turn;
    }

    getWinner(): XO | void {
        const cells = this.cells;
        // row

        if (cells[0] === cells[1] && cells[0] === cells[2]) {
            return this.cells[0]
        }
        if (cells[3] === cells[4] && cells[3] === cells[5]) {
            return this.cells[3]
        }
        if (cells[6] === cells[7] && cells[6] === cells[8]) {
            return this.cells[6]
        }

        // columns

        if (cells[0] === cells[3] && cells[0] === cells[6]) {
            return cells[0];
        }

        if (cells[1] === cells[4] && cells[1] === cells[7]) {
            return cells[1];
        }

        if (cells[2] === cells[5] && cells[2] === cells[8]) {
            return cells[2];
        }

        //diagonal
        if (cells[0] === cells[4] && cells[0] === cells[8]) {
            return cells[0];
        }

        if (cells[2] === cells[4] && cells[2] === cells[6]) {
            return cells[2];
        }
        return "-";
    }

    isGameFinished(): boolean {
        for (let i = 0; i < this.cells.length; i++) {
            console.log(i);
            if (this.cells[i] === '-') {
                console.log('false');
                return false;
            }
        }
        console.log('true');
        return true;
    }

    isTie(): boolean {
        return this.isGameFinished() && this.getWinner() === "-";
    }

    onClick(i: number): void {
        if (this.cells[i] === '-') {
            this.cells[i] = this.turn;
            if (this.turn === 'X') {
                this.turn = 'O';
            } else {
                this.turn = 'X';
            }
        }
    }
    restart(): void {
        this.cells = ["-", "-", "-", "-", "-", "-", "-", "-", "-"]
        this.turn = 'X';
    }

}
