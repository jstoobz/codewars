// Kata Link: https://codewars.com/kata/decode-the-morse-code

decodeMorse = function(morseCode){
  return morseCode.trim().split(' ').map(el => MORSE_CODE[el] || ' ').join('').replace(/\s+/g, ' ');
}

let result = decodeMorse('.... . -.--   .--- ..- -.. .');
console.log(result);