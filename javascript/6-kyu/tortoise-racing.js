// Kata Link: https://www.codewars.com/kata/tortoise-racing

const race = (v1, v2, g) => {
  const time = g / (v2 - v1);
  return v1 > v2 ? null : [Math.trunc(time), Math.trunc((time * 60) % 60), Math.trunc((time * 3600) % 60)];
};

console.log(race(720, 850, 70));