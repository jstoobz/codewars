// Kata Link: https://codewars.com/kata/if-you-cant-sleep-just-count-sheep

var countSheep = function (num){
  return Array.from({ length: num }, (_, i) => `${i + 1} sheep...`).join('');
}

let result = countSheep(3);
console.log(result);