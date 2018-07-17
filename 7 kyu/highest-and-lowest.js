// Kata Link: https://codewars.com/kata/highest-and-lowest

 function highAndLow(numbers){
  numbers = numbers.split(' ');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

let result = highAndLow('4 5 29 54 4 0 -214 542 -64 1 -3 6 -6');
console.log(result);