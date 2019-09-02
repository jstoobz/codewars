// Kata Link: https://codewars.com/kata/drone-fly-by

const flyBy = (lamps, drone) => {
  return lamps.split('').slice(0, drone.length).join('').replace(/x/gi, 'o').concat(lamps.slice(drone.length));
};

console.log(flyBy('xxxxxx', '====T'));