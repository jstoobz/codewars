// Kata Link: https://codewars.com/kata/grasshopper-terminal-game-turn-function

function doTurn () {
  rollDice();
  move();
  combat();
  getCoins();
  buyHealth();
  printStatus();
}