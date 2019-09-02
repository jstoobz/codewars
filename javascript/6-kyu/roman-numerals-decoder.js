// Kata Link: https://www.codewars.com/kata/roman-numerals-decoder

const solution = (roman) => {
  const map = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90,
    L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };

  return roman.split('').reduce((acc, el, i) => {
    if (map[el] < map[roman[i + 1]]) acc -= map[el]
    else acc += map[el]
    return acc;
  }, 0);
};

console.log(solution('XXI'));
console.log(solution('IV'));