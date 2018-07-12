// Kata Link: https://www.codewars.com/kata/reversed-sequence

const reverseSeq = n => {
  return Array.from({ length: n }, (_, i) => n - i);
};

let result = reverseSeq(5);
console.log(result);