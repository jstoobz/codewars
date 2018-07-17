// Kata Link: https://codewars.com/kata/square-every-digit

function squareDigits(num){
  return +num.toString().split('').map(el => Math.pow(+el, 2)).join('');
}

let result = squareDigits(9119);
console.log(result);