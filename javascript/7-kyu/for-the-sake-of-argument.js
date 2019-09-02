// Kata Link: http://www.codewars.com/kata/for-the-sake-of-argument

const numbers = (...args) => !args.filter(el => typeof el !== 'number').length;

const res = numbers(1, 2, 3, 4);
console.log(res);
