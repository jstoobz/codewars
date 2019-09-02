// Kata Link: https://codewars.com/kata/youre-a-square

var isSquare = function(n){
  return (Math.sqrt(n) % 1 === 0);
}

let result = isSquare(25);
console.log(result);