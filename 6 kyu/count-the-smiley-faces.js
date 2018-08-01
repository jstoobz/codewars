// Kata Link: https://www.codewars.com/kata/count-the-smiley-faces

const countSmileys = (arr) => arr.filter(el => /^[:;][-~]?[)D]$/.test(el)).length;

console.log(countSmileys([':)',':(',':D',':O',':;']));