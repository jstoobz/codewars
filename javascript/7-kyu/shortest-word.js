// Kata Link: https://codewars.com/kata/shortest-word

function findShort(s) {
  return s.split(' ').reduce((acc, item) => Math.min(acc, item.length), Infinity);
}

let result = findShort('turns out random test cases are easier than writing out basic ones');
console.log(result);