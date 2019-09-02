// Kata Link: https://codewars.com/kata/offspring-traits

const bearFur = (bears) => {
  if(bears[0] === bears[1]) return bears[0];
  if(bears[0] === 'white' && bears[1] === 'black') return 'grey';
  if(bears[0] === 'black' && bears[1] === 'white') return 'grey';
  if(bears[0] === 'brown' && bears[1] === 'black') return 'dark brown';
  if(bears[0] === 'black' && bears[1] === 'brown') return 'dark brown';
  if(bears[0] === 'white' && bears[1] === 'brown') return 'light brown';
  if(bears[0] === 'brown' && bears[1] === 'white') return 'light brown';
  return 'unknown';
};

let result = bearFur(['brown', 'white']);
console.log(result);