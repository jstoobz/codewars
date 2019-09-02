// Kata Link: https://www.codewars.com/kata/descending-order

function descendingOrder(n){
  return +n.toString().split('').sort((a, b) => b - a).join('');
}

let result = descendingOrder(123456789);
console.log(result);