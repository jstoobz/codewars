// Kata Link: https://www.codewars.com/kata/complementary-dna

function DNAStrand(dna){
  let key = { A: 'T', T: 'A', C: 'G', G: 'C' };
  return dna.split('').map(el => key[el]).join('');
}

let result = DNAStrand('ATTGC');
console.log(result);