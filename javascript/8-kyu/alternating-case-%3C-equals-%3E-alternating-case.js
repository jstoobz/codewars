// Kata Link: https://www.codewars.com/kata/alternating-case-%3C-equals-%3E-alternating-case

String.prototype.toAlternatingCase = function () {
  return this.split('').map(el => el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase()).join('');
}

console.log('HELLO WORLD'.toAlternatingCase());