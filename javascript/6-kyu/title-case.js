// Kata Link: https://codewars.com/kata/title-case

const titleCase = (title, minorWords = '') => {
  return !title.trim() ? '' : title.toLowerCase().split(' ').map((el, i) => {
    return (!minorWords.toLowerCase().split(' ').includes(el) || i === 0) ? el[0].toUpperCase().concat(el.slice(1)) : el;
  }).join(' ');
};

console.log(titleCase('a clash of KINGS', 'a an the of'));