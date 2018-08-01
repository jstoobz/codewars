// Kata Link: https://www.codewars.com/kata/sort-the-odd

const sortArray = (arr) => {
  let idx = arr.map((el, i) => el % 2 === 1 ? i : '').filter(el => el !== '');
  let odds = arr.filter(el => el % 2 === 1).sort((a, b) => a - b);

  for(let i = 0; i < idx.length; i++) arr[idx[i]] = odds[i];

  return arr;
};

console.log(sortArray([5, 3, 2, 8, 1, 4]));