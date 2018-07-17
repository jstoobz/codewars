// Kata Link: https://codewars.com/kata/stop-gninnips-my-sdrow

function spinWords(str){
  return str.split(' ').map(el => (el.length >= 5) ? el.split('').reverse().join('') : el).join(' ');
}

let result = spinWords('Hey fellow warriors');
console.log(result);