// Kata Link: https://codewars.com/kata/consecutive-strings

const longestConsec = (strarr, k) => {
  const n = strarr.length;

  if (n === 0 || k > n || k <= 0) return '';

  return strarr.reduce((acc, _, i) => {
    const combinedStr = strarr.slice(i, i + k).join('');
    return combinedStr.length > acc.length ? combinedStr : acc;
  }, '')
};

console.log(longestConsec(['zone', 'abigail', 'theta', 'form', 'libe', 'zas'], 2));