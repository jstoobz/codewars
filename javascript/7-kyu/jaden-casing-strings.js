// Kata Link: https://codewars.com/kata/jaden-casing-strings

String.prototype.toJadenCase = function () {
  return this.split(' ').map(el => el[0].toUpperCase().concat(el.slice(1))).join(' ');
};

let str = `How can mirrors be real if our eyes aren't real`;
let result = str.toJadenCase()
console.log(result);