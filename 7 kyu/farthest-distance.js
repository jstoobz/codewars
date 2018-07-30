// Kata Link: https://codewars.com/kata/farthest-distance

const furthestDistance = (arr) => {
  let max = 0;

  for (var [x1, y1] of arr)
    for (var [x2, y2] of arr)
      max = Math.max(max, Math.hypot(Math.abs(x1 - x2), Math.abs(y1 - y2)))

  return +max.toFixed(2);
};

console.log(furthestDistance([[1,1], [2,3], [5,5], [4,3], [3,3], [4,1], [2,2]]));