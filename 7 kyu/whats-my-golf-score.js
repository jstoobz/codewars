// Kata Link: https://codewars.com/kata/whats-my-golf-score

function golfScoreCalculator(parList, scoreList){
  parList = parList.split('').map(Number).reduce((a, b) => a + b);
  scoreList = scoreList.split('').map(Number).reduce((a, b) => a + b);
  return scoreList - parList;
}

let result = golfScoreCalculator('443454444344544443', '353445334534445344');
console.log(result);