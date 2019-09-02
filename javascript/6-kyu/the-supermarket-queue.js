// Kata Link: https://codewars.com/kata/the-supermarket-queue

const queueTime = (customers, n) => {
  if (n < 1) return 0;
  if (n === 1) return customers.reduce((acc, el) => acc + el, 0);

  const head = customers.slice(0, n);
  const tail = customers.slice(n);
  const lines = tail.reduce((acc, el) => {
    const minIdx = acc.indexOf(Math.min(...acc));
    acc[minIdx] += el;
    return acc;
  }, head);

  return Math.max(...lines);
};

console.log(queueTime([1, 2, 3, 4], 2));