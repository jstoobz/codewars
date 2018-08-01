// Kata Link: https://codewars.com/kata/find-the-unique-number-1

const findUniq = (arr) => arr.find(el => arr.indexOf(el) === arr.lastIndexOf(el));

console.log(findUniq([3, 10, 3, 3, 3]));