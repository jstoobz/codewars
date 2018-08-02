// Kata Link: https://codewars.com/kata/highest-scoring-word

const high = (x) => {
  let words = x.split(/[^a-z]+/);
  let scores = words.map(el => [...el].map(a => a.charCodeAt(0) - 96).reduce((acc, el) => acc + el, 0));
  return words[scores.indexOf(Math.max(...scores))];
};

console.log(high('what time are we climbing up the volcano'));