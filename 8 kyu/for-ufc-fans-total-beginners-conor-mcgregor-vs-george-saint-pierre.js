// Kata Link: https://codewars.com/kata/for-ufc-fans-total-beginners-conor-mcgregor-vs-george-saint-pierre

var quote = function(fighter) {
  return (fighter.toLowerCase() === 'george saint pierre') ? `I am not impressed by your performance.` : `I'd like to take this chance to apologize.. To absolutely NOBODY!`;
};

console.log(quote('George Saint Pierre'));
console.log(quote('Conor McGregor'));