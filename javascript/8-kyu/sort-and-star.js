// Kata Link: https://codewars.com/kata/sort-and-star

function twoSort(s) {
  return s.sort()[0].split('').join('***');
}

let result = twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]);
console.log(result);