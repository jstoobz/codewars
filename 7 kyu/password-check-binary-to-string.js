// Kata Link: https://codewars.com/kata/password-check-binary-to-string

const decodePass = (passArr, bin) => {
  let password =  bin.split(' ').reduce((acc, el) => acc + String.fromCharCode(parseInt(el, 2)), '');
  return passArr.includes(password) ? password : false;
};

console.log(decodePass(['password123', 'admin', 'admin1'], '01110000 01100001 01110011 01110011 01110111 01101111 01110010 01100100 00110001 00110010 00110011'));