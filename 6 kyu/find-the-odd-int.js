// Kata Link: https://codewars.com/kata/find-the-odd-int

function findOdd(A) {
  return A.reduce((a, b) => a ^ b);
}

let result = findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]);
console.log(result);