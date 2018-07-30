// Kata Link: https://codewars.com/kata/sum-of-positive

const positiveSum = (arr) => {
  return arr.reduce((acc, el) => {
    if (el > 0) acc += el;
    return acc;
  }, 0);
};

console.log(positiveSum([1, 2, 3, 4, 5]));