// Kata Link: https://www.codewars.com/kata/bumps-in-the-road

function bump(x) {
  return (x.match(/n/gi) || []).length > 15 ? `Car Dead` : `Woohoo!`;
}

let result = bump('_nnnnnnn_n__n______nn__nn_nnn');
console.log(result);