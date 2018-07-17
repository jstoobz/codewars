// Kata Link: https://codewars.com/kata/exes-and-ohs

function XO(str) {
  return (str.match(/x/gi) || []).length === (str.match(/o/gi) || []).length;
}

let result = XO('xxOo');
console.log(result);