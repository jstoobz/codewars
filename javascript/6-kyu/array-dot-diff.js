// Kata Link: https://codewars.com/kata/array-dot-diff

function array_diff(a, b) {
  return a.filter(el => !b.includes(el));
}

let result = array_diff([3, 4], [3]);
console.log(result);