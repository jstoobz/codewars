// Kata Link: https://codewars.com/kata/multiples-of-3-or-5

function solution(number) {
  let multiples = [];
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) multiples.push(i);
  }
  return multiples.reduce((acc, el) => acc + el, 0);
}

let result = solution(10);
console.log(result);