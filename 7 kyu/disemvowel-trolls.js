// Kata Link: https://codewars.com/kata/disemvowel-trolls

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}

let result = disemvowel('This website is for losers LOL!');
console.log(result);