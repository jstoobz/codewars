// Kata Link: https://codewars.com/kata/alphabet-war

function alphabetWar(fight) {
  let map = { 'w': -4, 'p': -3, 'b': -2, 's': -1, 'm': 4, 'q': 3, 'd': 2, 'z': 1 };
  let result = fight.split('').reduce((a, b) => a + (map[b] || 0), 0);
  return (result > 0) ? `Right side wins!` : (result < 0) ? `Left side wins!` : `Let's fight again!`;
}

let result = alphabetWar('zdqmwpbs');
console.log(result);