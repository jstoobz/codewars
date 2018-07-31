// Kata Link: https://codewars.com/kata/every-possible-sum-of-two-digits

const digits = (num) => {
  let result = [];
  num = num.toString();

  for (let i = 0; i < num.length; i++)
    for (let j = i + 1; j < num.length; j++)
      result.push(+num[i] + +num[j])

  return result;
};

console.log(digits(156));