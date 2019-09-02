// Kata Link: https://codewars.com/kata/convert-boolean-values-to-strings-yes-or-no

function boolToWord(bool){
  return (bool) ? 'Yes' : 'No';
}

let result = boolToWord(true);
console.log(result);