// Kata Link: https://codewars.com/kata/weird-string-case

const toWeirdCase = (string) => {
  return string.split(' ').map(el => {
    return el.split('').map((el, i) => {
      return (i % 2 === 0) ? el.toUpperCase() : el.toLowerCase();
    }).join('');
  }).join(' ');
};

console.log(toWeirdCase('This is a test'));