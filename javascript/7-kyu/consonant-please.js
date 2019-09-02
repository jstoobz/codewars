// Kata Link: https://codewars.com/kata/consonant-please

const sortLetters = (arr) => {
  let merged = arr.reduce((acc, el) => acc = [...acc, ...el], []).join('').toUpperCase();
  return [merged.match(/[aeiou]/gi) || [], merged.match(/[^aeiou\d]/gi || [])];
};

console.log(sortLetters([[1,'a','H'],[3,'o','s'],[4,'E','i']]));