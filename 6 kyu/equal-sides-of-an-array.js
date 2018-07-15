// Kata Link: https://codewars.com/kata/equal-sides-of-an-array

function findEvenIndex(arr) {
  return arr.findIndex((el, i, arr) => arr.slice(0, i).reduce((acc, el) => acc + el, 0) === arr.slice(i + 1).reduce((acc, el) => acc + el, 0));
}

let result = findEvenIndex([1,2,3,4,3,2,1]);
console.log(result);