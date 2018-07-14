// Kata Link: https://codewars.com/kata/remove-consecutive-duplicate-words

const removeConsecutiveDuplicates = s => s.split(' ').filter((el, i, arr) => el !== arr[i + 1]).join(' ');

let result = removeConsecutiveDuplicates('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta');
console.log(result);