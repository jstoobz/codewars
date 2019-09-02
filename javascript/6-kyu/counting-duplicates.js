// Kata Link: https://codewars.com/kata/counting-duplicates

function duplicateCount(text) {
  return text.toLowerCase().split('').filter((el, i, arr) => {
    return arr.indexOf(el) !== i && arr.lastIndexOf(el) === i;
  }).length;
}

let result = duplicateCount('Indivisibilities');
console.log(result);