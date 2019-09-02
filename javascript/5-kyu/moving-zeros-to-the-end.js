// Kata Link: https://codewars.com/kata/moving-zeros-to-the-end

var moveZeros = function (arr) {
  return arr.filter(el => el !== 0).concat(arr.filter(el => el === 0));
}

let result = moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]);
console.log(result);