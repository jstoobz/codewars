// Kata Link: https://www.codewars.com/kata/get-the-middle-character

function getMiddle(s) {
  return (s.length % 2 === 0) ? s.substr(s.length / 2, 1) : s.substr((s.length / 2) - 1, 2);
}

let result = getMiddle('testing');
console.log(result);