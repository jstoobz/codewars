// Kata Link: https://www.codewars.com/kata/break-camelcase

const solution = (string) => string.replace(/[A-Z]/g, ' $&');

console.log(solution('camelCasing'));