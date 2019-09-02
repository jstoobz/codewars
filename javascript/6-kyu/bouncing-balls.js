// Kata Link: https://www.codewars.com/kata/bouncing-balls

const bouncingBall = (h, bounce, window) => {
  let seen = -1;

  if (bounce > 0 && bounce < 1) {
    while (h > window) {
      h *= bounce;
      seen += 2;
    }
  }

  return seen;
};

console.log(bouncingBall(3.0, 0.66, 1.5));