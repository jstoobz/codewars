// Kata Link: https://codewars.com/kata/leonardo-numbers

L = (n , L0 , L1 , add) => {
  let result = [L0, L1];
  for (let i = 2; i < n; i++) result.push(result[i - 1] + result[i - 2] + add);
  return result;
}

let result = L(5, 1, 1, 1);
console.log(result);