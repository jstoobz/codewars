// Kata Link: https://codewars.com/kata/grasshopper-terminal-game-move-function

function move (position, roll) {
  return position + roll * 2;
}

let result = move(3, 6);
console.log(result);