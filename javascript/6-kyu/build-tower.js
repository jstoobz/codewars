// Kata Link: https://codewars.com/kata/build-tower

const towerBuilder = (n) => {
  return [...Array(n)].map((_, i) => ' '.repeat(n - i - 1) + '*'.repeat(i * 2 + 1) + ' '.repeat(n - i - 1));
}

console.log(towerBuilder(3));