// Kata Link: https://codewars.com/kata/split-strings

const solution = (str) => `${str}_`.match(/../g);

console.log(solution('abcde'));