// Kata Link: https://www.codewars.com/kata/convert-hash-to-an-array

const convertHashToArray = (hash) => {
  let arr = [];

  Object.keys(hash).sort().map(el => arr.push([el, hash[el]]));

  return arr;
};

console.log(convertHashToArray({name: 'Jeremy', age: 24, role: 'Software Engineer'}));