// Kata Link: https://codewars.com/kata/check-the-exam

function checkExam(array1, array2) {
  const score = array2.reduce((acc, el, i) => {
    if (!el) return acc;
    if (el === array1[i]) return acc += 4;
    if (el !== array1[i]) return acc -= 1;
  }, 0);

  return (score > 0) ? score : 0;
}

let result = checkExam(['a', 'a', 'b', 'b'], ['a', 'c', 'b', 'd']);
console.log(result);