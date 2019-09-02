// Kata Link: https://codewars.com/kata/format-a-string-of-names-like-bart-lisa-and-maggie

const list = (names) => {
  return !names ? '' : names.map(({ name }) => name).join(', ').replace(/[,](?!.*,)/g, ' &');
};

console.log(list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]));