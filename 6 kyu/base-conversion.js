// Kata Link: https://www.codewars.com/kata/base-conversion

const convert = (input, source, target) => {
  if (source === target) return input;

  let sourceVal = input.split('').reverse().reduce((acc, el, i) => {
    return acc + Math.pow(source.length, i) * source.indexOf(el);
  }, 0);

  if (sourceVal === 0) return target[0];

  let targetVal = '';

  while (sourceVal > 0) {
    targetVal += target[sourceVal % target.length];
    sourceVal = Math.floor(sourceVal / target.length);
  }

  return targetVal.split('').reverse().join('');
};

const Alphabet = {
  BINARY:        '01',
  OCTAL:         '01234567',
  DECIMAL:       '0123456789',
  HEXA_DECIMAL:  '0123456789abcdef',
  ALPHA_LOWER:   'abcdefghijklmnopqrstuvwxyz',
  ALPHA_UPPER:   'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA:         'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA_NUMERIC: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
};

const bin = Alphabet.BINARY, oct = Alphabet.OCTAL, dec = Alphabet.DECIMAL, hex = Alphabet.HEXA_DECIMAL,
    allow = Alphabet.ALPHA_LOWER, alup = Alphabet.ALPHA_UPPER, alpha = Alphabet.ALPHA, alnum = Alphabet.ALPHA_NUMERIC;

console.log(convert('15', dec, bin));