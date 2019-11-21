const height = 100;
const width = 100;

function createGrid() {
    result = [];
    for (let i = 0; i < height; ++i) {
        result[i] = [];
        for (let j = 0; j < width; ++j) {
            result[i][j] = 0;
        }
    }
    return result;
}


function initBlinker(grid) {
    grid[2][1] = 1;
    grid[2][2] = 1;
    grid[2][3] = 1;
}


function initGlider(grid) {
    grid[3][2] = 1;
    grid[4][3] = 1;
    grid[2][4] = 1;
    grid[3][4] = 1;
    grid[4][4] = 1;
}


function initRandomly(grid) {
    for (let i = 0; i < width; ++i) {
        for (let j = 0; j < height; ++j) {
            grid[i][j] = Math.round(Math.random());
        }
    }
}


function updateGrid(grids) {
    grid = grids[0];
    mirrorGrid = grids[1];
    for (let i = 0; i < width; ++i) {
        grid[i][0] = 0;
        grid[i][height - 1] = 0;
    }

    for( let i = 0; i < height; ++i){
        grid[0][i] = 0;
        grid[width - 1][i] = 0;
    }


        for (let i = 1; i < width - 1; ++i) {
        for (let j = 1; j < height - 1; ++j) {
            let sum = 0;
            sum += grid[i - 1][j - 1];
            sum += grid[i][j - 1];
            sum += grid[i + 1][j - 1];
            sum += grid[i - 1][j];
            sum += grid[i + 1][j];
            sum += grid[i - 1][j + 1];
            sum += grid[i][j + 1];
            sum += grid[i + 1][j + 1];

            switch (sum) {
                case 2:
                    mirrorGrid[i][j] = grid[i][j];
                    break;
                case 3:
                    mirrorGrid[i][j] = 1;
                    break;
                default:
                    mirrorGrid[i][j] = 0;
            }
        }
    }

    var temp = grid;
    grids[0] = mirrorGrid;
    grids[1] = temp;

    return grids;
}


module.exports = { createGrid, updateGrid, initBlinker, initGlider, initRandomly };
