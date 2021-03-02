export enum Play {
    O = "O",
    X = "X"
}

const board = () => {
    let grid = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ]

    const state = () => {
        return grid
    }

    const set = (x: number, y: number, play: Play) => {
        if (play == Play.O) {
            throw new Error("Illegal move")
        }

        grid[x][y] = play.toString();
    }

    return { state, set };
};

export default board;
