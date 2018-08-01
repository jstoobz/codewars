// Kata Link: https://codewars.com/kata/your-order-please

const order = (words) => {
  if (!words.length) return '';
  return words.split(' ').map(el => el.match(/\d+/)).sort((a, b) => a[0] > b[0]).map(el => el.input).join(' ');
};

console.log(order('is2 Thi1s T4est 3a'));