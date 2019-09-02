// Kata Link: https://codewars.com/kata/growth-of-a-population

function nbYear(p0, percent, aug, p) {
  for (var years = 0; p0 < p; years++) p0 += (p0 * (percent/100)) + aug;
  return years;
}

let result = nbYear(1500, 5, 100, 5000);
console.log(result);