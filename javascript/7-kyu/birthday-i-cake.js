// Kata Link: https://codewars.com/kata/birthday-i-cake

const cake = (x, y) => {
  let total = 0;
  let map = 'abcdefghijklmnopqrstuvwxyz'.split('');

  y.split('').forEach((el, i) => {
    if (i % 2 === 0) total += el.charCodeAt();
    else total += map.indexOf(el) + 1;
  })

  return (total / x >= .7) ? `Fire!` : `That was close!`;
};

console.log(cake(900, 'abcdef'));