// Kata Link: https://www.codewars.com/kata/beginner-series-number-1-school-paperwork

function paperwork(n, m) {
  return (n < 0 || m < 0) ? 0 : n * m;
}

let result = paperwork(5,5);
console.log(result);