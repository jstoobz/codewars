// Kata Link: https://codewars.com/kata/ball-upwards

function maxBall(v0) {
  v0 *= 1000 / 360;
  const g = 9.81;
  return Math.round(v0 / g);
}

let result = maxBall(99);
console.log(result);