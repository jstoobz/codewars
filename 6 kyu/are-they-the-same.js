// Kata Link: https://codewars.com/kata/are-they-the-same

const comp =(array1, array2) => {
  if (!array1 || !array2) return false;

  const a1 = array1.map(el => Math.pow(el, 2)).sort((a, b) => a - b);
  const a2 = array2.sort((a, b) => a - b);

  return JSON.stringify(a1) === JSON.stringify(a2);
};

let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
let a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];

console.log(comp(a1, a2));