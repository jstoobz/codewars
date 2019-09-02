// Kata Link: https://codewars.com/kata/replace-with-alphabet-position

function alphabetPosition(text) {
  return text.toUpperCase().match(/[A-Z]/g).map((el) => el.charCodeAt() - 64).join(' ');
}

let result = alphabetPosition('The narwhal bacons at midnight.');
console.log(result);