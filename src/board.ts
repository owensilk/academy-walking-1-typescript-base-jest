export enum Play {
    O = "O",
    X = "X"
}

const board = () => {
    const emptyGrid = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ]

    let grid = JSON.parse(JSON.stringify(emptyGrid));

    let lastPlay = "";

    const state = () => {
        return grid
    }

    const gridIsEmpty = () => {
        return JSON.stringify(grid) === JSON.stringify(emptyGrid);
    }

    const set = (x: number, y: number, play: Play) => {
        if (gridIsEmpty() && play === Play.O.toString()) {
            throw new Error("Illegal move")
        }

        if (lastPlay == Play.O.toString()) {
            throw new Error("Next move should be X")
        }

        grid[x][y] = play.toString();
        lastPlay = play
    }

    return { state, set };
};

export default board;
