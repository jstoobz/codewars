// Kata Link: https://codewars.com/kata/which-are-in

function inArray(array1,array2){
  return array1.filter(word => array2.some(word2 => word2.includes(word))).sort();
}

let a1 = ['xyz', 'live', 'strong']
let a2 = ['lively', 'alive', 'harp', 'sharp', 'armstrong']
let result = inArray(a1, a2);
console.log(result);