// Kata Link: https://codewars.com/kata/good-vs-evil

const goodVsEvil = (good, evil) => {
  let goodKey = { 0: 1, 1: 2, 2: 3, 3: 3, 4: 4, 5: 10};
  let evilKey = { 0: 1, 1: 2, 2: 2, 3: 2, 4: 3, 5: 5, 6: 10};
  let goodTeam = good.split(' ').reduce((acc, el, i) => acc += el * goodKey[i], 0);
  let evilTeam = evil.split(' ').reduce((acc, el, i) => acc += el * evilKey[i], 0);

  return (goodTeam > evilTeam)
    ? `Battle Result: Good triumphs over Evil`
    : (goodTeam < evilTeam)
    ? `Battle Result: Evil eradicates all trace of Good`
    : `Battle Result: No victor on this battle field`;
};

console.log(goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1'));
console.log(goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0'));
console.log(goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0'));