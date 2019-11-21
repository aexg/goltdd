const { createGrid, updateGrid, initBlinker, initGlider, initRandomly } = require("../docs/gol_engine");

test('Can create a grid', () => {
  var grid = createGrid();

  expect(grid[0][0]).toBe(0);
});


test('Can create a blinker', () => {
  var grid = createGrid();

  initBlinker(grid);

  expect(grid[2][1]).toBe(1);
  expect(grid[2][2]).toBe(1);
  expect(grid[2][3]).toBe(1);
});

test('Can create a glider', () => {
  var grid = createGrid();

  initGlider(grid);

  expect(grid[3][2]).toBe(1);
  expect(grid[4][3]).toBe(1);
  expect(grid[2][4]).toBe(1);
  expect(grid[3][4]).toBe(1);
  expect(grid[4][4]).toBe(1);
});



test('Initialize population randomly', () => {
  var grid = createGrid();

  initRandomly(grid);

  expect(grid[0][0]).toBeGreaterThanOrEqual(0);
});


test('Cell with 3 alive neighbors is born', () => {
  let grid = createGrid();
  let mirrorGrid = createGrid();
  let grids = [grid, mirrorGrid];
  initBlinker(grid);

  grids = updateGrid(grids);

  grid = grids[0];
  expect(grid[1][2]).toBe(1);
  expect(grid[3][2]).toBe(1);
});
