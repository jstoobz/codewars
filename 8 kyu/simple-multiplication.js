// Kata Link: https://codewars.com/kata/simple-multiplication

function simpleMultiplication(number) {
  return (number % 2 === 0) ? number * 8 : number * 9;
}

let result = simpleMultiplication(8);
console.log(result);