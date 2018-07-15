// Kata Link: https://www.codewars.com/kata/word-a10n-abbreviation

function abbreviate(string) {
  return string.replace(/\w{4,}/g, word => word[0] + (word.length - 2) + word.slice(-1));
}

let result = abbreviate('internationalization');
console.log(result);