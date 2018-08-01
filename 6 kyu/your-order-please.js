// Kata Link: https://codewars.com/kata/your-order-please

const order = (words) => {
  return words.split(' ').sort((a, b) => a.match(/\d/) - b.match(/\d/)).join(' ');
};

console.log(order('is2 Thi1s T4est 3a'));