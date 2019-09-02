// Kata Link: https://www.codewars.com/kata/queue-time-counter

const queue = (queuers, pos) => {
  return queuers.reduce((acc, el, i) => acc + Math.min(el, queuers[pos] - Number(i > pos)), 0);
};

console.log(queue([2, 5, 3, 6, 4], 2));