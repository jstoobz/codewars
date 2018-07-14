// Kata Link: https://codewars.com/kata/by-3-or-not-by-3-that-is-the-question

function divisibleByThree(str){
  return (str.split('').reduce((a, b) => a + +b, 0) % 3 === 0);
}

let result = divisibleByThree('19254');
console.log(result);