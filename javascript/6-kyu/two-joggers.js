// Kata Link: https://www.codewars.com/kata/two-joggers

const nbrOfLaps = (x, y) => {
  let lcm = x;
  while (lcm % y != 0) lcm += x;
  return [lcm / x, lcm / y];
};

console.log(nbrOfLaps(5, 3));