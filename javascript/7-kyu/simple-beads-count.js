// Kata Link: https://codewars.com/kata/simple-beads-count

const countRedBeads = (n) => n <= 1 ? 0 : n * 2 - 2;

console.log(countRedBeads(5));