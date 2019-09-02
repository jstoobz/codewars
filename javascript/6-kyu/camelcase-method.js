// Kata Link: https://www.codewars.com/kata/camelcase-method

String.prototype.camelCase = function() {
  return !this.trim() ? '' : this.trim().split(' ').map(el => el[0].toUpperCase().concat(el.slice(1))).join('');
}

console.log('camel case method'.camelCase());