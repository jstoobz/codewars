// Kata Link: http://www.codewars.com/kata/unpacking-arguments

const spread = (fn, args) => fn(...args);

const res = spread((x, y) => x + y, [1, 2]);
console.log(res);
