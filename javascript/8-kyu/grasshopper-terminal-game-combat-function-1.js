// Kata Link: https://codewars.com/kata/grasshopper-terminal-game-combat-function-1

function combat(health, damage) {
  return Math.max(0, health - damage);
}

let result = combat(100, 5);
console.log(result);