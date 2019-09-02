// Kata Link: https://codewars.com/kata/array-helpers

Array.prototype.square = function() { return this.map(el => Math.pow(el, 2)); }
Array.prototype.cube = function() { return this.map(el => Math.pow(el, 3)); }
Array.prototype.average = function() { return this.reduce((acc, el) => acc + el, 0) / this.length; }
Array.prototype.sum = function() { return this.reduce((acc, el) => acc + el, 0); }
Array.prototype.even = function() { return this.filter(el => el % 2 === 0); }
Array.prototype.odd = function() { return this.filter(el => el % 2 === 1); }

let numbers = [1, 2, 3, 4, 5];

console.log(numbers.square());
console.log(numbers.cube());
console.log(numbers.average());
console.log(numbers.sum());
console.log(numbers.even());
console.log(numbers.odd());