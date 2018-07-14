// Kata Link: https://codewars.com/kata/easy-wallpaper

function wallpaper(l, w, h) {
  let key = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
  if (l === 0 || w === 0 || h === 0) return key[0];
  return key[Math.ceil(2 * h * ((l + w) / 0.52 / 10) * 1.15)];
}

let result = wallpaper(6.3, 4.5, 3.29);
console.log(result);