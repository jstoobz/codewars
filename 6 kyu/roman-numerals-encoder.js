// Kata Link: https://codewars.com/kata/roman-numerals-encoder

function solution(number){
  let romanStr = '';
  let key = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90,
    L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1};

  for (let property in key) {
    while (number >= key[property]) {
      romanStr += property;
      number -= key[property];
    }
  }

  return romanStr;
}

let result = solution(22);
console.log(result);