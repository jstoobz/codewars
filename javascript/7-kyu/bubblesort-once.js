// Kata Link: https://codewars.com/kata/bubblesort-once

const bubblesortOnce = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
  }

  return arr;
};

console.log(bubblesortOnce([9,7,5,3,1,2,4,6,8]));