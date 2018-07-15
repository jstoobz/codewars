// Kata Link: https://codewars.com/kata/product-of-consecutive-fib-numbers

function productFib(prod){
  let [n, nPlus] = [0, 1];
  while (n * nPlus < prod) [n, nPlus] = [nPlus, n + nPlus];
  return [n, nPlus, n * nPlus === prod];
}

let result = productFib(4895);
console.log(result);