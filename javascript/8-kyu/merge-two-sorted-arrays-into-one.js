// Kata Link: https://www.codewars.com/kata/merge-two-sorted-arrays-into-one

const mergeArrays = (arr1, arr2) => [...(new Set([...arr1, ...arr2]))].sort((a, b) => a - b);

console.log(mergeArrays([1, 3, 5, 7, 9], [10, 10, 8, 6, 4, 2