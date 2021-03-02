import Game from "../src/game";

describe('Game test', () => {
    it("should crate a game with a new board", () => {
        let game = Game();
        game.newGame();

        expect(game.getBoard().toEqual([["", "", ""], ["", "", ""], ["", "", ""]]));
    });
})
