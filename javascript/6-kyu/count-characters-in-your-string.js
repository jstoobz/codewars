// Kata Link: https://www.codewars.com/kata/count-characters-in-your-string

const count = (string) => {
  return string.split('').reduce((acc, el) => {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, {});
};

console.log(count('abadeeedf'));