// Kata Link: https://codewars.com/kata/find-the-next-perfect-square

function findNextSquare(sq) {
  return (Number.isInteger(Math.sqrt(sq))) ? (Math.sqrt(sq) + 1) ** 2 : -1;
}

let result = findNextSquare(121);
console.log(result);