// Kata Link: https://www.codewars.com/kata/duplicate-encoder

const duplicateEncode = (word) =>
  word
    .toLowerCase()
    .split('')
    .map((el, _, arr) => arr.indexOf(el) === arr.lastIndexOf(el) ? '(' : ')')
    .join('');

console.log(duplicateEncode('recede'));