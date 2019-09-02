// Kata Link: https://codewars.com/kata/digital-cypher

function encode(str, n) {
  const num = n.toString();
  return [...str].map((el, i) => el.charCodeAt(0) - 96 + +num[i % num.length]);
}

let result = encode('masterpiece',1939);
console.log(result);