// Kata Link: https://www.codewars.com/kata/create-phone-number

const createPhoneNumber = (numbers) => {
  numbers = numbers.join('');
  return `(${numbers.substring(0, 3)}) ${numbers.substring(3, 6)}-${numbers.substring(6, 10)}`;
};

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));