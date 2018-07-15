// Kata Link: https://codewars.com/kata/maze-runner

function mazeRunner(maze, directions) {
  let y = maze.findIndex(arr => arr.includes(2));
  let x = maze[y].indexOf(2);
  let curPos;

  for (let i = 0; i < directions.length; i++) {
    switch(directions[i]) {
      case "N": y--; break;
      case "S": y++; break;
      case "E": x++; break;
      case "W": x--; break;
    }

    if (!maze[y]) return 'Dead';
    curPos = maze[y][x];
    if (curPos === 3) return 'Finish';
    if (curPos === 1 || curPos === undefined || !maze[y]) return 'Dead';
  }

  return 'Lost';
}

let maze = [[1,1,1,1,1,1,1],
            [1,0,0,0,0,0,3],
            [1,0,1,0,1,0,1],
            [0,0,1,0,0,0,1],
            [1,0,1,0,1,0,1],
            [1,0,0,0,0,0,1],
            [1,2,1,0,1,0,1]];

let result = mazeRunner(maze,['N', 'N', 'N', 'N', 'N', 'E', 'E', 'E', 'E', 'E', 'W', 'W']);
console.log(result);