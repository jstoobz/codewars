// Kata Link: https://codewars.com/kata/find-the-missing-letter

const findMissingLetter = (array) => {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';

  if (array[0] === array[0].toUpperCase()) alphabet = alphabet.toUpperCase();

  return alphabet
    .slice(alphabet.indexOf(array[0]), alphabet.indexOf(array[0]) + array.length + 1)
    .split('')
    .filter(el => !array.includes(el))
    .toString();
}

console.log(findMissingLetter(['O','Q','R','S']));