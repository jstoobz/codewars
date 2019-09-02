// Kata Link: https://www.codewars.com/kata/bit-counting

var countBits = function(n) {
  return n.toString(2).split('').reduce((acc, el) => (el === '1') ? ++acc : acc , 0);
};

let result = countBits(1234);
console.log(result);