// Kata Link: https://codewars.com/kata/removing-elements

function removeEveryOther(arr){
  return arr.filter((_, i) => i % 2 === 0);
}

let result = removeEveryOther(['Hello', 'Goodbye', 'Hello Again']);
console.log(result);