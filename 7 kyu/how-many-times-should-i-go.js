// Kata Link: https://codewars.com/kata/how-many-times-should-i-go

function howManyTimes(annual_price, individual_price) {
  return Math.ceil(annual_price / individual_price);
}

let result = howManyTimes(40,15);
console.log(result);