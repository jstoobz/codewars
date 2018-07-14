// Kata Link: https://www.codewars.com/kata/get-the-mean-of-an-array

function getAverage(marks){
  return Math.floor(marks.reduce((acc, el) => acc + el, 0) / marks.length);
}

let result = getAverage([1,2,3,4,5]);
console.log(result);