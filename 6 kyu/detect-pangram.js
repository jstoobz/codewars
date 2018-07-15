// Kata Link: https://www.codewars.com/kata/detect-pangram

function isPangram(string) {
  return 'abcdefghijklmnopqrstuvwxyz'.split('').every(el => string.toLowerCase().indexOf(el) !== -1);
}

let result = isPangram('The quick brown fox jumps over the lazy dog.');
console.log(result);