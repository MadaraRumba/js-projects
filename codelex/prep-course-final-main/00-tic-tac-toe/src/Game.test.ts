import {Game} from "./Game";

describe("Tic-Tac-Toe", () => {
    it("should start with a blank state", () => {
        const game = new Game();

        expect(game.getCells()).toEqual([
            "-", "-", "-",
            "-", "-", "-",
            "-", "-", "-"
        ]);
        expect(game.getTurn()).toBe("X");
        expect(game.getWinner()).toBe("-");
        expect(game.isTie()).toBe(false);
    });
});

describe("Tic-Tac-Toe", () => {
    it("should place players value on the clicked cell", () => {
        const game = new Game();

        game.onClick(0);
        game.onClick(1);
        game.onClick(2)

        expect(game.getCells()).toEqual([
            "X", "O", "X",
            "-", "-", "-",
            "-", "-", "-"
        ]);
        expect(game.getTurn()).toBe("O");
        expect(game.getWinner()).toBe("-");
        expect(game.isTie()).toBe(false);
    });
});

    describe("Tic-Tac-Toe", () => {
        it("should define a winner", () => {
            const game = new Game();

            game.onClick(0);
            game.onClick(3);
            game.onClick(1);
            game.onClick(4);
            game.onClick(2);


            expect(game.getCells()).toEqual([
                "X", "X", "X",
                "O", "O", "-",
                "-", "-", "-"
            ]);

            expect(game.getWinner()).toBe("X");
            expect(game.isTie()).toBe(false)
        });
    });

describe("Tic-Tac-Toe", () => {
    it("should declare if the game is a tie", () => {
        const game = new Game();

        game.onClick(0);
        game.onClick(1);
        game.onClick(2);
        game.onClick(3);
        game.onClick(5);
        game.onClick(4);
        game.onClick(6);
        game.onClick(8);
        game.onClick(7);


        expect(game.getCells()).toEqual([
            "X", "O", "X",
            "O", "O", "X",
            "X", "X", "O"
        ]);
        expect(game.getWinner()).toBe('-');
        expect(game.isTie()).toBe(true);
    });
});

describe("Tic-Tac-Toe", () => {
    it("should check if game is finished", () => {
        const game = new Game();

        game.onClick(0);
        game.onClick(1);
        game.onClick(2);
        game.onClick(3);
        game.onClick(5);
        game.onClick(4);
        game.onClick(6);
        game.onClick(8);
        game.onClick(7);


        expect(game.getCells()).toEqual([
            "X", "O", "X",
            "O", "O", "X",
            "X", "X", "O"
        ]);
        expect(game.getWinner()).toBe('-');
        expect(game.isTie()).toBe(true);
        expect(game.isGameFinished()).toBe(true)
    });
});

describe("Tic-Tac-Toe", () => {
    it("should reset the game", () => {
        const game = new Game();
        game.restart();

        expect(game.getCells()).toEqual([
            "-", "-", "-",
            "-", "-", "-",
            "-", "-", "-"
        ]);
        expect(game.getTurn()).toBe("X");
        expect(game.getWinner()).toBe('-');
        expect(game.isTie()).toBe(false);
    });
});

describe("Tic-Tac-Toe", () => {
    it("should check if game finished", () => {
        const game = new Game();
        game.onClick(0);

        expect(game.getCells()).toEqual([
            "X", "-", "-",
            "-", "-", "-",
            "-", "-", "-"
        ]);
        expect(game.isGameFinished()).toBe(false);
    });
});