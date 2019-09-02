// Kata Link: https://codewars.com/kata/anagram-detection

function isAnagram(test, original) {
  test = test.toLowerCase().split('').sort().join('');
  original = original.toLowerCase().split('').sort().join('');
  return (test === original);
}

let result = isAnagram('Buckeethead', 'DeeathCubeK');
console.log(result);