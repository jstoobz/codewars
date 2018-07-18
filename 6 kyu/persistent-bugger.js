// Kata Link: https://www.codewars.com/kata/persistent-bugger

function persistence(num) {
  if (num < 10) return 0;
  let count = 0;
  let result = num;

  while (result >= 10) {
    result = result.toString().split('').reduce((a, b) => +a * +b, 1);
    count++;
  }

  return count;
}

let result = persistence(39);
console.log(result);