// Kata Link: https://codewars.com/kata/predict-your-age

function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  return Math.floor(Math.sqrt(Array.from(arguments).reduce((acc, el) => {
    acc += el * el;
    return acc;
  }, 0)) / 2);
}

console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45));