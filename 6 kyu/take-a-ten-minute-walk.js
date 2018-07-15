// Kata Link: https://codewars.com/kata/take-a-ten-minute-walk

function isValidWalk(walk) {
  const north = walk.filter(el => el === 'n').length;
  const south = walk.filter(el => el === 's').length;
  const east = walk.filter(el => el === 'e').length;
  const west = walk.filter(el => el === 'w').length;

  return walk.length === 10 && north === south && east === west;
}

let result = isValidWalk(['n','s','n','s','n','s','n','s','n','s']);
console.log(result);