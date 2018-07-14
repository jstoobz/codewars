// Kata Link: https://codewars.com/kata/determine-offspring-sex-based-on-genes-xx-and-xy-chromosomes

function chromosomeCheck(sperm) {
  return sperm.includes('Y') ? `Congratulations! You're going to have a son.` : `Congratulations! You're going to have a daughter.`;
}

let result = chromosomeCheck('XY');
console.log(result);