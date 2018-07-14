// Kata Link: https://codewars.com/kata/minimize-sum-of-array-array-series-number-1

function minSum(arr) {
  return arr.sort((a, b) => a - b).reduce((acc, el, i, arr) => acc + el * arr[arr.length - i - 1] , 0) / 2;
}

let result = minSum([5,4,2,3]);
console.log(result);