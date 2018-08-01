// Kata Link: https://www.codewars.com/kata/delete-occurrences-of-an-element-if-it-occurs-more-than-n-times

const deleteNth = (arr, n) => {
  let cache = {};

  return arr.filter(el => {
    cache[el] = (cache[el] || 0) + 1;
    return cache[el] <= n;
  });
};

console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3));