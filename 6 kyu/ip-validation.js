// Kata Link: https://codewars.com/kata/ip-validation

const isValidIP = (str) => /^\d+.\d+.\d+.\d+$/.test(str) && str.split('.').every(cv => +cv < 256);

console.log(isValidIP('123.45.67.89'));