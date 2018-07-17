// Kata Link: https://www.codewars.com/kata/is-this-a-triangle

function isTriangle(a, b, c) {
  let max = Math.max(a, b, c);
  let sum = a + b + c;
  return sum - max > max;
}

let result = isTriangle(1, 2, 2);
console.log(result);