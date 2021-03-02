import Board from "../src/board";

const game = () => {
    let board = Board();

    const newGame = () => {
        board = Board();
    }

    const getBoard = (): string[][] => {
        return board.state()
    }

    return { getBoard, newGame }
};

export default game;
