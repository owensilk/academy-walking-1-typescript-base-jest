import Board, { Play } from "../src/board";

describe('Board test', () => {
    it("should create an empty board", () => {
        let board = Board();
        expect(board.state()).toEqual([["", "", ""], ["", "", ""], ["", "", ""]]);
    });

    it("should make the move based on x, y coordinates", () => {
        let board = Board();
        board.set(0, 0, Play.X)
        expect(board.state()).toEqual([["X", "", ""], ["", "", ""], ["", "", ""]]);
    });

    it("should raise an error if the first move is not X", () => {
        let board = Board();
        expect(() => board.set(1, 2, Play.O)).toThrow(new Error("Illegal move"))
    });

    it("should make the multiple plays when the first move is X", () => {
        let board = Board();
        board.set(0, 0, Play.X)
        board.set(0, 1, Play.O)
        expect(board.state()).toEqual([["X", "O", ""], ["", "", ""], ["", "", ""]]);
    });

    it("should raise an error if the coordinate has already been played", () => {
        let board = Board();
        board.set(0, 0, Play.X)
        board.set(0, 1, Play.O)
        expect(() => board.set(0, 2, Play.O)).toThrow(new Error("Next move should be X"))
    });
})
