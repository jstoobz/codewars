// Kata Link: https://codewars.com/kata/duck-shoot-easy-version

const duckShoot = (ammo, aim, ducks) => {
  let hits = Math.floor(ammo * aim);

  while (hits--) ducks = ducks.replace(/2/, 'X');

  return ducks;
};

console.log(duckShoot(4, 0.64, '|~~2~~~22~2~~22~2~~~~2~~~|'));