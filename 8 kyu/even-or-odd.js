// Kata Link: https://www.codewars.com/kata/even-or-odd

function even_or_odd(number) {
  return (number % 2 === 0) ? 'Even' : 'Odd';
}

let result = even_or_odd(2);
console.log(result);