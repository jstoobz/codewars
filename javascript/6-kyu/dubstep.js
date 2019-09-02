// Kata Link: https://codewars.com/kata/dubstep

function songDecoder(song){
  return song.split('WUB').filter(Boolean).join(' ');
}

let result = songDecoder('AWUBWUBWUBBWUBWUBWUBC');
console.log(result);