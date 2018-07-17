// Kata Link: https://codewars.com/kata/beginner-series-number-3-sum-of-numbers

function GetSum(a, b) {
  const range = Array.from(arguments).sort((a, b) => a > b);
  if (range[0] === range[1]) return range[0];

  let result = 0;
  for (let i = range[0]; i <= range[1]; i++) result += i;

  return result;
}

let result = GetSum(4, -2);
console.log(result);