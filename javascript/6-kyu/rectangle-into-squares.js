// Kata Link: https://codewars.com/kata/rectangle-into-squares

const sqInRect = (lng, wdth) => {
  if (lng === wdth) return null;

  let squares = [];

  while (lng !== wdth) {
    if (lng > wdth) {
      squares.push(wdth);
      lng -= wdth;
    } else {
      squares.push(lng);
      wdth -= lng;
    }
  }

  squares.push(squares[squares.length - 1]);

  return squares;
};

console.log(sqInRect(3, 5));