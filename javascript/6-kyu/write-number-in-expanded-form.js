// Kata Link: https://codewars.com/kata/write-number-in-expanded-form

const expandedForm = (num) => [...num.toString()].reverse().map((el, i) => el * Math.pow(10, i)).filter(el => el > 0).reverse().join(' + ');

console.log(expandedForm(70304));