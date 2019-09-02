// Kata Link: https://codewars.com/kata/find-the-smallest-integer-in-the-array

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.sort((a, b) => a - b)[0];
  }
}

let sif = new SmallestIntegerFinder();
let result = sif.findSmallestInt([78,56,232,12,8]);
console.log(result);