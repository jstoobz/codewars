// Kata Link: https://codewars.com/kata/give-me-a-diamond

const diamond = (n) => {
  if (n % 2 === 0 || n < 0) return null;

  let result = [];

  for (let i = n, space = 0; i >= 1; i -= 2, space += 1) {
    result.push(' '.repeat(space) + '*'.repeat(i) + '\n');
    if (i < n) result.unshift(' '.repeat(space) + '*'.repeat(i) + '\n');
  }

  return result.join('');
};

console.log(diamond(3));