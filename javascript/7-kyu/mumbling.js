// Kata Link: https://codewars.com/kata/mumbling

function accum(s) {
  return s.split('').map((el, i) => el.toUpperCase() + el.toLowerCase().repeat(i)).join('-');
}

let result = accum('abcd');
console.log(result);