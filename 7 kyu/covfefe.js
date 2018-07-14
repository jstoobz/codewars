// Kata Link: https://codewars.com/kata/covfefe

function covfefe(str){
  return str.match(/coverage/gi) ? str.replace(/coverage/gi, 'covfefe') : `${str} covfefe`;
}

let result = covfefe('coverage coverage');
console.log(result);