// Kata Link: https://codewars.com/kata/century-from-year

function century(year) {
  return Math.ceil(year / 100);
}

let result = century(1705);
console.log(result);