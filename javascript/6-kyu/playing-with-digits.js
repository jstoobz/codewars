// Kata Link: https://codewars.com/kata/playing-with-digits

function digPow(n, p){
  let result = n.toString().split('').reduce((acc, el, i) => acc + Math.pow(el, i + p), 0);
  return result % n === 0 ? result / n : -1;
}

let result = digPow(46288, 3);
console.log(result);