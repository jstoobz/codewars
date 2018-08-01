// Kata Link: https://codewars.com/kata/take-a-number-and-sum-its-digits-raised-to-the-consecutive-powers-and-dot-dot-dot-eureka

const sumDigPow = (a, b) => {
  let result = [];

  for (let i = a; i < b; i++) {
    const num = String(i).split('').reduce((acc, el, i) => acc + el ** (i + 1), 0);
    if (num === i) result.push(i);
  }

  return result;
};

console.log(sumDigPow(1, 100));