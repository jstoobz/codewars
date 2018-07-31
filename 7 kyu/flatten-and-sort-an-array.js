// Kata Link: https://codewars.com/kata/flatten-and-sort-an-array

const flattenAndSort = (arr) => {
  return arr.reduce((acc, el) => [...acc, ...el], []).sort((a, b) => a - b);
};

console.log(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]));