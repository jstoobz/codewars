// Kata Link: https://codewars.com/kata/unique-in-order

const uniqueInOrder = (iterable) => {
  if (typeof iterable === 'string') iterable = iterable.split('');
  return iterable.filter((el, i, arr) => el !== arr[i + 1]);
};

console.log(uniqueInOrder('AAAABBBCCDAABBB'));