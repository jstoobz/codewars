// Kata Link: https://codewars.com/kata/correct-the-mistakes-of-the-character-recognition-software

function correct(string) {
  const corrections = { 5: 'S', 0: 'O', 1: 'I' };
  return string.replace(/[501]/g, char => corrections[char]);
}

let result = correct("51NGAP0RE");
console.log(result);