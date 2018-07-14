// Kata Link: https://codewars.com/kata/sum-of-two-lowest-positive-integers

function sumTwoSmallestNumbers(numbers) {
  let [a, b] = numbers.sort((a, b) => a - b);
  return a + b;
}

let result = sumTwoSmallestNumbers([52, 76, 14, 12, 4]);
console.log(result);