// Kata Link: https://codewars.com/kata/sub-array-elements-sum

const elementsSum = (arr, d = 0) => {
  return arr.reduce((acc, el, i) => {
    if (el[arr.length - 1 - i] === undefined) acc += d;
    else acc += el[arr.length - 1 - i];
    return acc;
  }, 0);
};

console.log(elementsSum([[3, 2, 1, 0], [4, 6, 5, 3, 2], [9, 8, 7, 4]]));
// console.log(elementsSum([[3, 2, 1, 0], [4, 6, 5, 3, 2], []], 5));