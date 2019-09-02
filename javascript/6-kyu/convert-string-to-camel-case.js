// Kata Link: https://www.codewars.com/kata/convert-string-to-camel-case

const toCamelCase = (str) => {
  return str.replace(/-|_/g, ' ').split(' ').map((el, i) => {
      return (i === 0) ? el : el[0].toUpperCase().concat(el.slice(1));
  }).join('');
};

console.log(toCamelCase('the_stealth_warrior'));