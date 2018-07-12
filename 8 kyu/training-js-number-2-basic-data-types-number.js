// Kata Link: https://codewars.com/kata/training-js-number-2-basic-data-types-number

let v1 = 50;
let v2 = 100;
let v3 = 150;
let v4 = 200;
let v5 = 2;
let v6 = 250;

function equal1(){
  return v1 + v1;
}

function equal2(){
  return v4 - v2;
}

function equal3(){
  return v1 * v5;
}

function equal4(){
  return v4 / v5;
}

function equal5(){
  return v6 % v3;
}

let result = (
  equal1() === 100 &&
  equal2() === 100 &&
  equal3() === 100 &&
  equal4() === 100 &&
  equal5() === 100);
console.log(result);