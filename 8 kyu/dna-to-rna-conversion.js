// Kata Link: https://codewars.com/kata/dna-to-rna-conversion

const DNAtoRNA = (dna) => {
  return dna.replace(/T/gi, 'U');
};

console.log(DNAtoRNA('TTTT'));