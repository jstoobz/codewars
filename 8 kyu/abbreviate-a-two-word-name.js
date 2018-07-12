// Kata Link: https://www.codewars.com/kata/abbreviate-a-two-word-name

function abbrevName(name){
  return name.split(' ').map(el => el[0].toUpperCase()).join('.');
}

let result = abbrevName('Sam Harris');
console.log(result);