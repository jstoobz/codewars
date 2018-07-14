// Kata Link: https://www.codewars.com/kata/fake-binary

function fakeBin(x){
  return x.replace(/\d/g, el => el < 5 ? 0 : 1);
}

let result = fakeBin('45385593107843568');
console.log(result);