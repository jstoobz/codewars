// Kata Link: https://codewars.com/kata/iq-test

const iqTest = (numbers) => {
  const numArr = numbers.split(' ').map(el => +el);
  const even = numArr.filter(el => el % 2 === 0);
  const odd = numArr.filter(el => el % 2 === 1);

  return even.length < odd.length ? numArr.indexOf(even[0]) + 1 : numArr.indexOf(odd[0]) + 1;
};

console.log(iqTest('2 4 7 8 10'));