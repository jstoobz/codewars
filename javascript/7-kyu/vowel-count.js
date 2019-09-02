// Kata Link: https://www.codewars.com/kata/vowel-count

function getCount(str) {
  return (str.match(/[aeiou]/gi) || []).length
}

let result = getCount('abracadabra');
console.log(result);