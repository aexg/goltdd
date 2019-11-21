const pxsize = 5;
const fps = 2;
const color_background = "#FFFFFF";
const color_cellalive = "#0000FF";
var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");
var grid = createGrid();
var mirrorGrid = createGrid();


function drawGrid() {
    console.log("in drawGrid");
    ctx.fillStyle = color_background;
    ctx.fillRect(0, 0, pxsize * width, pxsize * height);
    ctx.fillStyle = color_cellalive;
    for (let i = 0; i < width; ++i) {
        for (let j = 1; j < height; ++j) {
            if (grid[i][j] == 1) {
                ctx.fillRect(pxsize * i, pxsize * j, pxsize, pxsize);
            }
        }
    }
}


function live() {
    let interval = Math.floor(1000 / fps);
    let timeend = Date.now() + interval;
    let timenow = Date.now();
    while (timenow < timeend) {
        timenow = Date.now();
    }

    let grids = updateGrid([grid, mirrorGrid]);
    grid = grids[0];
    mirrorGrid = grids[1];
    drawGrid();
    requestAnimationFrame(live);
}


// initGlider(grid);
initRandomly(grid);
live();
