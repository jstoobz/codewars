// Kata Link: https://codewars.com/kata/find-the-parity-outlier

function findOutlier(integers) {
  const even = integers.filter(el => el % 2 === 0);
  const odd = integers.filter(el => el % 2 !== 0);
  return even.length === 1 ? even[0] : odd[0];
}

let result = findOutlier([0, 1, 2]);
console.log(result);