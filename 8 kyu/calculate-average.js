// Kata Link: https://codewars.com/kata/calculate-average

function find_average(array) {
  return array.reduce((acc, item) => acc + item, 0) / array.length;
}

let result = find_average([1,2,3]);
console.log(result);