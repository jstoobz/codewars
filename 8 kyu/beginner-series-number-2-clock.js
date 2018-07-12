// Kata Link: https://codewars.com/kata/beginner-series-number-2-clock

function past(h, m, s){
  return (h * 3600 + m * 60 + s) * 1000;
}

let result = past(1,1,1);
console.log(result);