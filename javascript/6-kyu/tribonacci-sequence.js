// Kata Link: https://www.codewars.com/kata/tribonacci-sequence

const tribonacci = (signature, n) => {
  for (let i = 0; i < n - 3; i++)
    signature.push(signature[i] + signature[i + 1] + signature[i + 2]);

  return signature.slice(0, n);
};

console.log(tribonacci([0, 0, 1], 10));