import Board from "../src/board";

describe('Board test', () => {
    it("should create an empty board", () => {
        let board = Board();
        expect(board.state()).toEqual([[null, null, null], [null, null, null], [null, null, null]]);
    });

    it("should create an empty board", () => {
        let board = Board();
        board.set(0, 0, "X")
        expect(board.state()).toEqual([["X", null, null], [null, null, null], [null, null, null]]);
    });
})
