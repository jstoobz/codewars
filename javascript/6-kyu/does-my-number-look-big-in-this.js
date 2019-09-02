// Kata Link: https://codewars.com/kata/does-my-number-look-big-in-this

const narcissistic = (value) => {
  let n = value.toString().split('').map(Number);
  let sumPower = n.reduce((acc, el) => acc += Math.pow(el, n.length), 0);
  return value === sumPower;
};

console.log(narcissistic(371));