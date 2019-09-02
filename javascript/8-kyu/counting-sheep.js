// Kata Link: https://www.codewars.com/kata/counting-sheep-dot-dot-dot

function countSheeps(arrayOfSheep) {
  return arrayOfSheep.filter(Boolean).length;
}

let array1 = [true,  true,  true,  false,
              true,  true,  true,  true ,
              true,  false, true,  false,
              true,  false, false, true ,
              true,  true,  true,  true ,
              false, false, true,  true ];

let result = countSheeps(array1);
console.log(result);