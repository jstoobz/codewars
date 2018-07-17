// Kata Link: https://codewars.com/kata/sum-of-digits-slash-digital-root

function digital_root(n) {
  n = n.toString().split('').reduce((acc, el) => acc + +el, 0);
  return (n < 10) ? n : digital_root(n);
}

let result = digital_root(132189);
console.log(result);