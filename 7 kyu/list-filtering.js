// Kata Link: https://codewars.com/kata/list-filtering

function filter_list(l) {
  return l.filter(el => typeof el === 'number');
}

let result = filter_list([1,2,'aasf','1','123',123]);
console.log(result);