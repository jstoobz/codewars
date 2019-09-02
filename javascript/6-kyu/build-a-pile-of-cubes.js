// Kata Link: https://codewars.com/kata/build-a-pile-of-cubes

const findNb = (m) => {
  let sum = 0;
  let n = 0;

  while (sum < m) {
    n++;
    sum += Math.pow(n, 3);
  }

  return sum === m ? n : -1;
};

console.log(findNb(4183059834009));